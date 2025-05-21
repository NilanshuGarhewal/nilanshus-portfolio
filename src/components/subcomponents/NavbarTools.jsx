import React, { useEffect, useRef } from "react";
import "../../css/subcomponentsCss/NavbarTools.css";
import "../../css/extraCss/earthquake.css";

export default function NavbarTools() {
  return (
    <div className="tools-container">
      <nav className="tool-nav">
        <a href="#about" className="tool-link earthquake">
          <span>ABOUT</span>
        </a>
        <a href="#projects" className="tool-link earthquake">
          <span>PROJECTS</span>
        </a>
        <a href="#skills" className="tool-link earthquake">
          <span>SKILLS</span>
        </a>
      </nav>
    </div>
  );
}
