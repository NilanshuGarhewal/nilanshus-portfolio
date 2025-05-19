import "../css/componentsCss/Footer.css";
import { ArrowDownLeft } from "phosphor-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import useMagneticButton from "../js/useMagneticButton"; // Adjust path if needed

// Register GSAP ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const btnRef = useRef(null); // Ref to the Contact button
  const magneticEffectRef = useRef(null); // Ref to magnetic effect div inside button

  // Animate underline lines on scroll
  useEffect(() => {
    const lines = gsap.utils.toArray(".f-line");

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { height: 1 },
        {
          width: "100%",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          transformOrigin: "bottom",
        }
      );
    });
  }, []);

  // Apply magnetic button effect using custom hook
  useMagneticButton(btnRef, magneticEffectRef);

  return (
    <div className="footer" id="footer">
      <div className="fb1">
        <p>
          how about making
          <br />
          your vision real?
        </p>

        <Parallax speed={-5}>
          <button id="c-btn" ref={btnRef}>
            <div className="magnetic" ref={magneticEffectRef} />
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
