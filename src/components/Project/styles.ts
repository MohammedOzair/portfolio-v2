import styled from "styled-components";
import background from "../../assets/about-background.jpg";

export const FullWidthWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0;
  z-index: 0;
  margin-top: 12rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center center / cover;
    opacity: 0.4;
    z-index: -1;
    background-attachment: fixed;
  }
`;

export const Container = styled.section`
  margin-top: 10rem;
  padding: 2rem;
  header {
    text-align: center;
    margin-bottom: 4rem;
    h1 {
      text-align: center;
      font-size: clamp(2.5rem, 6vw, 4rem); /* 👈 Responsive font size */
      font-weight: 700;
      font-family: "Outfit", sans-serif;
      color: var(--white, #fff);
      margin: 0;
      position: relative;
      border-bottom: var(--green, #c5ff41ff);
      display: inline-block;
    }

    h1::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      font-family: "Outfit", sans-serif;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--green, #c5ff41ff);
      
      border-radius: 2px;
    }
  }
`;

export const ProjectCard = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  border: solid;
  border-color: rgba(160, 160, 160, 0.4);
  align-items: center;
  transition: all 0.3s ease;
  color: #fff;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  .icon {
    flex-shrink: 0;
    svg {
      width: 60px;
      height: 60px;
    }
  }

  .content {
    flex: 1;
    h3 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1.5rem;
      line-height: 1.5;
      font-size: 1.5rem;
      opacity: 0.9;
    }
    .tech-list {
      display: flex;
      gap: 1rem;
      font-size: 1.3rem;
      opacity: 0.7;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
    }
    .links {
      display: flex;
      gap: 1rem;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .icon {
      margin-bottom: 1rem;
    }
  }
`;
