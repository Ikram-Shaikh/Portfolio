import { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu after click on mobile
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <div className="nav-logo" onClick={() => scrollToSection("hero")}>
            Ikram Shaikh
          </div>

          {/* Desktop Links */}
          <ul className="nav-links desktop-only">
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("skills")}>Skills</li>
            <li onClick={() => scrollToSection("projects")}>Projects</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>

          {/* Theme Toggle */}
          <button
            className="theme-btn desktop-only"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          {/* Hamburger */}
          <div
            className="hamburger mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>

          {/* Theme toggle inside mobile menu */}
          <button
            className="theme-btn mobile-theme-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </nav>
    </>
  );
}
