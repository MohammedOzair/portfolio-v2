import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Container = styled.section`
--green: rgb(197, 255, 65);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 100vh;
  overflow: hidden;
  text-align: center;

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

  .hero-text {
    z-index: 1;

    & > p {
      font-size: 1.8rem;
    }

    h1 {
      padding-top: 60px;
      font-size: 5.5rem;
      font-weight: 700;
      max-width: 750px;
      font-family: "Outfit", sans-serif;
    }

    h3 {
      color: white;
      margin: 1rem 0;
      font-size: 2rem;
      font-weight: 400;
      font-family: "Outfit", sans-serif;
    }

    h3.small-resume {
      font-family: "Outfit", sans-serif;
      margin-bottom: 3rem;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-top: 3rem;

    img,
    span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button {
    background-color: transparent;
    opacity: 0.9;
    border-style: solid;
    border-color: #525252;
    color: white;
    font-family: "Outfit", sans-serif;
    font-weight: bold;
    margin-top: 3rem;
    padding: 1.2rem 6rem;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 1.8rem;
    &:hover {
      background-color:var(--green);
      color: black;
      border: none;
      transform: scale(1.05);
    }
  }

  .hero-image {
    display: none; /* optional */
  }

  @media (max-width: 960px) {
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }
  }

  @media (max-width: 1200px) {
    .hero-text > p {
      font-size: 1.4rem;
    }

    .hero-text h1 {
      font-size: 3.5rem;
    }

    .hero-text h3 {
      font-size: 1.6rem;
    }

    .social-media img {
      width: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    .hero-text > p {
      font-size: 1.4rem;
    }

    .hero-text h1 {
      font-size: 3.5rem;
    }

    .hero-text h3 {
      font-size: 1.6rem;
    }

    .social-media img {
      width: 2.5rem;
    }
  }

  @media (max-width: 700px) {
    .hero-text > p {
      font-size: 1.2rem;
    }

    .hero-text h1 {
      font-size: 3.2rem;
    }

    .hero-text h3 {
      font-size: 1.3rem;
    }

    .social-media img {
      width: 2.2rem;
    }
  }
`;
