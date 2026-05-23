import { Link } from "react-router-dom";

export default function CollageCard({ project }) {
  const href = `/${project.category}/${project.slug}`;

  const imgs = project.media?.images?.slice(0, 4) || [];

  const fallback = project.cover;

  return (
    <article className="card collageCard">
      <Link to={href} className="collageMedia" aria-label={`Open ${project.title}`}>
        <div className="collageGrid">
          {(imgs.length ? imgs : [fallback]).filter(Boolean).slice(0, 4).map((src, idx) => (
            <img key={src + idx} src={src} alt="" loading="lazy" />
          ))}
        </div>

        <div className="collageOverlay">
          <h3 className="collageTitle">{project.title}</h3>
          <p className="collageMeta">
            {[project.role, project.year].filter(Boolean).join(" • ")}
          </p>
        </div>
      </Link>
    </article>
  );
}
