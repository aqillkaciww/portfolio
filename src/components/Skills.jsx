import { Code2, Palette, Database, FileJson, Layout, FileCode2 } from "lucide-react";

const skills = [
  { name: "Next.js", icon: <Code2 size={24} /> },
  { name: "Tailwind", icon: <Palette size={24} /> },
  { name: "Laravel", icon: <Database size={24} /> },
  { name: "TypeScript", icon: <FileJson size={24} /> },
  { name: "HTML", icon: <Layout size={24} /> },
  { name: "CSS", icon: <FileCode2 size={24} /> }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section max-w-6xl px-6">
      <h2 className="section-title skills-title">My Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {skill.icon}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
