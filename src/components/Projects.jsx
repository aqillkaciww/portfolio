import Image from "next/image";

const projects = [
  {
    title: "EchoPedia",
    description: "platform edukasi lingkungan inovatif yang mengintegrasikan kesadaran ekologis dengan sistem manajemen limbah.",
    image: "/images/echoopedia.png",
    tags: ["Next.js", "Supabase"]
  },
  {
    title: "Aaqlin Kitchen (future project)",
    description: "Sebuah website pemesanan online untuk perusahaan catering bernama Aaqlin Kitchen.",
    image: "/images/aaqlinkitchen.jpg",
    tags: ["Laravel", "Vue"]
  },
  {
    title: "UI Component Library",
    description: "A personal design system engineered with accessible, glassmorphic components for fast prototyping.",
    image: "/images/code.png",
    tags: ["Standard CSS", "React"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section max-w-6xl px-6">
      <h2 className="section-title projects-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="project-image"
              />
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
