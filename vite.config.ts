import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Plugin } from "vite";

// The pages listed in sitemap.xml (keep in step with src/lib/seo.ts PAGES and src/App.tsx).
const SITEMAP_PAGES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/joining-forms", priority: "0.9", changefreq: "weekly" },
  { path: "/schools/primary", priority: "0.8", changefreq: "monthly" },
  { path: "/schools/secondary", priority: "0.8", changefreq: "monthly" },
  { path: "/news", priority: "0.7", changefreq: "weekly" },
  { path: "/about", priority: "0.6", changefreq: "yearly" },
  { path: "/contact", priority: "0.6", changefreq: "yearly" },
  { path: "/health", priority: "0.5", changefreq: "monthly" },
];

/** Fills %SITE_URL% in index.html and writes sitemap.xml and robots.txt for the site's address. */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: "hayatul-seo-files",
    transformIndexHtml: (html) => html.replaceAll("%SITE_URL%", siteUrl),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = SITEMAP_PAGES.map(
        (p) =>
          `  <url><loc>${siteUrl}${p.path}</loc><lastmod>${today}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`,
      ).join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}

// In development the website talks to the local API through this proxy (no CORS set-up needed).
// In production it uses VITE_API_URL and VITE_SITE_URL from .env.production.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://hayatulislamiya.com").replace(/\/$/, "");
  return {
    plugins: [react(), tailwindcss(), seoFiles(siteUrl)],
    resolve: {
      alias: { "@": path.resolve(import.meta.dirname, "./src") },
    },
    server: {
      port: 5174,
      proxy: { "/api": { target: process.env.API_PROXY ?? "http://127.0.0.1:8000", changeOrigin: true } },
    },
    build: {
      target: "es2020",
      cssCodeSplit: true,
    },
  };
});
