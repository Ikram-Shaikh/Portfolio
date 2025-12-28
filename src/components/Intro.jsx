import { motion as Motion } from "framer-motion";

export const Intro = () => {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <Motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="hero-title"
          >
            Hi, I'm <span className="accent">Ikram Shaikh</span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="hero-sub"
          >
            Senior Software Developer — Backend & Distributed Systems
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hero-cta"
          >
               <a className="btn primary" href="/Resume_2025.pdf" download>
              Download Resume
            </a>
            <a className="btn ghost" href="mailto:ikramshaikh1648@gmail.com">
              Email Me
            </a>
          </Motion.div>
        </div>

        <Motion.div
          className="hero-photo"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="photo-frame">
            <img
              src="/Ikram_png.png"
              alt="Ikram Shaikh"
              className="avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Ikram_png.jpg";
                e.target.classList.add("fallback");
              }}
            />
          </div>
        </Motion.div>
      </div>
    </header>
  );
}