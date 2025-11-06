import { Container, FullWidthWrapper } from "./styles";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Spline from "@splinetool/react-spline";


export function About() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 960);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FullWidthWrapper>
      <Container id="about">
      {isDesktop && (
        <div className="hero-image hide-on-mobile">
          <ScrollAnimation animateIn="fadeInLeft" delay={1000}>
            <Spline scene="https://prod.spline.design/AJe2i2X51DRE3ozQ/scene.splinecode" />
          </ScrollAnimation>
        </div>
      )}

      <div className="about-text">
        
        <ScrollAnimation animateIn="fadeInLeft">
          <header><h2>About me</h2></header>
        </ScrollAnimation>

        {/* Mobile Spline after h2 */}
        {!isDesktop && (
          <div className="hero-image-mobile">
            <ScrollAnimation animateIn="fadeInUp" delay={1000}>
              <Spline scene="https://prod.spline.design/AJe2i2X51DRE3ozQ/scene.splinecode" />
            </ScrollAnimation>
          </div>
        )}

        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Mohammed Ozair Mohiuddin, a final year Computer engineering student Asia Pacific University of Technology and Innovation, Malaysia. A tech enthusiast with 5 years of experience in tech and 1.5 years of industry experience, I bring a strong foundation in
            web development, machine learning, and scalable software solutions. I build responsive web applications, developing deep learning AI and ML models, developING BPMN workflow to provide scalable business solutions, implementing robust backend services, Analyzing and interpreting big data. I also work with CMS platforms like WordPress and Shopify to
            streamline content management.
          </p>
        </ScrollAnimation>
      </div>
    </Container>
    </FullWidthWrapper>
    
  );
}
