import HeroLinkSection from "./subcomponents/HeroLinkSection";
import HeroNameSection from "./subcomponents/HeroNameSection";
import "../css/componentsCss/HeroSection.css"

export default function HeroSection() {
  return (
    <div className="hero-section">
      <HeroLinkSection></HeroLinkSection>
      <HeroNameSection></HeroNameSection>
    </div>
  );
}
