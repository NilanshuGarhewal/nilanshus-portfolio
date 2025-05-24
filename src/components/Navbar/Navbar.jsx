import "./Navbar.css";
import NavbarTools from "./NavbarTools";
import Magnetic from "../Button/Magnetic";

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
