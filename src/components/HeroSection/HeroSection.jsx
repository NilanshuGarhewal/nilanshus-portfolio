import HeroLinkSection from "./HeroLinkSection";
import HeroNameSection from "./HeroNameSection";
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div className="hero-section">
      <HeroLinkSection></HeroLinkSection>
      <HeroNameSection></HeroNameSection>
    </div>
  );
}
