import profilePic from "../assets/pic4.jpg";

export default function About() {
  return (
    <div className="stack">
      <header className="pageHeader">
        <h1 className="categoryTitle"> Cecilia J. Hoggard </h1>
        <p className="galleryCaption">
        Costume designer exploring character through culture, history, and visual language.

        </p>
      </header>

      <section className="aboutGrid">
        <div className="card pad">
          <h2>Biography</h2>

          <div className="bioNarrative">
            <p>
              Cici Hoggard is a costume designer and visual storyteller whose
              work focuses on character, cultural context, and the history of
              dress. She approaches costume through research and character
              psychology, using clothing to communicate identity, status, and
              inner life rather than surface styling.
            </p>

            <p>
              Originally from the Washington, D.C. area and currently based in
              Los Angeles, Cici’s background in history and American Studies
              informs her understanding of how clothing reflects social systems,
              power, and personal narrative. She draws from archival research,
              subcultural dress, and historical silhouettes to build wardrobes
              that feel specific and lived-in.
            </p>

            <p>
              Her training in visual merchandising at the Fashion Institute of
              Design & Merchandising shaped her eye for proportion, composition,
              and visual clarity, grounding her work in both fashion knowledge
              and visual structure.
            </p>

            <p>
              Union-affiliated with IATSE 892 and 705, she works across
              narrative, editorial, and conceptual projects with a restrained,
              intentional design approach. She sees costume as a storytelling
              tool that helps define how a world feels and how a character moves
              within it.
            </p>
          </div>

          <div className="quoteBlock">
            <p className="muted">
            Featured in{" "}
              <a href="https://voyagela.com/interview/check-cici-hoggards-story/" target="_blank" rel="noopener noreferrer" className="textLink">
                VoyageLA
              </a>
            </p>
          </div>
        </div>

        <div className="card aboutImageCard">
          <img
            src={profilePic}
            alt="Cici Hoggard portrait"
            className="profilePic"
          />
        </div>
      </section>
      <section className="card pad">
        <h2>Details</h2>

        <div className="bioList">
          <div className="bioRow">
            <span className="bioLabel">Based</span>
            <span className="bioValue">Los Angeles, CA</span>
          </div>

          <div className="bioRow">
            <span className="bioLabel">Originally</span>
            <span className="bioValue">Washington, D.C. area</span>
          </div>

          <div className="bioRow">
            <span className="bioLabel">Unions</span>
            <span className="bioValue">IATSE 892, 705</span>
          </div>

          <div className="bioRow">
            <span className="bioLabel">Training</span>
            <span className="bioValue">
              Fashion Institute of Design &amp; Merchandising — Visual Merchandising
            </span>
          </div>

          <div className="bioRow">
            <span className="bioLabel">Works In</span>
            <span className="bioValue">Narrative · Editorial · Conceptual</span>
          </div>
        </div>

    </section>
    </div>
  );
}
