import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="section alt">
      <h2 className="section-title">Contact</h2>
      <p className="lead">
        Phone: <strong>+91 8421772252</strong>
        <br />
        Email: <strong><a href="mailto:ikramshaikh1648@gmail.com">ikramshaikh1648@gmail.com</a></strong>
      </p>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/ikram-shaikh-343340254"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>

        <a
          href="https://github.com/Ikram-Shaikh"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
        >
          <FaGithub className="icon" /> GitHub
        </a>
      </div>
    </section>
  );
};