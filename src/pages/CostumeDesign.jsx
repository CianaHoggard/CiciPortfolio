import { costumeDesign } from "../data/costumeDesign";
import useFancybox from "../hooks/useFancybox";

export default function CostumeDesign() {
  const [fancyboxRef] = useFancybox({});

  return (
    <div className="stack">
      <header className="pageHeader">
        <h1 className="categoryTitle">Costume Design</h1>
      </header>

      <div ref={fancyboxRef}>
        {costumeDesign.map((group) => (
          <section key={group.id} className="gallerySection">

            <h2 className="galleryTitle">
              {group.title}
              <span className="galleryCaption">
                {group.description}
              </span>
            </h2>

            <div className="stillsGrid">
              {group.images?.map((src) => (
                <a
                  key={src}
                  data-fancybox="costume-design"
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

            {group.trailer?.map((trailer, index) => (
              <section
                key={index}
                className="stack trailerSection"
              >
                <a
                  data-fancybox="costume-design"
                  href={trailer}
                  data-type="iframe"
                  className="videoThumb"
                >
                  <img
                    src={group.cover}
                    alt={`${group.title} trailer`}
                    className="videoThumbImg"
                  />

                  <div className="playBadge">
                    ▶
                  </div>
                </a>
              </section>
            ))}

          </section>
        ))}
      </div>
    </div>
  );
}
