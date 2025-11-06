import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
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

// Core/Featured skills for the marquee (keep it focused)
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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scroll = (): void => {
      if (!isPlayingRef.current) return;
      scrollPosRef.current -= 0.5;
      track.style.transform = `translateX(${scrollPosRef.current}px)`;

      // Reset scroll position for loop
      if (Math.abs(scrollPosRef.current) >= track.scrollWidth / 2) {
        scrollPosRef.current = 0;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    // Pause on hover
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
          {/* Header */}
          <Header>
            <h1>Skills</h1>
          </Header>

          {/* View Toggle */}
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
              {/* Featured Skills Marquee */}
              <MarqueeSection>
                <ScrollAnimation animateIn="fadeInUp" delay={200}>
                  <h2>Core Technologies</h2>
                </ScrollAnimation>

                <MarqueeContainer>
                  <MarqueeMaskLeft />
                  <MarqueeMaskRight />
                  <MarqueeTrack ref={trackRef}>
                    <LogoSlide>
                      {repeatedCoreSkills.map((skill, idx) => (
                        <ScrollAnimation animateIn="fadeInUp" delay={400}>
                          <LogoWrapper key={idx}>
                            <LogoContainer>
                              <LogoImage src={skill.src} alt={skill.name} />
                            </LogoContainer>
                            <LogoText>{skill.name}</LogoText>
                          </LogoWrapper>
                        </ScrollAnimation>
                      ))}
                    </LogoSlide>
                  </MarqueeTrack>
                </MarqueeContainer>
              </MarqueeSection>

              {/* Quick Category Grid */}
              <ScrollAnimation animateIn="fadeInUp" delay={200}>
                <CategoryGrid>
                  {Object.entries(skillCategories).map(([category, data]) => (
                    <CategoryCard key={category}>
                      <div className="icon">{data.icon}</div>
                      <h3>{category}</h3>
                      <p>{data.skills.length} technologies</p>
                    </CategoryCard>
                  ))}
                </CategoryGrid>
              </ScrollAnimation>
            </>
          )}

          {activeView === "detailed" && (
            <DetailedContainer>
              {Object.entries(skillCategories).map(([category, data]) => (
                <ScrollAnimation animateIn="fadeInUp" delay={200}>
                  <DetailedCategory key={category}>
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
                </ScrollAnimation>
              ))}
            </DetailedContainer>
          )}

          {/* Stats Section */}
          <StatsSection>
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <StatCard>
                <StatNumber variant="green">9</StatNumber>
                <StatLabel>Languages</StatLabel>
              </StatCard>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <StatCard>
                <StatNumber variant="purple">15+</StatNumber>
                <StatLabel>Frameworks</StatLabel>
              </StatCard>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <StatCard>
                <StatNumber variant="blue">8</StatNumber>
                <StatLabel>DevOps Tools</StatLabel>
              </StatCard>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <StatCard>
                <StatNumber variant="orange">60+</StatNumber>
                <StatLabel>Total Skills</StatLabel>
              </StatCard>
            </ScrollAnimation>
          </StatsSection>
        </ContentWrapper>
      </Container>
    </FullWidthWrapper>
  );
};
