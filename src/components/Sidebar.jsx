import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setOpen(false);
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }) => "sideLink" + (isActive ? " active" : "");

  return (
    <>
      <header className="mobileBar">

        <button
          className="menuBtn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`sidebar ${open ? "open" : ""}`}>


        <nav className="sideNav">
          <NavLink to="/costume-design" className={linkClass}>
            Costume Design
          </NavLink>

          <div className="sideGroupLabel">Styling</div>
          <NavLink to="/styling/videos" className={linkClass}>
            Videos
          </NavLink>
          <NavLink to="/styling/stills" className={linkClass}>
            Stills
          </NavLink>

          <div className="sideGroupLabel">Assistant</div>
          <NavLink to="/assistant/costume-design" className={linkClass}>
            Costume Design
          </NavLink>
          <NavLink to="/assistant/styling" className={linkClass}>
            Styling
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>


      </aside>
    </>
  );
}
