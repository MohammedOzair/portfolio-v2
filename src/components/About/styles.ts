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
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100vh;
  overflow: hidden;

  --green: rgb(197, 255, 65);
  

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat center center / cover;
    opacity: 0.2;
    z-index: -1;
    background-attachment: fixed;
  }

  .hero-image {
    margin-top: 50px;
    padding-top: 30px;
    min-height: 300px;
    overflow: visible;
    padding: 100px 20px 0px 50px;
  }

  .hero-image canvas {
    width: 100%;
    height: 100%;
    max-width: 640px; /* ⬆️ Increased from 490px */
    max-height: 380px; /* ⬆️ Increased from 250px */
    overflow: visible !important;
    background: transparent;
    clip-path: none;
  }

  header {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      font-size: 4rem;
      font-weight: 700;
      font-family: "Outfit", sans-serif;
      color: var(--white, #fff);
      margin: 0;
      position: relative;
      display: inline-block;
    }

    h2::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--green);
      border-radius: 2px;
    }

    p {
      color: var(--green);
      font-weight: 500;
      margin-top: 1rem;
    }
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  .hero-image-mobile {
    margin-top: 2rem;
    padding: 0;

    canvas {
      width: 100%;
      height: auto;
      max-width: 490px;
      max-height: 300px;
      background: transparent;
    }
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    line-height: 1.3;
    font-weight: 500;
    font-family: "Outfit", sans-serif;
    text-align: justify;
  }

  // 🔻 RESPONSIVE STYLES

  @media (min-width: 1440px) {
    .hero-image canvas {
      max-width: 740px;
      max-height: 420px;
    }
  }

  @media (max-width: 960px) {
    display: block;
    height: auto; /* ✅ allows full content height */
    overflow: visible;

    .hero-image {
      display: none;
    }

    .hero-image-mobile {
      display: block;
      text-align: center;
      margin: 2rem auto;
    }

    .about-text {
      padding: 1rem 2rem 3rem 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      line-height: 1.5;
      text-align: justify;
    }
  }

  @media only screen and (max-width: 480px) {
    .about-text {
      padding: 0 1.5rem 2.5rem 1.5rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;
