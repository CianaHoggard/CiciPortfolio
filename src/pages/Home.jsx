import { Link } from "react-router-dom";
import cjhLogo from "../assets/CJH2.png";

export default function Home() {
  const name = "Cecilia J. Hoggard";

  return (
    <main className="landingPage">
      <section className="landingHero">
        <img src={cjhLogo} alt="CJH Logo" className="heroLogo" />
        <p className="landingKicker">
          Costume Design • Styling • Creative Direction
        </p>

      <h1 className="landingName" aria-label={name}>
          {name.split(" ").map((word, wordIndex) => (
            <span className="nameWord" key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="nameChar"
                  style={{ "--i": wordIndex * 12 + charIndex }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="landingText">
          Visual storytelling through wardrobe, texture, silhouette, and character.
        </p>

        <div className="landingActions">
          <Link to="/Costume-Design" className="btn primary">View Work</Link>
          <Link to="/contact" className="btn">Contact</Link>
        </div>
      </section>
    </main>
  );
}
