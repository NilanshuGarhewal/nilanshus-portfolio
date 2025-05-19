import "../../css/subcomponentsCss/HeroNameSection.css";
import { Parallax } from "react-scroll-parallax";

export default function HeroNameSection() {
  return (
    <div className="hero-name-section">
      <div className="first-name">
        <p className="ani ani-name1">nilanshu</p>
      </div>
      <div className="second-name">
        <div id="sn-o">
          <ul>
            <Parallax speed={-3}>
              <li id="username1">@nilanshugarhewal</li>
            </Parallax>
            <Parallax speed={-2}>
              <li id="username2">@nilanshugarhewal1</li>
            </Parallax>
            <Parallax speed={-1.5}>
              <li id="username3">@harmonish</li>
            </Parallax>
            <Parallax speed={-1}>
              <li id="username4">@harmonishbeats</li>
            </Parallax>
          </ul>
        </div>
        <div id="sn-t">
          <p className="ani ani-name2">garhewal</p>
        </div>
      </div>
    </div>
  );
}
