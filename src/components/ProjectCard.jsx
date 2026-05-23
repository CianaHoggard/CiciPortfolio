import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const href = `/${project.category}/${project.slug}`;

  return (
    <article className="card">
      <Link to={href} className="cardMedia">
        <img src={project.cover} alt={project.title} loading="lazy" />
      </Link>

      <div className="cardBody">
        <h3 className="cardTitle">
          <Link to={href}>{project.title}</Link>
        </h3>

        

        {project.description && <p className="cardDesc">{project.description}</p>}
      </div>
    </article>
  );
}
