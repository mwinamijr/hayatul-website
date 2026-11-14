import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { SITE, telLink } from "@/lib/site";

import { SocialLinks } from "./Social";

const LINKS = [
  { label: "Kuhusu taasisi", to: "/about" },
  { label: "Shule ya Awali na Msingi", to: "/schools/primary" },
  { label: "Shule ya Sekondari", to: "/schools/secondary" },
  { label: "Fomu za kujiunga", to: "/joining-forms" },
  { label: "Habari", to: "/news" },
  { label: "Kituo cha Afya", to: "/health" },
];

const EXTERNAL = [
  { label: "NECTA", href: "https://www.necta.go.tz" },
  { label: "Wizara ya Elimu", href: "https://www.moe.go.tz" },
  { label: "Wizara ya Afya", href: "https://www.moh.go.tz" },
  { label: "Mfumo wa shule (SIS)", href: SITE.sis },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-dark text-white/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-white p-1.5">
              <img src="/logo.svg" alt="" className="h-10 w-auto" width={56} height={40} loading="lazy" />
            </span>
            <span className="text-lg font-extrabold text-white">{SITE.name}</span>
          </div>
          <p className="text-sm leading-relaxed">
            Taasisi ya Kiislamu chini ya BAKWATA, inayotoa elimu, malezi na huduma kwa jamii ya Bonga na maeneo jirani
            tangu {SITE.founded}.
          </p>
          <SocialLinks tone="dark" />
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">Taasisi</h2>
          <ul className="space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-block py-1 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">Viungo</h2>
          <ul className="space-y-2 text-sm">
            {EXTERNAL.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">Mawasiliano</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {SITE.location}
                <br />
                {SITE.postal}
              </span>
            </li>
            {SITE.phones.map((p) => (
              <li key={p}>
                <a href={telLink(p)} className="flex items-center gap-3 hover:text-white">
                  <Phone className="size-4 shrink-0" aria-hidden /> {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 break-all hover:text-white">
                <Mail className="size-4 shrink-0" aria-hidden /> {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Haki zote zimehifadhiwa.
          </p>
          <p>Bonga, Babati - Manyara, Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
