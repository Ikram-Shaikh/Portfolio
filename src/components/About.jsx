import { motion as Motion } from "framer-motion";

export const About = () => {
  return (
    <section className="section">
      <Motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about-card"
      >
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I’m <b>Ikram Shaikh</b>, a Senior Software Developer with over
          <b> 3 years of experience</b> in building high-performance
          backend systems, scalable REST APIs, and clean, maintainable
          full-stack applications.
          <br /><br />
          I specialize in <b>Python, FastAPI, Laravel, React, PHP, MySQL,
          MongoDB</b> and love designing modern backend architectures,
          microservices, and automation workflows.
          <br /><br />
          I enjoy solving complex engineering challenges and turning ideas
          into real-world solutions that deliver speed, security,
          maintainability, and long-lasting value.
        </p>
      </Motion.div>
    </section>
  );
};