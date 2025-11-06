import styled from "styled-components";
import background from "../../assets/background.jpg";

export const FullWidthWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0;
  font-family: "Outfit", sans-serif;
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

  /* ----------- HEADER ------------ */
  header {
    text-align: center;
    margin-bottom: 4rem;

    h1 {
      font-size: 4rem;
      font-weight: 700;
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
      color: var(--green, rgb(197, 255, 65));
      font-weight: 500;
      margin-top: 1rem;
    }
  }
  
  .school{
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  
  .iisj{
    max-width: 50px;
    max-height: 50px;
    margin-right: 10px;
    margin-top: 6px;
    width: 100%;
    height: 100%;
    margin-bottom: 8px;
  }
  
  /* ----------- TIMELINE CONTAINER ------------ */
  .timeline-container {
    width: 100%;
  }

  /* ----------- TIMELINE GRID ------------ */
  .timeline-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* ----------- TIMELINE ITEM ------------ */
  .timeline-item {
    position: relative;
    max-height: 1400px;
    height: 100%;
    margin-bottom: 4rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    transition: all 0.4s ease;
  }

  .timeline-item:nth-child(odd):hover {
    transform: scale(1.03);
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--vegas-gold, rgb(197, 255, 65));
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .timeline-item:nth-child(even):hover {
    transform: scale(1.03);
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--orange);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* ----------- SPAN STYLING (now applied to all spans in timeline items) ------------ */
  .timeline-item span {
    display: inline-block;
    background: rgba(255, 215, 0, 0.2);
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1.15rem;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
    transition: all 0.3s ease;
  }

  .timeline-item:hover span {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  }

  /* ----------- ITEM TITLE (h4) ------------ */
  .timeline-item-title {
    font-size: 1.6rem;
    line-height: 1.3;
    margin-bottom: 0.8rem;
    font-weight: 800;
    color: var(--white, #fff);
    background: white;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .timeline-text {
    color: var(--light-gray, #ccc);
    font-weight: 300;
    line-height: 1.8;
    margin: 0;
    margin-top: 5px;
    font-size: 1.4rem;
  }

  /* ----------- RESPONSIVE ------------ */
  @media (max-width: 960px) {
    .timeline-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .timeline-grid {
      grid-template-columns: 1fr;
    }

    .timeline-item {
      width: 100%;
      padding: 1.5rem;
    }

    .timeline-item-title {
      font-size: 1.4rem;
    }

    .timeline-item span {
      padding: 0.4rem 1rem;
      font-size: 1.1rem;
    }

    .timeline-text {
      font-size: 1.3rem;
    }
  }
`;

export const SectionTitle = styled.h1`
  color: white;
  margin-top: 3rem;
  font-size: 4rem;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    height: 0.4rem;
    background-color: rgb(197, 255, 65);
    width: 60%;
    margin: 0.4rem auto 0;
    border-radius: 2px;
  }
`;
