import { SITE } from "@/lib/site";

// Small brand marks drawn inline (lucide no longer ships brand logos).
const ICONS: Record<keyof typeof SITE.social, { label: string; path: string }> = {
  facebook: {
    label: "Facebook",
    path: "M14 8.5V6.6c0-.8.2-1.3 1.4-1.3H17V2.2C16.6 2.1 15.5 2 14.2 2 11.5 2 9.8 3.6 9.8 6.6v1.9H7v3.3h2.8V22H14V11.8h2.8l.4-3.3H14Z",
  },
  instagram: {
    label: "Instagram",
    path: "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2ZM17 5.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1 1.1-.1 1.4-.1 4.1-.1ZM12 2c-2.7 0-3.1 0-4.1.1-3.7.2-5.6 2.1-5.8 5.8C2 8.9 2 9.3 2 12s0 3.1.1 4.1c.2 3.7 2.1 5.6 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.7-.2 5.6-2.1 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.2-3.7-2.1-5.6-5.8-5.8C15.1 2 14.7 2 12 2Z",
  },
  x: {
    label: "X (Twitter)",
    path: "M17.8 3h3l-6.6 7.6L22 21h-6.1l-4.8-6.3L5.6 21h-3l7.1-8.1L2.2 3h6.2l4.3 5.7L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z",
  },
  youtube: {
    label: "YouTube",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
};

export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const style =
    tone === "dark"
      ? "border-white/20 text-white/80 hover:bg-white hover:text-brand-dark"
      : "border-line text-brand hover:bg-brand hover:text-white";
  return (
    <ul className="flex flex-wrap gap-2">
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((key) => (
        <li key={key}>
          <a
            href={SITE.social[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ICONS[key].label}
            className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors ${style}`}
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
              <path d={ICONS[key].path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
