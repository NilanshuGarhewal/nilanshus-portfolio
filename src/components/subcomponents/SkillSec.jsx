// SkillSec.jsx
import "../../css/subcomponentsCss/SkillSec.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import skillSectionAnimation from "../../js/skillSectionAnimation"; // Custom animation logic

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

export default function SkillSec({ skill, skillHeading }) {
  useEffect(() => {
    // Call animation logic
    skillSectionAnimation();
  }, []);

  return (
    <div className="skill-sec">
      {/* First skill block */}
      <div className="skill-block-one">
        <Parallax speed={-2}>
          <p className="skill-heading">{skillHeading[0]}</p>
        </Parallax>

        <div className="block-one-skill">
          <div className="s-block-one">
            <ul>
              {skill[0].map((s, index) => (
                <li className="skill-list" key={index}>
                  <div className="contain-skill">
                    {s} <div className="box"></div>
                  </div>
                  <div className="b-line"></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="s-block-two">
            <ul>
              {skill[1].map((s, index) => (
                <li className="skill-list" key={index}>
                  <div className="contain-skill">
                    {s} <div className="box"></div>
                  </div>
                  <div className="b-line"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Second skill block */}
      <div className="skill-block-two">
        <Parallax speed={-2}>
          <p className="skill-heading">{skillHeading[1]}</p>
        </Parallax>

        <div className="block-one-skill">
          <div className="s-block-one">
            <ul>
              {skill[2].map((s, index) => (
                <li className="skill-list" key={index}>
                  <div className="contain-skill">
                    {s} <div className="box"></div>
                  </div>
                  <div className="b-line"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
