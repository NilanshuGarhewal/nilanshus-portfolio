import "../css/componentsCss/ProjectSection.css";
import { use, useEffect, useRef } from "react";

export default function ProjectSection() {
  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const highlight = highlightRef.current;
    const gridItems = container.querySelectorAll(".grid-item");
    const firstItem = container.querySelector(".grid-item");

    const highlightColors = [
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ];

    gridItems.forEach((item, index) => {
      item.dataset.color = highlightColors[index % highlightColors.length];
    });

    const moveToElement = (element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        highlight.style.transform = `translate(${
          rect.left - containerRect.left
        }px, ${rect.top - containerRect.top}px)`;

        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        highlight.style.backgroundColor = element.dataset.color;
      }
    };

    const moveHighlight = (e) => {
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

      if (hoveredElement && hoveredElement.classList.contains("grid-item")) {
        moveToElement(hoveredElement);
      } else if (
        hoveredElement &&
        hoveredElement.parentElement &&
        hoveredElement.parentElement.classList.contains("grid-item")
      ) {
        moveToElement(hoveredElement.parentElement);
      }
    };

    moveToElement(firstItem);

    container.addEventListener("mousemove", moveHighlight);

    return () => {
      container.removeEventListener("mousemove", moveHighlight);
    };
  }, []);

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

        <div className="project-container" ref={containerRef}>
          <div className="grid">
            <div className="grid-row">
              <div className="grid-item">
                <p>( HARMONISHBEATS )</p>
              </div>
              <div className="grid-item">
                <p>( PhishShield )</p>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-item">
                <p>( STAZY )</p>
              </div>
              <div className="grid-item">
                <p>( GITHUB )</p>
              </div>
            </div>
          </div>

          <div className="highlight" ref={highlightRef}></div>
        </div>
      </div>
    </div>
  );
}
