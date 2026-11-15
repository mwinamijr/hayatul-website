import { ChevronDown, Download, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { NAV, SITE, telLink } from "@/lib/site";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
    isActive ? "bg-sky-soft text-brand" : "text-ink hover:text-brand"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdown = useRef<HTMLDivElement>(null);

  // Close menus when the page changes.
  useEffect(() => {
    setOpen(false);
    setSchoolsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdown.current && !dropdown.current.contains(e.target as Node)) setSchoolsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSchoolsOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // No page scroll behind the open phone menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const schoolsActive = location.pathname.startsWith("/schools");

  return (
    // Solid background, no backdrop-blur: a blur would make the fixed phone menu below size itself to the header.
    <header className={`sticky top-0 z-40 border-b-4 border-sky bg-surface transition-shadow ${scrolled ? "shadow-md" : ""}`}>
      {/* Top strip: phone and e-mail (tablet and up) */}
      <div className="hidden bg-brand-dark text-white/90 md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <span>{SITE.location}</span>
          <div className="flex items-center gap-5">
            {SITE.phones.map((p) => (
              <a key={p} href={telLink(p)} className="inline-flex items-center gap-1.5 hover:text-white">
                <Phone className="size-3.5" aria-hidden /> {p}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="hover:text-white">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-3 lg:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${SITE.name}, mwanzo`}>
          <img src="/logo.svg" alt="" className="h-11 w-auto shrink-0 lg:h-14" width={62} height={44} />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-extrabold text-brand sm:text-lg">{SITE.short}</span>
            <span className="block truncate text-xs font-medium text-muted">Complex · Tangu {SITE.founded}</span>
          </span>
        </Link>

        {/* Computer menu */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menyu kuu">
          {NAV.map((item) =>
            "children" in item ? (
              <div key={item.label} className="relative" ref={dropdown}>
                <button
                  type="button"
                  className={`${linkClass({ isActive: schoolsActive })} inline-flex items-center gap-1`}
                  aria-expanded={schoolsOpen}
                  onClick={() => setSchoolsOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown className={`size-4 transition-transform ${schoolsOpen ? "rotate-180" : ""}`} aria-hidden />
                </button>
                {schoolsOpen && (
                  <div className="card absolute top-full left-0 mt-2 w-72 p-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-brand-soft hover:text-brand"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/joining-forms" className="btn-primary hidden sm:inline-flex">
            <Download className="size-4" aria-hidden />
            Fomu za kujiunga
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label={open ? "Funga menyu" : "Fungua menyu"}
            aria-expanded={open}
            aria-controls="phone-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Phone and tablet menu */}
      {open && (
        <div id="phone-menu" className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-surface md:top-[100px] lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Menyu">
            {NAV.map((item) =>
              "children" in item ? (
                item.children.map((child) => (
                  <NavLink key={child.to} to={child.to} className="rounded-xl px-4 py-3.5 text-base font-semibold hover:bg-brand-soft">
                    {child.label}
                  </NavLink>
                ))
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3.5 text-base font-semibold ${isActive ? "bg-brand-soft text-brand" : "hover:bg-brand-soft"}`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
            <Link to="/joining-forms" className="btn-primary mt-3 w-full">
              <Download className="size-4" aria-hidden />
              Pakua fomu za kujiunga
            </Link>
            <div className="mt-4 grid gap-2 border-t border-line pt-4 text-sm">
              {SITE.phones.map((p) => (
                <a key={p} href={telLink(p)} className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand">
                  <Phone className="size-4" aria-hidden /> {p}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
