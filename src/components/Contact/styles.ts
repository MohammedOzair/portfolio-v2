// styles.js
import styled from "styled-components";
import background from "../../assets/Education.jpg"; 

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
    opacity: 0.3;
    z-index: -1;
    background-attachment: fixed;
  }
`;

export const Container = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
  --green: rgb(197, 255, 65);
  --orange: rgb(244, 108, 56);
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
      background: var(--green, rgb(197, 255, 65));
      border-radius: 2px;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.2rem 2rem;
      transition: background-color 0.25s;

      img {
        width: 3rem;
      }
      a {
        background-color: var(--green);
        color: black;
        font-weight: 700;
      }
    }
  }

  .contact-form {
    margin: 3rem auto 0;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    textarea {
      padding: 1rem;
      border-radius: 0.8rem;
      border: 1px solid #ccc;
      font-size: 1rem;
    }

    button {
      background-color: var(--green);
      color: black;
      border: none;
      text-align: center;
      font-weight: 700;
      padding: 1rem;
      border-radius: 0.8rem;
      font-size: 1.7rem;
      cursor: pointer;
      transition: background-color 0.25s;
    }

    button:hover {
      background-color: var(--orange);
      color: white;
    }

    .status {
      text-align: center;
      font-size: 0.9rem;
      color: var(--green);
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
        justify-content: flex-start;
      }
    }
  }
`;
