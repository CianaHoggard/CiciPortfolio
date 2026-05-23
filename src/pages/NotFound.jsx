import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="stack">
      <h1>404</h1>
      <p className="muted">That page doesn’t exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}
