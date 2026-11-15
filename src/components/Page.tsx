import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";


/** The green banner at the top of every inner page. */
export function PageHero({
  title,
  intro,
  crumb,
  image,
  children,
}: {
  title: string;
  intro?: ReactNode;
  crumb?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b-4 border-sky bg-brand-dark text-white">
      {image && <img src={image} alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-25" />}
      <div className="absolute inset-0 -z-10 bg-brand-dark/70" aria-hidden />
      <div className="container-page py-12 sm:py-16 lg:py-20">
        <nav aria-label="Ulipo" className="mb-4 flex items-center gap-1 text-xs font-medium text-white/70">
          <Link to="/" className="hover:text-white">
            Mwanzo
          </Link>
          <ChevronRight className="size-3.5" aria-hidden />
          <span className="text-white">{crumb ?? title}</span>
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 max-w-3xl sm:mb-10 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="text-2xl font-extrabold text-ink sm:text-3xl lg:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function TickList({ items, columns = 1 }: { items: readonly string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-2.5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-sky-dark" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
