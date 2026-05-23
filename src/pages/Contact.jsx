export default function Contact() {
  return (
    <div className="stack contactPage">
      <header className="pageHeader">
        <p className="eyebrow">Let’s connect</p>
        <h1>Contact</h1>
        <p className="muted">For styling, costume, and creative inquiries.</p>
      </header>

      <section className="contactCard">
        <a href="mailto:choggard514@gmail.com?subject=Portfolio Inquiry">Email:
          <span className="email"> choggard514@gmail.com</span>
        </a>

        <a
          href="https://instagram.com/cicihoggard"
          target="_blank"
          rel="noreferrer"
        >Instagram:
        <span className="instagram"> @cicihoggard</span>
        </a>

        <p>Location: Los Angeles, CA</p>

        <a
          className="contactBtn"
          href="mailto:choggard514@gmail.com?subject=Portfolio Inquiry"
        >
          Send Email
        </a>
      </section>
    </div>
  );
}
