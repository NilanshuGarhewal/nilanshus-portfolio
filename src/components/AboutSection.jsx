import "../css/componentsCss/AboutSection.css";
import { Parallax } from "react-scroll-parallax";

// data-aos="fade-right" data-aos-offset="200"

export default function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="about-info">
        <Parallax speed={-3}>
          <p id="about-nil">About Nilanshu</p>
        </Parallax>

        <Parallax speed={-3}>
          <p id="about-info-nil">
            Full-stack developer, blending code <br />
            and creativity to build modern, scalable
            <br />
            web apps and digital experiences. Skilled in
            <br />
            front-end and back-end development,
            <br />
            with a growing flair for UI/UX design,
            <br />
            app architecture, and interactive interfaces.
            <br />
            ⁣<br />
            Focused on delivering fast, responsive,
            <br />
            and user-focused solutions. Collaborates
            <br />
            seamlessly with designers, developers, and
            <br />
            stakeholders to solve real-world problems
            <br />
            with clean, efficient code and intuitive
            <br />
            design systems.
          </p>
        </Parallax>

        <p id="idk">@ 2025 EST.2023</p>
      </div>

      <div className="about-name">
        <Parallax speed={-3}>
          <p id="abc">
            A <br />
            B <br />
            O <br />
            U <br />
            T <br />
          </p>
        </Parallax>

        <Parallax speed={-10}>
          <p id="num">
            1 <br />
            2 <br />
            3 <br />
            4 <br />
            5 <br />
          </p>
        </Parallax>
      </div>
    </div>
  );
}
