import { ArrowDownLeft } from "phosphor-react";
import "../../css/subcomponentsCss/HeroLinkSection.css";
import Button from "../extra/Button";
import { Parallax } from "react-scroll-parallax";

export default function HeroLinkSection() {
  return (
    <div className="hero-link-section" id="home-pe-ja">
      <div className="hero-link-one">
        <a href="#">
          <p>linkedin</p>
          <div className="arrow-ke-papa">
            <ArrowDownLeft size={20} className="arrow-tr arrow-tr-default" />
            <ArrowDownLeft size={20} className="arrow-tr arrow-tr-hover" />
          </div>
        </a>

        <a href="#">
          <p>e-mail</p>
          <div className="arrow-ke-papa">
            <ArrowDownLeft size={20} className="arrow-tr arrow-tr-default" />
            <ArrowDownLeft size={20} className="arrow-tr arrow-tr-hover" />
          </div>
        </a>

        <a href="#">
          <p>artist</p>
          <div className="arrow-ke-papa">
            <ArrowDownLeft size={20} className="arrow-tr arrow-tr-default" />
            <ArrowDownLeft size={20} className="arrow-tr arrow-tr-hover" />
          </div>
        </a>
      </div>

      <div className="hero-link-two">
        <p>
          nilanshu garhewal <br />
          web developer & ui / ux designer <br />
          based in bhopal, india
        </p>

        <Parallax speed={-5}>
          <Button></Button>
        </Parallax>
      </div>
    </div>
  );
}
