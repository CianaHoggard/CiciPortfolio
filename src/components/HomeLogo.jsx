import { Link } from "react-router-dom";
import cjhLogo from "../assets/CJH2.png";
import { useLocation } from "react-router-dom";


export default function HomeLogo() {
  const location = useLocation();
  if (location.pathname === "/") return null;

  return (
    <Link to="/" className="homeLogo" aria-label="Home">
      <img src={cjhLogo} alt="Cici Hoggard Home" />
    </Link>
  );
}
