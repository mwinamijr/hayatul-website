import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

import { api, formatDate, useLoad } from "@/lib/api";

/**
 * Comments under a news item. Anyone may comment (name and text). A comment shows at once unless the school reviews
 * it first (links, phone numbers, blocked words, or every comment when the school chose that): then the visitor is
 * told it will show after review. Moderation is in the SIS (Website > Comments).
 */
export default function Comments({ newsId }: { newsId: string }) {
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(0);
  const { data, loading } = useLoad((signal) => api.comments(newsId, page, signal), `comments-${newsId}-${page}-${reload}`);
  const [form, setForm] = useState({ name: "", body: "", contact: "", website: "" });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (form.name.trim().length < 2 || form.body.trim().length < 2) {
      setMessage({ ok: false, text: "Andika jina lako na maoni yako." });
      return;
    }
    setSending(true);
    setMessage(null);
    try {
      const result = await api.addComment(newsId, form);
      setMessage({ ok: true, text: result.message });
      setForm({ name: form.name, body: "", contact: "", website: "" });
      if (result.shown) setReload((n) => n + 1);
    } catch (err) {
      setMessage({ ok: false, text: (err as Error).message });
    } finally {
      setSending(false);
    }
  };

  const count = data?.count ?? 0;

  return (
    <section className="mt-12 border-t border-line pt-10" aria-labelledby="comments-title">
      <h2 id="comments-title" className="flex items-center gap-2 text-2xl font-extrabold">
        <MessageCircle className="size-6 text-sky-dark" aria-hidden /> Maoni {count > 0 && <span className="text-muted">({count})</span>}
      </h2>

      {loading && !data ? (
        <div className="mt-6 h-20 animate-pulse rounded-2xl bg-line" aria-hidden />
      ) : count === 0 ? (
        <p className="mt-4 text-muted">Bado hakuna maoni. Kuwa wa kwanza kutoa maoni.</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {data?.results.map((c) => (
            <li key={c.id} className="card p-5">
              <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-bold">{c.name}</span>
                <span className="text-xs text-muted">{formatDate(c.created_at)}</span>
              </p>
              <p className="mt-2 leading-relaxed whitespace-pre-line text-ink/90">{c.body}</p>
            </li>
          ))}
        </ul>
      )}
      {data && data.num_pages > 1 && (
        <div className="mt-4 flex items-center gap-3">
          <button type="button" className="btn-outline" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Nyuma
          </button>
          <span className="text-sm text-muted">
            {page} / {data.num_pages}
          </span>
          <button type="button" className="btn-outline" disabled={page >= data.num_pages} onClick={() => setPage(page + 1)}>
            Mbele
          </button>
        </div>
      )}

      {data?.allow_comments === false ? (
        <p className="mt-8 text-muted">Maoni yamefungwa kwa habari hii.</p>
      ) : (
        <form onSubmit={submit} className="card mt-8 space-y-4 p-5 sm:p-6" noValidate>
          <h3 className="text-lg font-bold">Toa maoni yako</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-semibold">
              Jina *
              <input
                className="mt-1 block min-h-11 w-full rounded-xl border border-line px-3 font-normal"
                value={form.name}
                maxLength={80}
                autoComplete="name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label className="block text-sm font-semibold">
              Simu au barua pepe <span className="font-normal text-muted">(hiari; haitaonyeshwa)</span>
              <input
                className="mt-1 block min-h-11 w-full rounded-xl border border-line px-3 font-normal"
                value={form.contact}
                maxLength={120}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
              />
            </label>
          </div>
          {/* People never see or fill this; robots do, and their comment is ignored. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
          />
          <label className="block text-sm font-semibold">
            Maoni *
            <textarea
              className="mt-1 block w-full rounded-xl border border-line px-3 py-2 font-normal"
              rows={4}
              maxLength={1000}
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
            />
            <span className="mt-1 block text-right text-xs font-normal text-muted">{form.body.length} / 1000</span>
          </label>
          {message && (
            <p role="status" className={`text-sm font-semibold ${message.ok ? "text-brand" : "text-accent-dark"}`}>
              {message.text}
            </p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">Maoni yasiyofaa huondolewa. Usiweke namba za simu wala viungo (links).</p>
            <button type="submit" className="btn-brand" disabled={sending}>
              <Send className="size-4" aria-hidden /> {sending ? "Inatuma..." : "Tuma maoni"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
