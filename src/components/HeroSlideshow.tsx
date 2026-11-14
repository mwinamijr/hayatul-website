import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import lab from "@/assets/images/carousel001.webp";
import students from "@/assets/images/carousel002.webp";
import campus from "@/assets/images/carousel003.webp";
import { api, apiLink, useLoad } from "@/lib/api";
import { SITE } from "@/lib/site";

interface Shown {
  key: string;
  src: string;
  title: string;
  caption: string;
}

// Shown until (or if) the school uploads its own pictures on Website > Slideshow in the SIS.
const FALLBACK: Shown[] = [
  { key: "f1", src: students, title: "Elimu bora yenye maadili ya Kiislamu", caption: "Malezi na elimu kwa vijana wetu tangu 1998." },
  { key: "f2", src: lab, title: "Sayansi kwa vitendo", caption: "Maabara zinazowawezesha wanafunzi kujifunza kwa kufanya." },
  { key: "f3", src: campus, title: "Mazingira mazuri ya kujifunzia", caption: "Bonga, Babati: mazingira tulivu, salama na ya kijani." },
];

const INTERVAL = 6000;

export default function HeroSlideshow() {
  const { data } = useLoad((signal) => api.slides(signal), "slides");
  const slides = useMemo<Shown[]>(() => {
    const uploaded = (data ?? [])
      .filter((s) => s.picture_url)
      .map((s) => ({
        key: `s${s.id}`,
        src: apiLink(s.picture_url as string),
        title: s.title || FALLBACK[0].title,
        caption: s.description || "",
      }));
    return uploaded.length ? uploaded : FALLBACK;
  }, [data]);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const index = active % count;

  const go = useCallback((n: number) => setActive((n + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((n) => (n + 1) % count), INTERVAL);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  // Swipe on phones and tablets.
  const [touchX, setTouchX] = useState<number | null>(null);

  const slide = slides[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-dark text-white"
      aria-roledescription="carousel"
      aria-label="Picha za shule"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        setTouchX(null);
      }}
    >
      {slides.map((s, i) => (
        <img
          key={s.key}
          src={s.src}
          alt=""
          aria-hidden={i !== index}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 -z-20 size-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-dark/95 via-brand-dark/75 to-brand-dark/30" aria-hidden />

      <div className="container-page flex min-h-[540px] flex-col justify-center py-16 sm:min-h-[600px] lg:min-h-[640px]">
        <p className="eyebrow mb-4 text-accent">{SITE.name} · Tangu {SITE.founded}</p>
        <div key={slide.key} className="max-w-2xl" aria-live="polite">
          <h1 className="text-3xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">{slide.title}</h1>
          {slide.caption && <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{slide.caption}</p>}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/joining-forms" className="btn-primary">
            <Download className="size-4" aria-hidden />
            Pakua fomu za kujiunga
          </Link>
          <Link to="/about" className="btn-ghost-light">
            Ifahamu taasisi
          </Link>
        </div>

        {count > 1 && (
          <div className="mt-10 flex items-center gap-3">
            <button type="button" onClick={() => go(index - 1)} aria-label="Picha iliyotangulia" className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10">
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Picha ya ${i + 1}`}
                  aria-current={i === index}
                  className="flex h-11 items-center"
                >
                  <span className={`block h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-accent" : "w-4 bg-white/40"}`} />
                </button>
              ))}
            </div>
            <button type="button" onClick={() => go(index + 1)} aria-label="Picha inayofuata" className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 hover:bg-white/10">
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
