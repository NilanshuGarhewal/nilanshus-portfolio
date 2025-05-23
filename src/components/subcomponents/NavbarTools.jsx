import React, { useEffect, useRef } from "react";
import "../../css/subcomponentsCss/NavbarTools.css";
import Magnetic from "../extra/Magnetic";

export default function NavbarTools() {
  return (
    <div className="tools-container">
      <nav className="tool-nav">
        <Magnetic>
          <a href="#about" className="tool-link">
            <span>About</span>
            <div className="nav-dot"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#projects" className="tool-link">
            <span>Projects</span>
            <div className="nav-dot"></div>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#footer" className="tool-link">
            <span>Contact</span>
            <div className="nav-dot"></div>
          </a>
        </Magnetic>
      </nav>
    </div>
  );
}
