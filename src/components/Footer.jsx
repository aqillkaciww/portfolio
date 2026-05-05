export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl px-6 footer-container" style={{ justifyContent: "space-between" }}>
        <p className="footer-text">
          © {new Date().getFullYear()} LinkedIn
        </p>
        <p className="footer-text">
          {'<>'} GitHub
        </p>
        <p className="footer-text">
          Instagram
        </p>
      </div>
    </footer>
  );
}
