import "../css/componentsCss/AboutSection.css";
import "../components/extra/MagneticButton";
import { Parallax } from "react-scroll-parallax";
import MagneticButton from "../components/extra/MagneticButton";

// data-aos="fade-right" data-aos-offset="200"

export default function AboutSection() {
  return (
    <div className="about-section" id="about">
      <span id="about-container">
        <div className="about-me">
          <p id="about-part-one">
            Full-stack developer blending code and creativity to build modern,
            scalable web apps. Skilled in both front-end and back-end, with a
            growing passion for UI/UX, app architecture, and interactive design.
          </p>
        </div>

        <div className="about-me2">
          Focused on fast, user-friendly solutions and clean code. Works closely
          with teams to turn real-world problems into intuitive digital
          experiences.
        </div>
      </span>

      {/* <div className="about-heading">
        <span>About Me</span>
      </div> */}

      <MagneticButton children={"About Me"}></MagneticButton>
    </div>
  );
}
