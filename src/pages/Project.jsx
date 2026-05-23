import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="stack">
        <h1>Project not found</h1>
        <p className="muted">
          This project doesn’t exist or the link is incorrect.
        </p>
        <Link className="btn" to="/">Go Home</Link>
      </div>
    );
  }

  const { title, role, year, description, media, category, section } = project;

  const backTo = `/${category}`;

  return (
    <div className="stack">
      <Link to={backTo} className="textLink">
        ← Back to {section + " Projects"}
      </Link>

      <header className="pageHeader">
        <h1>{title}</h1>
        <p className="muted">
          {[role, year].filter(Boolean).join(" • ")}
        </p>
        {description && <p className="lead">{description}</p>}
      </header>
      {(!media?.images?.length && media?.videos?.length) ? (
        <p className="muted">Trailer</p>
      ) : null}
      {media?.images?.length > 0 && (
        <section className="stack">
          <h2>Images</h2>
          <div className="mediaGrid">
            {media.images.map((src) => (
              <img
                key={src}
                className="mediaImg"
                src={src}
                alt={title}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}

      {media?.videos?.length > 0 && (
        <section className="stack">
          <h2>Trailer</h2>
          <div className="videoGrid">
            {media.videos.map((url) => (
              <div className="videoWrap" key={url}>
                <iframe
                  src={url}
                  title={`${title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
