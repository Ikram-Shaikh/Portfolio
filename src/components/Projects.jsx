export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern, responsive portfolio to showcase my experience, skills, and projects.",
      tech: "React, CSS, Framer Motion",
      link: "https://github.com/Ikram-Shaikh/portfolio",
    },
    {
      title: "Task Automation API",
      desc: "A scalable backend service automating workflow tasks with secure authentication.",
      tech: "Python, Django, MySQL",
      link: "https://github.com/yourname/task-api",
    },
    {
      title: "Microservice Billing Engine",
      desc: "A distributed billing engine for handling high‑volume transactions.",
      tech: "FastAPI, Docker, Redis",
      link: "#",
    }
  ];

  return (
    <div id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <p className="project-tech">Tech Used: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};