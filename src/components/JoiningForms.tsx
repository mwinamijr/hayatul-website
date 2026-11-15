import { Clock, Download, FileText, RefreshCw } from "lucide-react";

import { api, apiLink, formatSize, useLoad, type JoiningForm } from "@/lib/api";
import { LEVELS } from "@/lib/site";

/** One card per level with the newest form; older years still on the server are listed under it. */
export default function JoiningForms({ showOlder = false }: { showOlder?: boolean }) {
  const { data, loading, error, retry } = useLoad((signal) => api.forms(signal), "forms");

  if (error) {
    return (
      <div className="card flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">Fomu hazikuweza kupakiwa sasa hivi. Angalia mtandao na ujaribu tena.</p>
        <button type="button" onClick={retry} className="btn-outline">
          <RefreshCw className="size-4" aria-hidden /> Jaribu tena
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {LEVELS.map((level) => {
        const forms = (data ?? []).filter((f) => f.level === level.level).sort((a, b) => b.year - a.year);
        const newest: JoiningForm | undefined = forms[0];
        return (
          <article key={level.level} className="card flex flex-col p-6">
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-sky-soft text-sky-dark">
              <FileText className="size-6" aria-hidden />
            </div>
            <p className="eyebrow">{level.short}</p>
            <h3 className="mt-1 text-xl font-bold">{level.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{level.text}</p>

            <div className="mt-6">
              {loading ? (
                <div className="h-11 animate-pulse rounded-full bg-line" />
              ) : newest ? (
                <>
                  <a href={apiLink(newest.download_url)} className="btn-brand w-full" download>
                    <Download className="size-4" aria-hidden />
                    Pakua fomu ya {newest.year}
                  </a>
                  <p className="mt-2 text-center text-xs text-muted">PDF · {formatSize(newest.size)}</p>
                  {showOlder && forms.length > 1 && (
                    <ul className="mt-4 space-y-1 border-t border-line pt-3 text-sm">
                      {forms.slice(1).map((f) => (
                        <li key={f.id}>
                          <a href={apiLink(f.download_url)} className="inline-flex min-h-9 items-center gap-2 text-brand hover:underline" download>
                            <Download className="size-3.5" aria-hidden /> Fomu ya {f.year}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <p className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent-soft px-4 text-sm font-semibold text-accent-dark">
                  <Clock className="size-4" aria-hidden /> Fomu itapatikana hivi karibuni
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
