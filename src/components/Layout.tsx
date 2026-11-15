import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { applySeo, seoForPath } from "@/lib/seo";

import Footer from "./Footer";
import Header from "./Header";

/** Title, description, canonical address and sharing card of the page (src/lib/seo.ts). */
function PageHead() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    applySeo(path, seoForPath(path));
  }, [pathname]);
  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2">
        Ruka hadi maudhui
      </a>
      <PageHead />
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
