import Image from "next/image";
import { Coffee } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="about-section px-6">
      <div className="max-w-6xl about-grid">
        
        <div className="about-image-wrapper">
          <div className="about-image-container">
            <Image 
              src="/images/hutaw.jpg"
              alt="Modern laptop setup"
              fill
              className="hero-image" /* reusing the object-fit style */
            />
          </div>
          <div className="about-icon">
            <Coffee size={24} />
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-text">
            <p>
              I am currently studying at SMKN 2 Yogyakarta, majoring in Sistem Informatika Jaringan dan Aplikasi (SIJA). My journey in technology started with a deep curiosity for how things work on the web, which quickly evolved into a passion for frontend development and user interface design.
            </p>
            <p>
              I thrive in environments where logic meets creativity. Utilizing modern frameworks and design systems, I strive to architect robust web applications that not only perform efficiently but also deliver a premium, seamless experience to the user.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
