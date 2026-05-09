export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl px-6 footer-container" style={{ justifyContent: "space-between" }}>
        <p className="footer-text">
          © {new Date().getFullYear()} <a href="https://www.threads.net/@akilltaa" className="footThreads">Threads</a>
        </p>
        <p className="footer-text">
          {'<>'} <a href="https://github.com/aqillkaciww" className="footGit">GitHub</a>
        </p>
        <p className="footer-text">
          <a href="https://www.instagram.com/akilltaa" className="footInsta">Instagram</a>
        </p>
      </div>
    </footer>
  );
}
