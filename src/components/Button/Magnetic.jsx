import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    // Set up quick gsap tweens for x and y
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const btn = magnetic.current;
    btn.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magnetic.current.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.5);
      yTo(y * 0.5);
    });

    btn.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
