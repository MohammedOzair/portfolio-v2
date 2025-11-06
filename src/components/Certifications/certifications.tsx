import { Container, FullWidthWrapper } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import programminghub from "../../assets/programming_hub_logo.jpg";
import cisco from "../../assets/cisco.svg";

export function Certifications() {
  return (
    <FullWidthWrapper>
      <Container id="certifications">
        <header>
          <h1>Certifications</h1>
        </header>

        <div>
          <section className="timeline">
            <ol className="timeline-list">
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <li className="timeline-item">
                  <div className="certification">
                    <img className="cert-logo" src={cisco} alt="APU" />
                    <div className="cert-details">
                      <h4 className="h4 timeline-item-title">
                        CCNAv7: Introduction to Networks
                      </h4>
                      <span>Cisco | Issued Aug 2022</span>
                      <p className="timeline-text">
                        Covered network fundamentals, IP services, security
                        fundamentals, Network configuration, Troubleshooting and
                        automation
                      </p>
                      <a
                        href="https://drive.google.com/file/d/1FBI6p1dbhDNWfV_4XPM_TT189o_VedEC/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-cert"
                      >
                        View Certification
                      </a>
                    </div>
                  </div>
                </li>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                <li className="timeline-item">
                  <div className="certification">
                    <img
                      className="cert-logo"
                      src={programminghub}
                      alt="IISJ"
                    />
                    <div className="cert-details">
                      <h4 className="h4 timeline-item-title">
                        Software Engineering Certification Course
                      </h4>
                      <span>Programming Hub | Issued Apr 2024</span>
                      <p className="timeline-text">
                        Credential ID: 1712483603793
                        <br />
                        Comprehensive course covering software engineering
                        principles, design patterns, and development
                        methodologies
                      </p>
                      <a
                        href="https://drive.google.com/file/d/1hLxEklZlwG1VViVFx11y-FTaDQxz4Lf7/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-cert"
                      >
                        View Certification
                      </a>
                    </div>
                  </div>
                </li>
              </ScrollAnimation>
            </ol>
          </section>
        </div>
      </Container>
    </FullWidthWrapper>
  );
}
