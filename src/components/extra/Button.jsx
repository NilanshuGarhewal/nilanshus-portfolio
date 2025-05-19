import React, { useEffect, useRef } from "react";
import "../../css/extraCss/Button.css";
import { setupMagneticButton } from "../../js/magneticButtonLogic";

export default function Button() {
  const btnRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!btnRef.current || !textRef.current) return;
    const cleanup = setupMagneticButton(btnRef.current, textRef.current);
    return cleanup;
  }, []);

  return (
    <button ref={btnRef} id="contact-btn">
      <span className="btn-bg" />
      <span className="btn-text" ref={textRef}>
        Contact
      </span>
    </button>
  );
}
