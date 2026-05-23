import useFancybox from "../hooks/useFancybox";
import { stylingVideos } from "../data/stylingVideos.js";


export default function StylingVideos() {
  const [fancyboxRef] = useFancybox({
  });

  return (
    <div className="stack">
      <header className="pageHeader">
        <h1 className="categoryTitle">Styling • Videos</h1>
      </header>

      <section className="videoThumbGrid" ref={fancyboxRef}>
        {stylingVideos.map((v) => (
          <a
            key={v.id}
            data-fancybox="styling-videos"
            href={v.embed}
            data-caption={v.title ? `${v.title}${v.credit ? ` — ${v.credit}` : ""}` : ""}
            className="videoThumb"
          >
            <img
              src={v.thumb}
              alt={v.title || "Video"}
              loading="lazy"
              className="videoThumbImg"
            />
            <div className="playBadge" aria-hidden="true">▶</div>

            {(v.title) && (
              <div className="videoThumbMeta">
                {v.title ? <p className="caption">{v.title}</p> : null}
              </div>
            )}

          </a>
        ))}
      </section>
    </div>
  );
}
