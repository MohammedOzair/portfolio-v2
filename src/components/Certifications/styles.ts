import styled from "styled-components";
import background from "../../assets/Certifications.jpg";

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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  --green: rgb(197, 255, 65);
  --orange: rgb(244, 108, 56);

  *{
    font-family: "Outfit", sans-serif;
  }
  /* Header styles */
  header {
    text-align: center;
    margin-bottom: 4rem;

    h1 {
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 700;
      font-family: "Outfit", sans-serif;
      color: var(--white, #fff);
      margin: 0;
      position: relative;
      display: inline-block;
    }

    h1::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--green, rgb(197, 255, 65));
      border-radius: 2px;
    }

    p {
      color: var(--light-gray, #ccc);
      font-size: 1.4rem;
      max-width: 600px;
      margin: 1rem auto 0;
      line-height: 1.6;
    }
  }

  /* Certification items */
  .certification {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  .cert-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 15px;
    background: transparent;
    padding: 6px;
  }

  .cert-details {
    flex: 1;
  }

  /* Timeline styles */
  .timeline-item {
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2.5rem;
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.08);
      border-color: var(--green);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  }

  .timeline-item-title {
    font-size: 1.8rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: var(--white, #fff);
  }

  .timeline-list span {
    display: inline-block;
    background: rgba(255, 215, 0, 0.2);
    color: white;
    margin-top: 0.8rem;
    padding: 0.4rem 1rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  .timeline-text {
    color: var(--light-gray, #ccc);
    font-weight: 300;
    line-height: 1.8;
    margin: 0.5rem 0 1.5rem;
    font-size: 1.2rem;
  }

  .view-cert {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.5rem;
  background: transparent;
  opacity: 0.9;
  color: white;
  border: solid;
  border-color: rgba(101, 100, 100, 1);
  border-radius: 15px;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::after {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 1px 2px white;

    &::after {
      transform: translateX(3px);
    }
  }
}

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 8rem;

    .certification {
      flex-direction: column;
      gap: 1rem;
    }

    .cert-logo {
      width: 60px;
      height: 60px;
    }

    .timeline-item {
      padding: 1.5rem;
    }

    .timeline-item-title {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    header h1 {
      font-size: 2.2rem;
    }

    header p {
      font-size: 1.1rem;
    }

    .timeline-text {
      font-size: 1rem;
    }

    .view-cert {
      padding: 0.5rem 1.2rem;
      font-size: 0.9rem;
    }
  }
`;