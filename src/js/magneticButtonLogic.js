import gsap from "gsap";

export function setupMagneticButton(btn, text) {
  let boundingBox = btn.getBoundingClientRect();
  const strength = 2;

  const handleResize = () => {
    boundingBox = btn.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    const relX = e.clientX - boundingBox.left;
    const relY = e.clientY - boundingBox.top;

    const moveX = (relX - boundingBox.width / 2) / strength;
    const moveY = (relY - boundingBox.height / 2) / strength;

    // Animate button and text
    gsap.to(btn, {
      x: moveX,
      y: moveY,
      scale: 1.1,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(text, {
      x: moveX / 5,
      y: moveY / 5,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const reset = () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.4)",
    });

    gsap.to(text, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const onEnter = () => {
    document.addEventListener("mousemove", handleMouseMove);
  };

  const onLeave = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    reset();
  };

  btn.addEventListener("mouseenter", onEnter);
  btn.addEventListener("mouseleave", onLeave);
  window.addEventListener("resize", handleResize);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", handleResize);
    btn.removeEventListener("mouseenter", onEnter);
    btn.removeEventListener("mouseleave", onLeave);
  };
}
