import { FaThreads } from "react-icons/fa6";

const LinkedinIcon = () => (
  <svg xmlns="http://www.0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M12 18h.01"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const contacts = [
  { 
    name: "Threads", 
    icon: <FaThreads size={20}/>, 
    href:"https://www.threads.net/@aqillkaciww"
  },
  { name: "GitHub", icon: <GithubIcon />, href: "https://github.com/aqillkaciww/" },
  { name: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/akilltaa/" }
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
          Or drop me a line at <a href="mailto:aqiltamimi6@gmail.com" className="emailAqil">aqiltamimi6@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
