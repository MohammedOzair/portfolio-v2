import { Container, FullWidthWrapper } from "./styles";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <FullWidthWrapper>
      <Container>
        <div className="about-image" data-aos="fade-right">
          <img
            src="../../assets/ozair.jpeg"
            alt="Developer workspace"
          />
        </div>
        <div className="about-text" data-aos="fade-left">
          <header>
            <h2>About me</h2>
          </header>
          <p>
            Hi there! I'm Mohammed Ozair Mohiuddin, a final year Computer Engineering student at Asia Pacific University of Technology and Innovation, Malaysia. A tech enthusiast with 5 years of experience in tech and 1.5 years of industry experience, I bring a strong foundation in
            <br /><br />
            web development, machine learning, and scalable software solutions. I build responsive web applications, develop deep learning AI and ML models, design BPMN workflows to provide scalable business solutions, implement robust backend services, and analyze big data. I also work with CMS platforms like WordPress and Shopify to
            <br /><br />
            streamline content management.
          </p>
        </div>
      </Container>
    </FullWidthWrapper>
  );
}