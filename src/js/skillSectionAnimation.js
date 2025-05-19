// animateSkillSection.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function animateSkillSection() {
  const lines = gsap.utils.toArray(".b-line");
  const skills = gsap.utils.toArray(".contain-skill");

  // Animate skill underline lines
  lines.forEach((line) => {
    gsap.to(line, {
      scrollTrigger: {
        trigger: line,
        start: "top 90%",
        toggleActions: "restart pause reverse none",
        scrub: true,
      },
      width: "100%",
      duration: 1.5,
      ease: "power2.out",
    });
  });

  // Animate skill text appearance
  skills.forEach((skill) => {
    gsap.to(skill, {
      scrollTrigger: {
        trigger: skill,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });
  });
}
