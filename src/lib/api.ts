import { useEffect, useState } from "react";

/** The SIS API. Empty in development (Vite proxies /api), https://api.hayatulislamiya.com in production. */
export const API_URL = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

/** Turn a link the API gives (absolute or a path) into one on API_URL, so it works behind any proxy. */
export function apiLink(link: string): string {
  const url = new URL(link, "http://placeholder");
  return `${API_URL}${url.pathname}${url.search}`;
}

export type FormLevel = "primary" | "o_level" | "a_level";

export interface JoiningForm {
  id: number;
  level: FormLevel;
  level_label: string;
  year: number;
  size: number;
  uploaded_at: string;
  download_url: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  published_at: string;
  author_name: string;
  picture_url: string | null;
  content?: string;
}

export interface Slide {
  id: number;
  title: string | null;
  description: string | null;
  picture_url: string | null;
}

export interface NewsComment {
  id: number;
  name: string;
  body: string;
  created_at: string;
}

interface Paged<T> {
  count: number;
  num_pages: number;
  results: T[];
}

async function getJson<T>(path: string, signal?: AbortSignal): Promise<T> {
  // No cookies: these are public, read-only addresses (hayatul-api/website).
  const response = await fetch(`${API_URL}${path}`, { signal, credentials: "omit" });
  if (!response.ok) throw new Error(response.status === 404 ? "not_found" : "failed");
  return response.json() as Promise<T>;
}

export const api = {
  forms: (signal?: AbortSignal) =>
    getJson<Paged<JoiningForm>>("/api/website/joining-forms/?page_size=100", signal).then((r) => r.results),
  news: (page: number, pageSize: number, signal?: AbortSignal) =>
    getJson<Paged<NewsItem>>(`/api/website/news/?page=${page}&page_size=${pageSize}`, signal),
  newsItem: (id: string, signal?: AbortSignal) => getJson<NewsItem>(`/api/website/news/${encodeURIComponent(id)}/`, signal),
  comments: (id: string, page: number, signal?: AbortSignal) =>
    getJson<Paged<NewsComment> & { allow_comments: boolean }>(
      `/api/website/news/${encodeURIComponent(id)}/comments/?page=${page}&page_size=20`,
      signal,
    ),
  /** A plain form post (no cross-site permission needed). The hidden "website" field stays empty for people. */
  addComment: async (id: string, data: { name: string; body: string; contact: string; website: string }) => {
    const response = await fetch(`${API_URL}/api/website/news/${encodeURIComponent(id)}/comments/`, {
      method: "POST",
      credentials: "omit",
      body: new URLSearchParams(data),
    });
    const json = await response.json().catch(() => ({}));
    if (!response.ok) {
      const fields = (json.fields ?? json.detail ?? {}) as Record<string, string[] | string>;
      const first = typeof fields === "string" ? fields : Object.values(fields).flat()[0];
      throw new Error(
        response.status === 429
          ? "Umetuma maoni mengi kwa muda mfupi. Jaribu tena baadaye."
          : String(first || json.message || "Maoni hayakutumwa. Jaribu tena."),
      );
    }
    return json as { shown: boolean; message: string };
  },
  slides: (signal?: AbortSignal) =>
    getJson<Paged<Slide>>("/api/website/slides/?page_size=20", signal).then((r) => r.results),
};

export interface Loaded<T> {
  data: T | undefined;
  loading: boolean;
  error: string | null;
  retry: () => void;
}

/** Load once per key; aborted when the page changes. */
export function useLoad<T>(load: (signal: AbortSignal) => Promise<T>, key: string): Loaded<T> {
  const [state, setState] = useState<{ key: string; data?: T; error: string | null; done: boolean }>({
    key: "",
    error: null,
    done: false,
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal)
      .then((data) => setState({ key, data, error: null, done: true }))
      .catch((err: Error) => {
        if (!controller.signal.aborted) setState({ key, error: err.message, done: true });
      });
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, attempt]);

  const current = state.key === key;
  return {
    data: current ? state.data : undefined,
    loading: !current || !state.done,
    error: current ? state.error : null,
    retry: () => setAttempt((n) => n + 1),
  };
}

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("sw-TZ", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

export const formatSize = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
