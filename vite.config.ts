import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// In development the website talks to the local API through this proxy (no CORS set-up needed).
// In production it uses VITE_API_URL from .env.production.
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
});
