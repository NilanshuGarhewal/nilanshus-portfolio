import "../css/componentsCss/navbar.css";
import NavbarTools from "./subcomponents/NavbarTools";
import "../css/extraCss/earthquake.css";

export default function Navbar() {
  // NAVBAR SECTION

  return (
    <div className="navbar">
      <a href="#home-pe-ja" className="my-name earthquake">
        <span>NILANSHU</span>
      </a>

      <span id="slide-tool">
        <NavbarTools />
      </span>

      <a href="#footer" className="contact-tool earthquake">
        <span>CONTACT</span>
      </a>
    </div>
  );
}
