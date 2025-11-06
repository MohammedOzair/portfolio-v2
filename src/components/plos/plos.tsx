import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { RadarChartComponent } from "./RadarChartComponent";
import { Container, SectionTitle, FullWidthWrapper } from "./styles";

export const Plos: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <FullWidthWrapper>
      <Container id="plos">
        <div style={{ textAlign: "center" }}>
          <SectionTitle>PLOs</SectionTitle>
        </div>

        <div data-aos="fade-up">
          <RadarChartComponent />
        </div>

        <div className="timeline-container">
          <ol className="timeline-grid">
            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO1: Engineering Knowledge</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to gain and apply principles of Mathematics, Science and Engineering to the solutions of complex engineering problems.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO2: Problem Analysis</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to undertake complex engineering problem analysis and apply engineering principles to solve them.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO3: Design Innovative Solutions</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to design innovative solutions for complex engineering problems.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO4: Investigation</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to conduct investigation into complex engineering problems using research-based knowledge and methods.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO5: Modern Tool Usage</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to select and use suitable tools and techniques for complex engineering problems.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO6: The Engineer and Society</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to engage in professional engineering practice for safety, health, social, cultural and legal responsibilities in developing solutions for complex engineering problems.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO7: Environment and Sustainability</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to comprehend and demonstrate good practices of engineering in sustainable development and environmental considerations for the solutions of complex engineering problems.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO8: Ethics and Professionalism</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to execute the responsibilities of an Engineer professionally and ethically.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO9: Individual and Team Work</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to function effectively as a team leader or a member in a team within multi-disciplinary settings.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO10: Communication</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to communicate effectively and professionally on complex engineering activities.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO11: Project Management and Finance</h4>
              </div>
              <span>0.67 / 1.00</span>
              <p className="timeline-text">
                Ability to demonstrate entrepreneurship skills, engineering project management and economic decision making in multidisciplinary environments.
              </p>
            </li>

            <li className="timeline-item" data-aos="fade-left">
              <div className="school">
                <h4 className="h4 timeline-item-title">PLO12: Lifelong Learning</h4>
              </div>
              <span>1.00 / 1.00</span>
              <p className="timeline-text">
                Ability to recognise the need for, and be able to engage in independent and life-long learning towards continuous professional development.
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </FullWidthWrapper>
  );
};
