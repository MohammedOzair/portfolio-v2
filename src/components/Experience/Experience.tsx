import { Container, FullWidthWrapper } from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import betterplace from "../../assets/mybetterplace_logo.png";
import troopers from "../../assets/troopersmy_logo.png";

export function Experience() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <FullWidthWrapper>
      <Container id="experience">
        <header>
          <h1>Experience</h1>
        </header>

        <div>
          <section className="timeline">
            <ol className="timeline-list">
              
              {/* Betterplace Internship */}
              <li
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="logoname">
                  <img
                    className="logoimagee"
                    src={betterplace}
                    alt="betterplace"
                  />
                  <h4 className="timeline-item-title">
                    Associate Solutions Architect
                  </h4>
                </div>
                <span>Betterplace Safety Solutions · Internship</span>
                <p className="timeline-text">Sept 2024 - Present</p>
                <p className="timeline-text">
                  Bengaluru, Karnataka, India · Remote
                </p>
              </li>

              {/* Troopers Internship */}
              <li
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="logoname">
                  <img
                    className="logoimagee"
                    src={troopers}
                    alt="troopers"
                  />
                  <h4 className="timeline-item-title">
                    Intern, Digital Transformation and Change Management
                  </h4>
                </div>
                <span>Troopers Innovation Sdn. Bhd. · Internship</span>
                <p className="timeline-text">June 2024 - Sept 2024</p>
                <p className="timeline-text">
                  Petaling Jaya, Selangor, Malaysia · Hybrid
                </p>
              </li>
            </ol>
          </section>
        </div>
      </Container>
    </FullWidthWrapper>
  );
}
