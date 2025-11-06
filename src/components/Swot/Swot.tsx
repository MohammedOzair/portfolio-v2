import React from "react";
import {
  Container,
  Grid,
  Card,
  Title,
  Content,
  FullWidthWrapper,
} from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const swotData = [
  {
    title: "Strengths",
    content: [
      "Technical Knowledge - Solid foundation in engineering principles, programming, and problem-solving.",
      "Adaptability - Able to learn and apply new tools, frameworks, and concepts quickly.",
      "Project Experience - Hands-on exposure through academic projects, internships, and lab work.",
      "Analytical Skills - Strong capability to analyze problems systematically and develop practical solutions.",
      "Collaboration - Experience working effectively in teams for group assignments and project work.",
    ],
    color: "#4CAF50", // green
  },
  {
    title: "Weaknesses",
    content: [
      "Networking Skills - Professional network still in early stages of development.",
      "Time Management - Balancing multiple coursework deadlines and personal commitments can be challenging.",
      "Perfectionism - Tendency to spend extra time refining work beyond requirements, which can impact shipping.",
      "Resource Access - Occasional limitations in availability of specialised tools or equipment for certain tasks.",
    ],
    color: "#F44336", // red
  },
  {
    title: "Opportunities",
    content: [
      "Emerging Technologies - Rapid advancements in AI, automation, renewable energy, and IoT offer new career paths.",
      "Internships & Competitions - Opportunities to gain real-world exposure and build professional credibility.",
      "Global Collaboration - Access to online courses, open-source projects, and international communities.",
      "Industry Demand - Increasing need for engineers in tech-driven industries.",
    ],
    color: "#2196F3", // blue
  },
  {
    title: "Threats",
    content: [
      "High Competition - Large number of graduates entering the job market each year.",
      "Technological Obsolescence - Rapid changes may make certain skills outdated quickly.",
      "Economic Uncertainty - Hiring freezes or reduced opportunities due to market conditions.",
      "Workload Stress - High academic and project demands can lead to burnout if not managed well.",
    ],
    color: "#FFC107", // yellow
  },
];

export const SWOT: React.FC = () => {
  return (
    <FullWidthWrapper>
      <Container id="swot">
        <header>
          <h1>SWOT Analysis</h1>
        </header>
        <Grid>
          {swotData.map(({ title, content, color }) => (
            <ScrollAnimation key={title} animateIn="fadeInUp" delay={0.2 * 1000}>
              <Card color={color}>
                <Title>{title}</Title>
                <Content>
                  <ul>
                    {content.map((item, idx) => {
                      const [heading, ...rest] = item.split(" - ");
                      return (
                        <li key={idx}>
                          <strong>{heading}</strong>
                          {rest.length > 0 && ` - ${rest.join(" - ")}`}
                        </li>
                      );
                    })}
                  </ul>
                </Content>
              </Card>
            </ScrollAnimation>
          ))}
        </Grid>
      </Container>
    </FullWidthWrapper>
  );
};
