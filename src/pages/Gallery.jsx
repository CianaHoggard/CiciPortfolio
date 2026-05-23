import { useMemo, useState } from "react";

export default function Gallery({ title, subtitle, items }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return items;

    return items.filter((it) => {
      const caption = (it.caption || "").toLowerCase();
      const credit = (it.credit || "").toLowerCase();
      return caption.includes(query) || credit.includes(query);
    });
  }, [q, items]);

  return (
    <div className="stack">
      <header className="pageHeader">
        <h1>{title}</h1>
        {subtitle ? <p className="lead">{subtitle}</p> : null}

        <input
          className="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
        />
      </header>

      <section className="galleryGrid">
        {filtered.map((it) => (
          <article className="galleryItem" key={it.id}>
            {it.type === "image" ? (
              <img src={it.src} alt={it.alt || it.caption || title} loading="lazy" />
            ) : (
              <div className="videoWrap">
                <iframe
                  src={it.embed}
                  title={it.caption || "video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {(it.caption || it.credit) && (
              <div className="galleryMeta">
                {it.caption ? <p className="caption">{it.caption}</p> : null}
                {it.credit ? <p className="muted">{it.credit}</p> : null}
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
