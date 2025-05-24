// src/utils/cursorLogic.js

export function setupCustomCursor(cursorRef, setIsHovering) {
  const mouseX = { current: 0 };
  const mouseY = { current: 0 };
  const currentX = { current: 0 };
  const currentY = { current: 0 };
  const speed = 0.1;

  const handleMouseMove = (e) => {
    mouseX.current = e.clientX;
    mouseY.current = e.clientY;
  };

  const animate = () => {
    currentX.current += (mouseX.current - currentX.current) * speed;
    currentY.current += (mouseY.current - currentY.current) * speed;

    if (cursorRef.current) {
      cursorRef.current.style.left = `${currentX.current}px`;
      cursorRef.current.style.top = `${currentY.current}px`;
    }

    requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const addListeners = () => {
    document.addEventListener("mousemove", handleMouseMove);
    const hoverTargets = document.querySelectorAll("a, button, .hover-target");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  };

  return addListeners;
}
