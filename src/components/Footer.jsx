import React from "react";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">© {new Date().getFullYear()} Ikram Shaikh — Built with React</div>
    </footer>
  );
};