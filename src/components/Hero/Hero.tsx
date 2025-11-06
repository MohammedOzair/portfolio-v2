import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Hero() {
  // Initialize AOS once when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="home">
      <div className="hero-text">
        {/* Heading */}
        <h1 data-aos="fade-up" data-aos-delay="200">
          Crafting Beautiful & Functional Web Experiences
        </h1>

        {/* Subtitle */}
        <h3 data-aos="fade-up" data-aos-delay="300">
          Final Year | Computer Engineering B.Eng.
        </h3>

        {/* Typewriter Text */}
        <h3
          className="small-resume"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Typewriter
            words={[
              "WEB DEVELOPER",
              "SOFTWARE ENGINEER",
              "FULL STACK ENGINEER",
              "BPMN SOLUTIONS ARCHITECT",
              "DIGITAL TRANSFORMATION",
              "AI ENGINEER",
            ]}
            loop={0} // infinite
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>

        {/* Contact Button */}
        <div data-aos="fade-up" data-aos-delay="800">
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </div>

        {/* Social Media Links */}
        <div
          className="social-media"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
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
      </div>
    </Container>
  );
}
