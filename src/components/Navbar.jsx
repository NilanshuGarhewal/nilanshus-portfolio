import "../css/componentsCss/navbar.css";

export default function Navbar() {
  // NAVBAR SECTION

  return (
    <div className="navbar">
      <a href="#home-pe-ja" className="link-hai-ye">
        <div className="logo">
          <p>Nilanshu</p>
        </div>
      </a>

      <div className="tools">
        <a href="#about" className="link-hai-ye">
          <div className="tool-container">
            <div className="dot-select"></div>
            <p>about</p>
          </div>
        </a>
        <a href="#projects" className="link-hai-ye">
          <div className="tool-container">
            <div className="dot-select"></div>
            <p>projects</p>
          </div>
        </a>
        <a href="#skills" className="link-hai-ye">
          <div className="tool-container">
            <div className="dot-select"></div>
            <p>skills</p>
          </div>
        </a>
      </div>

      <a href="#footer" className="link-hai-ye">
        <div className="contact">
          <div className="dot-select"></div>
          <p>contact</p>
        </div>
      </a>
    </div>
  );
}
