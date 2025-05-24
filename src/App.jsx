// Importing React
import { useEffect } from "react";

// Importing Other Packages
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";

// Importing CSS files
import "./css/App.css";

// Importing JSX files
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import SkillSection from "./components/SkillSection/SkillSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import { Background } from "./components/Background/Background";

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

    // setupGsapAnimations();

    // return () => {
    //   killGsapAnimations();
    // };
  }, []);

  return (
    <ParallaxProvider>
      <Cursor />
      {/* <Background></Background> */}
      <div>
        <ParallaxProvider speed={0}>
          <Navbar />
        </ParallaxProvider>
        <div>
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          {/* <SkillSection /> */}
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
