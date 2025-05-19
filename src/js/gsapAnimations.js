import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupGsapAnimations() {
  ScrollTrigger.create({
    trigger: ".scroll-shift",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress;
      const translateX = progress * -30;
      const translateY = progress * 100;

      gsap.to(".scroll-shift", {
        x: translateX,
        y: translateY,
        ease: "power2.out",
        overwrite: true,
      });
    },
  });

  ScrollTrigger.create({
    trigger: ".scroll-tilt",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const progress = self.progress - 1;
      const rotateX = progress * 10;
      const rotateY = progress * -20;

      gsap.to(".scroll-tilt", {
        rotateX,
        rotateY,
        ease: "power4.out",
        overwrite: true,
      });
    },
  });

  gsap.to(".camera-float", {
    x: "+=20",
    y: "-=20",
    duration: 4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });
}

export function killGsapAnimations() {
  ScrollTrigger.killAll();
}
