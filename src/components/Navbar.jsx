import Link from "next/link";
import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar glass-effect">
      <div className="max-w-6xl px-6 navbar-container">
        <Link href="/" className="navbar-logo">
          Aqil Tamimi
        </Link>
        
        <nav className="navbar-links">
          <Link href="#home" className="navbar-link">Home</Link>
          <Link href="#about" className="navbar-link">About</Link>
          <Link href="#skills" className="navbar-link">Skills</Link>
          <Link href="#projects" className="navbar-link">Projects</Link>
          <Link href="#contact" className="navbar-link">Contact</Link>
        </nav>

        <button className="theme-toggle" aria-label="Toggle Theme">
          <Moon size={20} />
        </button>
      </div>
    </header>
  );
}
