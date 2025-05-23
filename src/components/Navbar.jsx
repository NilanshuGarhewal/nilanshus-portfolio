import "../css/componentsCss/navbar.css";
import NavbarTools from "./subcomponents/NavbarTools";
import Magnetic from "./extra/Magnetic";

export default function Navbar() {
  // NAVBAR SECTION

  return (
    <div className="navbar">
      <Magnetic>
        <a href="#home-pe-ja" className="my-name">
          <span>Nilanshu Garhewal</span>
        </a>
      </Magnetic>

      <NavbarTools />
    </div>
  );
}
