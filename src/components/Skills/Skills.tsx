import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Container,
  ContentWrapper,
  Header,
  ViewToggle,
  ToggleContainer,
  ToggleButton,
  MarqueeSection,
  MarqueeContainer,
  MarqueeMaskLeft,
  MarqueeMaskRight,
  MarqueeTrack,
  LogoSlide,
  LogoWrapper,
  LogoContainer,
  LogoImage,
  LogoText,
  CategoryGrid,
  CategoryCard,
  DetailedContainer,
  DetailedCategory,
  CategoryHeader,
  SkillsGrid,
  SkillTag,
  StatsSection,
  StatCard,
  StatNumber,
  StatLabel,
  FullWidthWrapper,
} from "./styles";

// TypeScript interfaces
interface Skill {
  name: string;
  src: string;
}

interface SkillCategory {
  icon: string;
  skills: string[];
}

type ViewType = "overview" | "detailed";

// Core marquee skills
const coreSkills: Skill[] = [
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

// Organized skill categories
const skillCategories: Record<string, SkillCategory> = {
  Languages: {
    icon: "🔧",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Python",
      "Dart",
      "HTML5",
      "CSS3",
      "SQL",
      "Shell Scripting",
    ],
  },
  Frontend: {
    icon: "⚛️",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Styled-Components",
      "Redux/Zustand",
      "Flutter",
      "Framer Motion",
    ],
  },
  "Backend & APIs": {
    icon: "🛠️",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "JWT/OAuth2",
    ],
  },
  "DevOps & Tools": {
    icon: "⚙️",
    skills: [
      "Docker",
      "Jenkins",
      "Git & GitHub",
      "GitHub Actions",
      "NGINX",
      "Kong API Gateway",
      "Postman",
    ],
  },
  "Cloud & Infrastructure": {
    icon: "☁️",
    skills: [
      "AWS (S3, EC2, Lambda)",
      "Firebase",
      "Vercel/Netlify",
      "DigitalOcean",
    ],
  },
  "AI/ML & Automation": {
    icon: "🧠",
    skills: [
      "pandas, NumPy",
      "scikit-learn",
      "Vision Transformers",
      "OpenCV",
      "Raspberry Pi",
    ],
  },
  Testing: {
    icon: "🧪",
    skills: ["Jest", "React Testing Library", "Cypress", "ESLint/Prettier"],
  },
  Specialized: {
    icon: "🧰",
    skills: ["WebSockets", "WebRTC", "Three.js", "Chart.js", "GSAP", "i18next"],
  },
};

const repeatedCoreSkills: Skill[] = [
  ...coreSkills,
  ...coreSkills,
  ...coreSkills,
  ...coreSkills,
];

export const Skills: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<number>(0);
  const animationRef = useRef<number | null>(null);
  const isPlayingRef = useRef<boolean>(true);
  const [activeView, setActiveView] = useState<ViewType>("overview");

  // AOS initialization
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Continuous marquee scroll effect
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scroll = (): void => {
      if (!isPlayingRef.current) return;
      scrollPosRef.current -= 0.5;
      track.style.transform = `translateX(${scrollPosRef.current}px)`;

      if (Math.abs(scrollPosRef.current) >= track.scrollWidth / 2) {
        scrollPosRef.current = 0;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = (): void => {
      isPlayingRef.current = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };

    const handleMouseLeave = (): void => {
      isPlayingRef.current = true;
      scroll();
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);
    scroll();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <FullWidthWrapper>
      <Container id="skills">
        <ContentWrapper>
          <Header>
            <h1>Skills</h1>
          </Header>

          <ViewToggle>
            <ToggleContainer>
              <ToggleButton
                active={activeView === "overview"}
                onClick={() => setActiveView("overview")}
              >
                Overview
              </ToggleButton>
              <ToggleButton
                active={activeView === "detailed"}
                onClick={() => setActiveView("detailed")}
              >
                Detailed View
              </ToggleButton>
            </ToggleContainer>
          </ViewToggle>

          {activeView === "overview" && (
            <>
              <MarqueeSection>
                <h2 data-aos="fade-up">Core Technologies</h2>

                <MarqueeContainer>
                  <MarqueeMaskLeft />
                  <MarqueeMaskRight />
                  <MarqueeTrack ref={trackRef}>
                    <LogoSlide>
                      {repeatedCoreSkills.map((skill, idx) => (
                        <LogoWrapper
                          key={idx}
                          data-aos="fade-up"
                          data-aos-delay={100 + idx * 50}
                        >
                          <LogoContainer>
                            <LogoImage src={skill.src} alt={skill.name} />
                          </LogoContainer>
                          <LogoText>{skill.name}</LogoText>
                        </LogoWrapper>
                      ))}
                    </LogoSlide>
                  </MarqueeTrack>
                </MarqueeContainer>
              </MarqueeSection>

              <div data-aos="fade-up">
                <CategoryGrid>
                  {Object.entries(skillCategories).map(([category, data]) => (
                    <CategoryCard key={category}>
                      <div className="icon">{data.icon}</div>
                      <h3>{category}</h3>
                      <p>{data.skills.length} technologies</p>
                    </CategoryCard>
                  ))}
                </CategoryGrid>
              </div>
            </>
          )}

          {activeView === "detailed" && (
            <DetailedContainer>
              {Object.entries(skillCategories).map(([category, data]) => (
                <DetailedCategory
                  key={category}
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <CategoryHeader>
                    <span>{data.icon}</span>
                    <h3>{category}</h3>
                  </CategoryHeader>
                  <SkillsGrid>
                    {data.skills.map((skill, idx) => (
                      <SkillTag key={idx}>
                        <span>{skill}</span>
                      </SkillTag>
                    ))}
                  </SkillsGrid>
                </DetailedCategory>
              ))}
            </DetailedContainer>
          )}

          <StatsSection>
            <StatCard data-aos="fade-up">
              <StatNumber variant="green">9</StatNumber>
              <StatLabel>Languages</StatLabel>
            </StatCard>

            <StatCard data-aos="fade-up" data-aos-delay="100">
              <StatNumber variant="purple">15+</StatNumber>
              <StatLabel>Frameworks</StatLabel>
            </StatCard>

            <StatCard data-aos="fade-up" data-aos-delay="200">
              <StatNumber variant="blue">8</StatNumber>
              <StatLabel>DevOps Tools</StatLabel>
            </StatCard>

            <StatCard data-aos="fade-up" data-aos-delay="300">
              <StatNumber variant="orange">60+</StatNumber>
              <StatLabel>Total Skills</StatLabel>
            </StatCard>
          </StatsSection>
        </ContentWrapper>
      </Container>
    </FullWidthWrapper>
  );
};
