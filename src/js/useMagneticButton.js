// useMagneticButton.js
import { useEffect } from "react";
import { gsap } from "gsap";

export default function useMagneticButton(btnRef, magneticRef) {
  useEffect(() => {
    const btn = btnRef.current;
    const magnetic = magneticRef.current;

    if (!btn || !magnetic) return;

    // Handler for mouse move on button
    function onMouseMove(e) {
      const { clientX, clientY } = e;
      const btnRect = btn.getBoundingClientRect();

      const offsetX = clientX - btnRect.left - btnRect.width / 2;
      const offsetY = clientY - btnRect.top - btnRect.height / 2;

      gsap.to(magnetic, {
        x: offsetX / 3, // strength of magnetic pull
        y: offsetY / 3,
        ease: "power2.out",
      });
    }

    // Handler for mouse leaving the button
    function onMouseLeave() {
      gsap.to(magnetic, {
        x: 0,
        y: 0,
        ease: "power2.inOut",
      });
    }

    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    // Cleanup listeners on unmount
    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [btnRef, magneticRef]);
}
