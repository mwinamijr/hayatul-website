import { CalendarDays, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

import { apiLink, formatDate, type NewsItem } from "@/lib/api";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="card group flex flex-col overflow-hidden">
      <Link to={`/news/${item.id}`} className="block aspect-[16/10] overflow-hidden bg-brand-soft" tabIndex={-1} aria-hidden>
        {item.picture_url ? (
          <img
            src={apiLink(item.picture_url)}
            alt=""
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-brand/40">
            <Newspaper className="size-12" aria-hidden />
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex items-center gap-2 text-xs font-medium text-muted">
          <CalendarDays className="size-3.5" aria-hidden />
          {formatDate(item.published_at)}
        </p>
        <h3 className="mt-2 text-lg leading-snug font-bold">
          <Link to={`/news/${item.id}`} className="hover:text-brand">
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{item.summary}</p>
        <Link to={`/news/${item.id}`} className="mt-4 text-sm font-semibold text-brand hover:underline">
          Soma zaidi <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}

export function NewsCardSkeleton() {
  return (
    <div className="card overflow-hidden" aria-hidden>
      <div className="aspect-[16/10] animate-pulse bg-line" />
      <div className="space-y-3 p-6">
        <div className="h-3 w-24 animate-pulse rounded bg-line" />
        <div className="h-5 w-4/5 animate-pulse rounded bg-line" />
        <div className="h-3 w-full animate-pulse rounded bg-line" />
      </div>
    </div>
  );
}
