import { ArrowLeft, CalendarDays, Newspaper, RefreshCw, UserRound } from "lucide-react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import NewsCard, { NewsCardSkeleton } from "@/components/NewsCard";
import { PageHero, Section, useTitle } from "@/components/Page";
import { api, apiLink, formatDate, useLoad } from "@/lib/api";

const PAGE_SIZE = 9;

function Problem({ text, retry }: { text: string; retry?: () => void }) {
  return (
    <div className="card mx-auto flex max-w-xl flex-col items-center gap-4 p-10 text-center">
      <Newspaper className="size-10 text-brand/40" aria-hidden />
      <p className="text-muted">{text}</p>
      {retry && (
        <button type="button" onClick={retry} className="btn-outline">
          <RefreshCw className="size-4" aria-hidden /> Jaribu tena
        </button>
      )}
    </div>
  );
}

export function NewsList() {
  const [params, setParams] = useSearchParams();
  const page = Math.max(1, Number(params.get("page")) || 1);
  const { data, loading, error, retry } = useLoad((signal) => api.news(page, PAGE_SIZE, signal), `news-${page}`);

  const goTo = (n: number) => setParams(n > 1 ? { page: String(n) } : {});

  return (
    <>
      <PageHero
        title="Habari"
        intro="Taarifa mpya kuhusu yanayoendelea katika shule zetu na taasisi kwa ujumla: matukio, mitihani, mahafali na miradi."
      />
      <Section>
        {error ? (
          <Problem text="Habari hazikuweza kupakiwa sasa hivi. Angalia mtandao na ujaribu tena." retry={retry} />
        ) : !loading && !data?.results.length ? (
          <Problem text="Bado hakuna habari. Tembelea tena hivi karibuni." />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }, (_, n) => <NewsCardSkeleton key={n} />)
              : data?.results.map((item) => <NewsCard key={item.id} item={item} />)}
          </div>
        )}

        {data && data.num_pages > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-3" aria-label="Kurasa">
            <button type="button" className="btn-outline" disabled={page <= 1} onClick={() => goTo(page - 1)}>
              Nyuma
            </button>
            <span className="text-sm text-muted">
              Ukurasa {page} kati ya {data.num_pages}
            </span>
            <button type="button" className="btn-outline" disabled={page >= data.num_pages} onClick={() => goTo(page + 1)}>
              Mbele
            </button>
          </nav>
        )}
      </Section>
    </>
  );
}

export function NewsDetail() {
  const { id = "" } = useParams();
  const { data, loading, error, retry } = useLoad((signal) => api.newsItem(id, signal), `news-item-${id}`);
  useTitle(data?.title ?? "Habari");

  const paragraphs = (data?.content ?? "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <article>
      <div className="bg-brand-dark text-white">
        <div className="container-page max-w-4xl py-10 sm:py-14">
          <Link to="/news" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/80 hover:text-white">
            <ArrowLeft className="size-4" aria-hidden /> Habari zote
          </Link>
          {loading ? (
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-9 w-4/5 animate-pulse rounded bg-white/15" />
              <div className="h-4 w-40 animate-pulse rounded bg-white/15" />
            </div>
          ) : data ? (
            <>
              <h1 className="mt-4 text-3xl leading-tight font-extrabold sm:text-4xl">{data.title}</h1>
              <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/75">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" aria-hidden /> {formatDate(data.published_at)}
                </span>
                {data.author_name && (
                  <span className="inline-flex items-center gap-2">
                    <UserRound className="size-4" aria-hidden /> {data.author_name}
                  </span>
                )}
              </p>
            </>
          ) : null}
        </div>
      </div>

      <div className="container-page max-w-4xl py-10 sm:py-14">
        {error === "not_found" ? (
          <Problem text="Habari hii haipatikani. Huenda imeondolewa." />
        ) : error ? (
          <Problem text="Habari haikuweza kupakiwa. Angalia mtandao na ujaribu tena." retry={retry} />
        ) : data ? (
          <>
            {data.picture_url && (
              <img src={apiLink(data.picture_url)} alt="" className="mb-8 w-full rounded-3xl object-cover shadow-lg" />
            )}
            <div className="prose-text text-base leading-relaxed text-ink/90 sm:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i} className="whitespace-pre-line">
                  {p}
                </p>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-3" aria-hidden>
            <div className="aspect-video animate-pulse rounded-3xl bg-line" />
            <div className="h-4 w-full animate-pulse rounded bg-line" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-line" />
          </div>
        )}
      </div>
    </article>
  );
}
