import React, { useEffect, useRef } from "react";
import "./MagneticButton.css";
import gsap from "gsap";
import Magnetic from "./Magnetic";

export default function MagneticButton({ children, ...attributes }) {
  const circle = useRef(null);
  const timeline = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "150%",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circle.current,
        {
          top: "-150%",
          width: "125%",
          duration: 0.25,
        },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 200);
  };

  return (
    <Magnetic>
      <div
        className="rounded-button"
        {...attributes}
        onMouseEnter={(e) => {
          manageMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          manageMouseLeave(e);
        }}
      >
        <p>{children}</p>
        <div ref={circle} className="circle"></div>
      </div>
    </Magnetic>
  );
}
