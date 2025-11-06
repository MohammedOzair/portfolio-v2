import { Container, FullWidthWrapper, ProjectCard } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Built a scalable MERN stack e-commerce platform supporting dynamic product listings, secure checkout, and order tracking. Integrated Stripe API for real-time payment processing and implemented JWT-based authentication for secure user sessions. Designed with modular architecture for easy feature expansion.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "JWT"],
      github: null,
      link: null,
    },
    {
      title: "Hand Gesture Recognition AI",
      description:
        "Developed a YOLOv8-based real-time hand gesture recognition system capable of detecting and classifying gestures with 95% accuracy. Integrated with a React Native mobile app for user interaction and deployed on Arduino hardware with WebRTC for low-latency video streaming. Designed for human-computer interaction and IoT control scenarios.",
      tech: ["YOLOv8", "Flask", "React Native", "Arduino", "WebRTC"],
      github: null,
      link: null,
    },
    {
      title: "First Responder Reaction Timer",
      description:
        "Designed and implemented a high-precision reaction timing device using VHDL on FPGA. Leveraged D flip-flop logic to minimize propagation delay, achieving a 15% improvement in response time accuracy. Targeted for emergency training applications to measure and improve reaction speed in high-stress scenarios.",
      tech: ["VHDL", "FPGA", "Digital Logic"],
      github: null,
      link: null,
    },
    {
      title: "Electric Vehicle SoC Prediction Model",
      description:
        "Created a hybrid deep learning model with an integrated error correction mechanism to predict electric vehicle state-of-charge (SoC) with an R² score of 0.9988. Trained on real-world EV battery datasets and optimized for deployment in embedded systems for real-time energy management. Improves range estimation reliability and battery efficiency.",
      tech: ["Deep Learning", "Python", "AI"],
      github: null,
      link: null,
    },
    {
      title: "Banking System",
      description:
        "Migrated a legacy banking application into a full-stack architecture using Python, React, and MySQL. Implemented secure authentication, account management, and transaction history tracking with a modern, responsive UI. Enhanced performance, maintainability, and user experience for a large customer base.",
      tech: ["Python", "React", "MySQL"],
      github: null,
      link: null,
    },
  ];

  return (
    <FullWidthWrapper>
      <Container id="project">
        <header>
          <h1>Projects</h1>
        </header>

        {projects.map((proj, idx) => (
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <ProjectCard key={idx}>
              <div className="icon">
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c5ff41ff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <ul className="tech-list">
                  {proj.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </ProjectCard>
          </ScrollAnimation>
        ))}
      </Container>
    </FullWidthWrapper>
  );
}
