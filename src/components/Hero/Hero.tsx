import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Crafting Beautiful & Functional Web Experiences</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <h3>Final Year | Computer Engineering B.Eng.</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3 className="small-resume">
            <Typewriter
              words={[
                "WEB DEVELOPER",
                "SOFTWARE ENGINEER",
                "FULL STACK ENGINEER",
                "BPMN SOLUTIONS ARCHITECT",
                "DIGITAL TRANSFORMATION",
                "AI ENGINEER"
              ]}
              loop={0} // 0 = infinite
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/mohammed-ozair-mohiuddin-b41669201/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/MohammedOzair"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://wa.me/966564960508?text=Hello%2C%20I%20found%20your%20number%20through%20your%20portfolio!"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
