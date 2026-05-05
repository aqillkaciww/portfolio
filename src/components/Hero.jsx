import Image from "next/image";
import { Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section max-w-6xl px-6">
      <div className="hero-glow"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <Code2 size={16} />
          Hello, World!
        </div>
        
        <h1 className="hero-title">
          Designing the future, <br />
          <span className="hero-title-gradient">one line at a time.</span>
        </h1>
        
        <p className="hero-subtitle">
          Frontend Developer | SIJA Student | Tech Enthusiast. Building clean, intuitive digital experiences that balance form and function.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary glass-effect">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <div className="hero-image-container">
          <div className="hero-image-inner">
            <Image 
              src="/images/profile.jpg" 
              alt="Aqil Tamimi" 
              fill
              className="hero-image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
