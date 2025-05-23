import { ArrowDownLeft } from "phosphor-react";
import "../../css/subcomponentsCss/HeroLinkSection.css";
import { Parallax } from "react-scroll-parallax";
import "../../css/extraCss/earthquake.css";
import MagneticButton from "../extra/MagneticButton";

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
      <MagneticButton children={"Get In Touch"}></MagneticButton>
    </div>
  );
}
