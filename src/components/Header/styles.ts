import styled from "styled-components";

export const Container = styled.header`
  --green: rgb(197, 255, 65);
  --orange: rgb(244, 108, 56);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 1.8rem 3rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: transparent;

  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 2rem;
    width: 100%;
    max-width: 1500px;
    box-sizing: border-box;
    background-color: #21212150;
    backdrop-filter: blur(6px);
    border-radius: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;

    a {
      color: white;
      padding: 0.6rem;
      font-family: "Outfit", sans-serif;
      font-weight: 700;
      font-size: 10px;
      text-transform: uppercase;
      transition: text-shadow 0.3s ease;

      &.button {
        padding: 0.6rem 2rem;
        background-color: var(--green);
        color: black;
        border-radius: 5px;
        transition: all 0.3s ease;
      }

      &.button:hover {
        background-color: rgba(232, 80, 20, 1);
        color: white;
      }

      &:hover {
        text-shadow: 0 0 8px #ffffff;
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2rem;
    height: 0.2rem;
    background: #fff;
    position: relative;
    cursor: pointer;
    display: none;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: #fff;
      transition: 0.6s;
    }

    &:before {
      bottom: 0.5rem;
    }

    &:after {
      top: 0.5rem;
    }

    &.active {
      background-color: transparent;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  p {
    color: white;
    font-family: "Outfit", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 110%;
    transition: color 0.5s ease;

    &:hover {
      color: var(--green);
    }
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;

    &:after {
      content: "";
      background: #fff;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 4px;
      transition: 320ms cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
  }

  input:checked + label {
    background: var(--orange);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  @media (max-width: 1200px) {
    padding: 1.8rem 1rem;

    .header-inner {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
    }

    .menu {
      display: block;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      padding-top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      transition: opacity 0.25s ease;
      z-index: 1001;
      background-color: black;

      a {
        font-size: 15px;
      }

      a.button {
        background-color: var(--green);
        color: black;
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
    p {
      color: white;
      font-family: "Outfit", sans-serif;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 110%;
      transition: color 0.5s ease;

      &:hover {
        color: var(--green);
      }
    }
  }

  @media (max-width: 660px) {
   p {
    color: white;
    font-family: "Outfit", sans-serif;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 110%;
    transition: color 0.5s ease;

    &:hover {
      color: var(--green);
    }
  }
  }
`;
