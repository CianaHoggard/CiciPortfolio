import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 900) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleLinkClick() {
    setOpen(false);
  }

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
          <NavLink to="/costume-design" className={linkClass} onClick={handleLinkClick}>
            Costume Design
          </NavLink>

          <div className="sideGroupLabel">Styling</div>
          <NavLink to="/styling/videos" className={linkClass} onClick={handleLinkClick}>
            Videos
          </NavLink>
          <NavLink to="/styling/stills" className={linkClass} onClick={handleLinkClick}>
            Stills
          </NavLink>

          <div className="sideGroupLabel">Assistant</div>
          <NavLink to="/assistant/costume-design" className={linkClass} onClick={handleLinkClick}>
            Costume Design
          </NavLink>
          <NavLink to="/assistant/styling" className={linkClass} onClick={handleLinkClick}>
            Styling
          </NavLink>

          <NavLink to="/about" className={linkClass} onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={handleLinkClick}>
            Contact
          </NavLink>
        </nav>

        
      </aside>
    </>
  );
}
