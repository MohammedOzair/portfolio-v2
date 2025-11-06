import { Container, FullWidthWrapper } from "./styles";
import betterplace from "../../assets/mybetterplace_logo.png";
import troopers from "../../assets/troopersmy_logo.png";
import ScrollAnimation from "react-animate-on-scroll";
export function Experience() {
  return (
    <FullWidthWrapper>
      <Container id="experience">
        <header>
          <h1>Experience</h1>
        </header>
        <div>
          <section className="timeline">
            <ol className="timeline-list">
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <li className="timeline-item">
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
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <li className="timeline-item">
                  <div className="logoname">
                    <img className="logoimagee" src={troopers} alt="troopers" />
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
              </ScrollAnimation>
            </ol>
          </section>
        </div>
      </Container>
    </FullWidthWrapper>
  );
}
