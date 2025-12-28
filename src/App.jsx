import { Navbar } from "./components/NavBar";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <section id="hero">
        <Intro />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
