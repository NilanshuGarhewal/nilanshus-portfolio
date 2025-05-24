import { ArrowDownLeft } from "phosphor-react";
import "./HeroLinkSection.css";
import { Parallax } from "react-scroll-parallax";
import MagneticButton from "../Button/MagneticButton";

export default function HeroLinkSection() {
  return (
    <div className="hero-section-part-one" id="home-pe-ja">
      <span id="profession">
        <span>
          <p>Creator</p>
          <ArrowDownLeft className="arrow-up" size={30} />
        </span>
        <p>Designer & Developer</p>
      </span>

      {/* <Button></Button> */}
      <MagneticButton children={"Artist"}></MagneticButton>
    </div>
  );
}
