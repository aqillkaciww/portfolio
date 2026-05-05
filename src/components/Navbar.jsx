"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, read the current theme from HTML class
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

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

        <button 
          className="theme-toggle" 
          aria-label="Toggle Theme"
          onClick={toggleTheme}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
