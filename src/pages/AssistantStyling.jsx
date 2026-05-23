import useFancybox from "../hooks/useFancybox";
import { assistantStyling } from "../data/assistantStyling.js";

export default function AssistantStyling() {
  const [fancyboxRef] = useFancybox({});

  return (
    <div className="stack">
      <header className="pageHeader">
        <h1 className="categoryTitle">Assistant Styling</h1>
      </header>

      <section className="videoThumbGrid" ref={fancyboxRef}>
        {assistantStyling.map((p) => (
          <a
            key={p.id}
            data-fancybox="assistant-styling"
            href={p.embed}
            data-caption={[
              p.title,
             p.director,
               null,
            ].filter(Boolean).join(" — ")}
            className="videoThumb"
          >
            <img
              src={p.thumb}
              alt={p.title}
              loading="lazy"
              className="videoThumbImg"
            />
            <div className="playBadge" aria-hidden="true">▶</div>
            <div className="videoThumbMeta">
              <p className="caption">{p.title}</p>

              {p.credit?.trim() && p.name?.trim() && (
                <p className="muted">
                  {p.credit}: {p.name}
                </p>
              )}

              {p.leadrole?.trim() && p.designer?.trim() && (
                <p className="muted">
                  {p.leadrole}: {p.designer}
                </p>
              )}
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
