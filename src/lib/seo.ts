import { useEffect } from "react";

import { SITE } from "./site";

/** The website's own address (for canonical links and sharing). Set VITE_SITE_URL when it changes. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://hayatulislamiya.com").replace(/\/$/, "");

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageSeo {
  title: string;
  description: string;
}

/**
 * Title and description of every page, in Swahili with the English words people also search with (school, primary,
 * secondary, Babati, Manyara, Tanzania). Search engines show these in their results; keep each description under
 * about 160 characters. vite.config.ts lists the same paths in sitemap.xml.
 */
export const PAGES: Record<string, PageSeo> = {
  "/": {
    title: `${SITE.name} | Shule ya Msingi na Sekondari Babati, Manyara`,
    description:
      "Hayatul Islamiya Complex, Bonga Babati: shule ya awali, msingi na sekondari (O-Level na A-Level) yenye maadili ya Kiislamu tangu 1998. Islamic school in Babati, Tanzania.",
  },
  "/about": {
    title: `Kuhusu Sisi | ${SITE.name}`,
    description:
      "Historia, dira na dhamira ya Hayatul Islamiya Complex, taasisi ya Kiislamu chini ya BAKWATA inayotoa elimu na huduma kwa jamii Bonga, Babati tangu 1998.",
  },
  "/schools/primary": {
    title: `Shule ya Awali na Msingi Hayatul Islamiya | Babati`,
    description:
      "Shule ya awali na msingi Bonga, Babati: Kiswahili, Hisabati, Sayansi, English, Qur'an na Kiarabu. Primary school in Babati, Manyara, Tanzania.",
  },
  "/schools/secondary": {
    title: `Shule ya Sekondari Hayatul Islamiya | O-Level na A-Level Babati`,
    description:
      "Shule ya sekondari Bonga, Babati: O-Level na A-Level (PCM, PCB, PGM, HGL, HGK, HKL, EGM, KLA, HGE). Secondary school in Babati, Manyara, Tanzania.",
  },
  "/joining-forms": {
    title: `Fomu za Kujiunga 2027 | ${SITE.name}`,
    description:
      "Pakua fomu za kujiunga na shule ya msingi, kidato cha kwanza (O-Level) na kidato cha tano (A-Level) Hayatul Islamiya, Babati. Joining forms, PDF.",
  },
  "/news": {
    title: `Habari na Matukio | ${SITE.name}`,
    description: "Habari mpya za shule za Hayatul Islamiya Babati: matukio, mitihani, matokeo, mahafali na miradi ya taasisi.",
  },
  "/health": {
    title: `Kituo cha Afya Hayatul Islamiya | Bonga, Babati`,
    description:
      "Mradi wa ujenzi wa zahanati ya Hayatul Islamiya karibu na barabara ya Babati - Dodoma: huduma zitakazotolewa na maendeleo ya ujenzi.",
  },
  "/contact": {
    title: `Wasiliana Nasi | ${SITE.name}`,
    description: `Simu ${SITE.phones.join(", ")}, barua pepe ${SITE.email}. ${SITE.postal}. Shule zetu ziko Bonga, Babati - Manyara, Tanzania.`,
  },
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = url;
}

/** Puts a page's title, description, canonical address and sharing card in the page head. */
export function applySeo(path: string, seo: PageSeo | null, options: { image?: string; type?: string } = {}) {
  const page = seo ?? { title: `Ukurasa haupatikani | ${SITE.name}`, description: PAGES["/"].description };
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  document.title = page.title;
  setMeta("name", "description", page.description);
  // A page that does not exist is kept out of search results.
  setMeta("name", "robots", seo ? "index, follow, max-image-preview:large" : "noindex, follow");
  setCanonical(url);
  setMeta("property", "og:title", page.title);
  setMeta("property", "og:description", page.description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:type", options.type ?? "website");
  setMeta("property", "og:image", options.image ?? DEFAULT_IMAGE);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", page.title);
  setMeta("name", "twitter:description", page.description);
  setMeta("name", "twitter:image", options.image ?? DEFAULT_IMAGE);
}

/** The page's own SEO for pages whose text comes from the API (a news item). */
export function useSeo(path: string, seo: PageSeo | null, options: { image?: string; type?: string } = {}, ready = true) {
  useEffect(() => {
    if (ready) applySeo(path, seo, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, seo?.title, seo?.description, options.image, ready]);
}

/** The SEO for a path from PAGES (news items get the news list's until their own text has loaded). */
export function seoForPath(path: string): PageSeo | null {
  if (PAGES[path]) return PAGES[path];
  if (/^\/news\/\d+$/.test(path)) return PAGES["/news"];
  return null;
}
