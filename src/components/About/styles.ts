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
  padding: 0 2rem;
  min-height: 100vh;
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

  .about-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    img {
      width: 100%;
      max-width: 500px;
      height: auto;
      aspect-ratio: 1 / 1;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      object-fit: cover;
      opacity: 0.7;
    }
  }

  .about-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 2rem;
  }

  header {
    text-align: left;
    margin-bottom: 2rem;
    width: 100%;

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
      left: 0;
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

  p {
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    line-height: 1.6;
    font-weight: 500;
    font-family: "Outfit", sans-serif;
    text-align: justify;
  }

  // Larger screens - more space for image
  @media (min-width: 1440px) {
    padding: 0 4rem;
    
    .about-image img {
      max-width: 500px;
    }
  }

  // Medium laptops
  @media (max-width: 1200px) {
    gap: 1.5rem;
    padding: 0 1.5rem;
    
    .about-image img {
      max-width: 360px;
    }

    .about-text {
      padding: 1rem;
    }

    p {
      font-size: 1.6rem;
      letter-spacing: 0.15rem;
    }

    header h2 {
      font-size: 3.5rem;
    }
  }

  // Tablets and smaller laptops
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    min-height: auto;
    padding: 4rem 2rem;
    gap: 3rem;

    .about-image {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      
      img {
        max-width: 100%;
      }
    }

    .about-text {
      padding: 0;
      text-align: center;
      align-items: center;
      
      header {
        text-align: center;
        
        h2::after {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    p {
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      line-height: 1.7;
    }

    header h2 {
      font-size: 3rem;
    }
  }

  // Mobile devices
  @media (max-width: 640px) {
    padding: 3rem 1.5rem;
    
    .about-image {
      max-width: 100%;
      
      img {
        max-width: 300px;
      }
    }

    .about-text {
      padding: 0;
    }

    p {
      font-size: 1.3rem;
      letter-spacing: 0.08rem;
    }

    header h2 {
      font-size: 2.5rem;
    }
  }

  // Small mobile devices
  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .about-image img {
      max-width: 300px;
    }

    p {
      font-size: 1.1rem;
      letter-spacing: 0.05rem;
    }

    header h2 {
      font-size: 2rem;
    }
  }
`;