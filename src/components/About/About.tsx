import { Container, FullWidthWrapper } from "./styles";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";

export function About() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 960);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 960);
    window.addEventListener("resize", handleResize);

    AOS.init({ duration: 1000, once: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FullWidthWrapper>
      <Container id="about">
        {isDesktop && (
          <div className="hero-image hide-on-mobile" data-aos="fade-left" data-aos-delay="1000">
            <Spline scene="https://prod.spline.design/AJe2i2X51DRE3ozQ/scene.splinecode" />
          </div>
        )}

        <div className="about-text">
          <div data-aos="fade-left">
            <header><h2>About me</h2></header>
          </div>

          {!isDesktop && (
            <div className="hero-image-mobile" data-aos="fade-up" data-aos-delay="1000">
              <Spline scene="https://prod.spline.design/AJe2i2X51DRE3ozQ/scene.splinecode" />
            </div>
          )}

          <div data-aos="fade-right" data-aos-delay="100">
            <p>
              Hi there! I'm Mohammed Ozair Mohiuddin, a final year Computer Engineering student at Asia Pacific University of Technology and Innovation, Malaysia. A tech enthusiast with 5 years of experience in tech and 1.5 years of industry experience, I bring a strong foundation in
              web development, machine learning, and scalable software solutions. I build responsive web applications, develop deep learning AI and ML models, design BPMN workflows to provide scalable business solutions, implement robust backend services, and analyze big data. I also work with CMS platforms like WordPress and Shopify to
              streamline content management.
            </p>
          </div>
        </div>
      </Container>
    </FullWidthWrapper>
  );
}
