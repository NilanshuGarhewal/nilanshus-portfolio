import "./ProjectSection.css";
import { use, useEffect, useRef } from "react";

export default function ProjectSection() {
  return (
    <div className="project-section" id="projects">
      <div className="project-heading">
        <p>Projects</p>
      </div>

      <div className="all-projects">
        <p>
          All the projects will be uploaded soon, until you can take a look at
          my GitHub!
        </p>
      </div>
    </div>
  );
}
