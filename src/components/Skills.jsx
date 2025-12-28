export const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: "🐍",
      desc: "Backend development, automation, API building, scripting."
    },
    {
      name: "Laravel",
      icon: "⚙️",
      desc: "REST APIs, microservices, backend modules, authentication."
    },
    {
      name: "React",
      icon: "⚛️",
      desc: "Component-based UI, state management, SPA development."
    },
    {
      name: "PHP",
      icon: "💻",
      desc: "Web development, server logic, backend workflows."
    },
    {
      name: "MySQL",
      icon: "🗄️",
      desc: "Database design, optimization, indexing, query performance."
    },
    {
      name: "MongoDB",
      icon: "🍃",
      desc: "Document DB, scalable structures, flexible data modeling."
    },
    {
      name: "Linux",
      icon: "🐧",
      desc: "Server management, shell scripting, deployment operations."
    },
    {
      name: "GitHub",
      icon: "🔧",
      desc: "Version control, CI/CD workflows, collaborative development."
    }
  ];

  return (
    <div id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};