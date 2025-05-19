import SkillSec from "./subcomponents/SkillSec";
import "../css/componentsCss/SkillSection.css";
import { Parallax } from "react-scroll-parallax";

export default function SkillSection() {
  let line = "With <3 Love For Design";

  let skillsOne = [
    ["HTML", "CSS", "SCSS/SASS", "JAVASCRIPT"],
    ["REACT JS", "MATERIAL UI", "BOOTSTRAP", "TAILWIND CSS"],
    ["FIGMA", "PROTOTYPING", "LANDING PAGES", "AI DESIGN"],
  ];

  let skillsTwo = [
    ["NODE JS", "EXPRESS JS"],
    ["EJS", "MONGOOSE"],
    ["MY SQL", "MONGO DB"],
  ];

  let skillHead = [
    ["FRONTEND", "UI/UX DESIGN"],
    ["BACKEND", "DATABASES"],
  ];

  return (
    <div className="skill-section" id="skills">
      <div className="heading">
        <p>Tools & Services</p>
        <p>{line}</p>
      </div>

      <Parallax speed={-3}>
        <SkillSec skill={skillsOne} skillHeading={skillHead[0]}></SkillSec>
        <SkillSec skill={skillsTwo} skillHeading={skillHead[1]}></SkillSec>
      </Parallax>

      {/* floating text move right to left ininite times */}

      <Parallax speed={3}>
        <div className="float-heading">
          <div className="marquee-text rotate-left fadeout-horizontal">
            <div className="marquee-text-track">
              <p className="item">figma</p>
              <p className="item">framer</p>
              <p className="item">webflow</p>
              <p className="item">gsap</p>
              <p className="item">prototyping</p>
              <p className="item">ai design</p>
              <p className="item">landing pangs</p>
              <p className="item">ui/ux design</p>
              <p aria-hidden="true" className="item">
                figma
              </p>
              <p aria-hidden="true" className="item">
                framer
              </p>
              <p aria-hidden="true" className="item">
                webflow
              </p>
              <p aria-hidden="true" className="item">
                gsap
              </p>
              <p aria-hidden="true" className="item">
                prototyping
              </p>
              <p aria-hidden="true" className="item">
                ai design
              </p>
              <p aria-hidden="true" className="item">
                landing pages
              </p>
              <p aria-hidden="true" className="item">
                ui/ux design
              </p>
            </div>
          </div>

          {/* reversed */}
          <div className="marquee-text rotate-right fadeout-horizontal">
            <div className="marquee-text-track-2">
              <p className="item">javascript</p>
              <p className="item">react.js</p>
              <p className="item">express.js</p>
              <p className="item">mysql</p>
              <p className="item">mongodb</p>
              <p className="item">bootstrap</p>
              <p className="item">tailwind css</p>
              <p className="item">material ui</p>
              <p aria-hidden="true" className="item">
                javascript
              </p>
              <p aria-hidden="true" className="item">
                react.js
              </p>
              <p aria-hidden="true" className="item">
                express.js
              </p>
              <p aria-hidden="true" className="item">
                mysql
              </p>
              <p aria-hidden="true" className="item">
                mongodb
              </p>
              <p aria-hidden="true" className="item">
                bootstrap
              </p>
              <p aria-hidden="true" className="item">
                tailwind css
              </p>
              <p aria-hidden="true" className="item">
                material ui
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
