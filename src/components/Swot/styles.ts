import styled from "styled-components";
import background from "../../assets/skills-background.jpg";
// Styles

export const FullWidthWrapper = styled.div`
  font-family: "Outfit", sans-serif;
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
  padding: 4rem 2rem;
  margin-top: 10rem;
  color: #fff;
  max-width: 1200px;
  margin: auto;
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
    content: '';
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
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div<{ color: string }>`
  border-radius: 18px;
  padding: 1.8rem;
  background: ${({ color }) => `linear-gradient(145deg, ${color}15, #1c1c1c)`};
  box-shadow: 0 4px 20px ${({ color }) => `${color}33`};
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 8px 28px ${({ color }) => `${color}55`};
  }
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const Content = styled.div`
  ul {
    list-style: disc;
  }
  li {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    line-height: 1.5;
  }
`;