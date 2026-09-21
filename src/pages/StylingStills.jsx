import { stylingStills } from "../data/stylingStills";
import useFancybox from "../hooks/useFancybox";

export default function StylingStills() {
  const [fancyboxRef] = useFancybox({});

  return (
    <div className="stack">
      <header className="pageHeader">
        <h1 className="categoryTitle">Styling • Stills</h1>
        <p className="lead"></p>
      </header>

      <div ref={fancyboxRef}>
        {stylingStills.map((group) => (
          <section key={group.id} className="gallerySection">
            <div
              className={
                group.id === "yoga" || group.id === "zombies"
                  ? "stillsGrid masonryGrid"
                  : "stillsGrid"
              }
            >
              {group.images.map((src) => (
                <a
                  key={src}
                  data-fancybox="styling-stills"
                  href={src}
                >
                  <img
                    src={src}
                    alt={group.title}
                    className="stillsImg"

                  />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
