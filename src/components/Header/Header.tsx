import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import Resume from "../../assets/OzairCV.pdf";
export function Header() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  function closeMenu() {
    setActive(false);
  }
  return (
    <Container className="header-fixed">
      <Router>
        <div className="header-inner">
          <HashLink smooth to="#home" className="logo">
            <p>{"<Mohammed Ozair Mohiuddin/>"}</p>
          </HashLink>
          <nav className={isActive ? "active" : ""}>
            <NavHashLink smooth to="#home" onClick={closeMenu}>
              Home
            </NavHashLink>
            <NavHashLink smooth to="#about" onClick={closeMenu}>
              About me
            </NavHashLink>
            <NavHashLink smooth to="#education" onClick={closeMenu}>
              Education
            </NavHashLink>
            <NavHashLink smooth to="#experience" onClick={closeMenu}>
              Experience
            </NavHashLink>
            <NavHashLink smooth to="#certifications" onClick={closeMenu}>
              Certifications
            </NavHashLink>
            <NavHashLink smooth to="#skills" onClick={closeMenu}>
              Skills
            </NavHashLink>
            <NavHashLink smooth to="#project" onClick={closeMenu}>
              Projects
            </NavHashLink>
            <NavHashLink smooth to="#swot" onClick={closeMenu}>
              SWOT
            </NavHashLink>
            <NavHashLink smooth to="#contact" onClick={closeMenu}>
              Contact
            </NavHashLink>
            <a href={Resume} download className="button">
              Resume
            </a>
          </nav>
          <div
            aria-expanded={isActive ? "true" : "false"}
            aria-haspopup="true"
            aria-label={isActive ? "Close menu" : "Open menu"}
            className={isActive ? "menu active" : "menu"}
            onClick={() => setActive(!isActive)}
          ></div>
        </div>
      </Router>
    </Container>
  );
}
