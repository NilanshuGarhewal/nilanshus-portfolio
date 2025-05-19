// Importing React
import { useEffect } from "react";

// Importing Other Packages
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";

// Importing CSS files
import "./css/App.css";

// Importing JSX files
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import BgLines from "./components/extra/BgLines";
import Cursor from "./components/extra/Cursor";

// Importing gsap animations
import { setupGsapAnimations, killGsapAnimations } from "./js/gsapAnimations";

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

function App() {
  // Registering gsap plugins
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });

    setupGsapAnimations();

    return () => {
      killGsapAnimations();
    };
  }, []);

  return (
    <ParallaxProvider>
      <Cursor />
      <BgLines />
      <div>
        <Navbar />
        <div>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <SkillSection />
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
