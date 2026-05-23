export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p>© {year} Cici Hoggard Designs</p>
        <div className="footerLinks">
          <a href="https://instagram.com/cicihoggard" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
            </a>
        </div>
      </div>
    </footer>
  );
}
