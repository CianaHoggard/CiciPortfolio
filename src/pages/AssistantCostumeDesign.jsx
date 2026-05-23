import useFancybox from "../hooks/useFancybox";
import { assistantCostumeDesign } from "../data/assistantCostumeDesign.js";

export default function AssistantCostumeDesign() {
  const [fancyboxRef] = useFancybox({});

  return (
    <div className="stack">
      <header className="pageHeader">
        <h1 className="categoryTitle">Assistant Costume Design</h1>
      </header>

      <section className="videoThumbGrid" ref={fancyboxRef}>
        {assistantCostumeDesign.map((project) => {
          const videos = Array.isArray(project.embed)
            ? project.embed
            : [project.embed];

          return videos.map((videoUrl, index) => (
            <a
              key={`${project.id}-${index}`}
              data-fancybox="assistant-costume-design"
              href={videoUrl}
              data-caption={`${project.title} — ${project.credit}${
                project.designer ? ` — Costume Designer: ${project.designer}` : ""
              }`}
              className="videoThumb"
            >
              <img
                src={project.thumb}
                alt={project.title || "Video"}
                loading="lazy"
                className="videoThumbImg"
              />

              <div className="playBadge" aria-hidden="true">▶</div>

              <div className="videoThumbMeta">
                <p className="caption">{project.title}</p>
                <p className="muted">{project.credit}</p>
                {project.designer && (
                  <p className="muted">
                    Costume Designer: {project.designer}
                  </p>
                )}
              </div>
            </a>
          ));
        })}
      </section>
    </div>
  );
}
