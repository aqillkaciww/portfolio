import { Linkedin, Github, Instagram } from "lucide-react";

const contacts = [
  { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
  { name: "GitHub", icon: <Github size={20} />, href: "#" },
  { name: "Instagram", icon: <Instagram size={20} />, href: "#" }
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section px-6">
      <div className="contact-container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Ready to collaborate? Reach out to me directly on social media for the fastest response.
        </p>
        
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <a key={index} href={contact.href} className="contact-card">
              <div className="contact-icon-wrapper">
                {contact.icon}
              </div>
              <span className="contact-name">{contact.name}</span>
            </a>
          ))}
        </div>
        
        <p className="contact-email">
          Or drop me a line at hi@aqiltamimi.com
        </p>
      </div>
    </section>
  );
}
