import "./Footer.css";
import { ArrowDownLeft } from "phosphor-react";
import { Parallax } from "react-scroll-parallax";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="fb1">
        <p>
          how about making
          <br />
          your vision real?
        </p>

        <Parallax speed={-5}>
          <button id="c-btn">
            <div className="magnetic" />
            Contact
          </button>
        </Parallax>
      </div>

      <div className="fb2">
        {/* Links Section */}
        <div className="fb21">
          <a href="#" className="info-container">
            <span className="f-container">
              <p>LINKEDIN</p>
              <div>
                <p>@nilanshugarhewal</p>
                <ArrowDownLeft size={20} className="arrow-trs" />
              </div>
            </span>
            <div className="f-line"></div>
          </a>

          <a href="#" className="info-container">
            <span className="f-container">
              <p>GITHUB</p>
              <div>
                <p>@nilanshugarhewal</p>
                <ArrowDownLeft size={20} className="arrow-trs" />
              </div>
            </span>
            <div className="f-line"></div>
          </a>
        </div>

        <div className="fb22">
          <a href="#" className="info-container">
            <span className="f-container">
              <p>E-MAIL</p>
              <div>
                <p>@nilanshugarhewal1@gmail.com</p>
                <ArrowDownLeft size={20} className="arrow-trs" />
              </div>
            </span>
            <div className="f-line"></div>
          </a>

          <a href="#" className="info-container">
            <span className="f-container">
              <p>ARTIST</p>
              <div>
                <p>@harmonishbeats</p>
                <ArrowDownLeft size={20} className="arrow-trs" />
              </div>
            </span>
            <div className="f-line"></div>
          </a>
        </div>
      </div>

      <div className="credits">
        <p>©2025 Nilanshu Garhewal</p>
      </div>
    </div>
  );
}
