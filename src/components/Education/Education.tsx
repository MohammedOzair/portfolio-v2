import { Container, FullWidthWrapper } from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import iisj from "../../assets/iisj-logo.png";
import apu from "../../assets/apu-logo.png";

export function Education() {
  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <FullWidthWrapper>
      <Container id="education">
        <header>
          <h2>Education</h2>
        </header>

        <div>
          <section className="timeline">
            <ol className="timeline-list">
              {/* APU */}
              <li
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="school">
                  <img className="iisj" src={apu} alt="apu" />
                  <h4 className="h4 timeline-item-title">
                    Asia Pacific University
                  </h4>
                </div>
                <span>Sept 2021 — Sept 2025</span>
                <p className="timeline-text">Kuala Lumpur, Malaysia</p>
                <p className="timeline-text">
                  Bachelor's in Computer Engineering (CGPA 3.28 / 4.00)
                </p>
              </li>

              {/* IISJ */}
              <li
                className="timeline-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="school">
                  <img className="iisj" src={iisj} alt="iisj" />
                  <h4 className="h4 timeline-item-title">
                    International Indian School Jeddah
                  </h4>
                </div>
                <span>2018 — 2020</span>
                <p className="timeline-text">Jeddah, Saudi Arabia</p>
                <p className="timeline-text">
                  Senior Secondary | CBSE (Grade: 91.6%)
                </p>
              </li>
            </ol>
          </section>
        </div>
      </Container>
    </FullWidthWrapper>
  );
}
