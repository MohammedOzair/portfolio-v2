import styled from "styled-components";
import background from "../../assets/experience_background.jpg"; 

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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  --green: rgb(197, 255, 65);
  --orange: rgb(244, 108, 56);
  header {
  text-align: center;
  margin-bottom: 4rem;

  h1 {
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

      /* ----------- TIMELINE BASE ------------ */
  .timeline {
    position: relative;
    width: 100%;
    max-width: 1600px;
    margin-bottom: 30px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    transform: translateX(-50%);
    z-index: 1;
  }

  .timeline-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .timeline-item {
    position: relative;
    width: 100%;
    margin-bottom: 4rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    transition: all 0.4s ease;
  }

  .timeline-item:hover {
    transform: scale(1.03);
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--vegas-gold, rgb(197, 255, 65));
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .logoname{
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .logoimage{
    max-width: 50px;
    max-height: 50px;
    width: 100%;
    height: 100%;
    margin-bottom: 8px;
  }
  .logoimagee{
   border-radius:50%;
    margin-right: 10px;
    margin-top: 10px;
    max-width: 50px;
    max-height: 50px;
    width: 100%;
    height: 100%;
    margin-bottom: 8px;
  }

  /* ----------- ITEM TITLE (h4) ------------ */
  .item-title {
    font-size: 1.9rem; /* 👈 School/Institute Name */
    line-height: 1.3;
      font-family: "Outfit", sans-serif;
    margin-bottom: 0.8rem;
    font-weight: 800;
    color: var(--white, #fff);
    background: white;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .timeline-list span {
    display: inline-block;
    font-family: "Outfit", sans-serif;
    background: rgba(255, 215, 0, 0.2);
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 1.15rem;
    margin-bottom: 1rem;
    margin-left:60px;
    letter-spacing: 0.5px;
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
    transition: all 0.3s ease;
  }

  .timeline-item:hover span {
    transform: translateY(-2px);
    font-family: "Outfit", sans-serif;
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
  }

  .timeline-text {
    color: var(--light-gray, #ccc); /* 👈 Paragraph text */
    font-weight: 300;
    font-family: "Outfit", sans-serif;
    line-height: 1.8;
    margin: 0;
    margin-left:63px;
    margin-top: 5px;
    font-size: 1.4rem;
  }

  /* ----------- RESPONSIVE ------------ */
  @media (max-width: 960px) {
    padding: 0 1rem;

    header h2 {
      font-size: 3rem;
      font-family: "Outfit", sans-serif;
    }

    .timeline::before {
      left: 30px;
      transform: none;
      font-family: "Outfit", sans-serif;
    }

    .timeline-item {
      align: center;
      width: 100%;
    }

    .timeline-item::before {
      left: -50px !important;
      right: auto !important;
    }

    .timeline-item::after {
      left: -24px !important;
      right: auto !important;
      border-left-color: rgba(255, 255, 255, 0.1) !important;
      border-right-color: transparent !important;
    }

    .timeline-item:hover::after {
      border-left-color: var(--vegas-gold, #C5B358) !important;
      border-right-color: transparent !important;
    }
  }

  @media (max-width: 600px) {
    header h2 {
      font-size: 2.5rem;
      font-family: "Outfit", sans-serif;
    }

    .timeline-item {
      width: 100%;
      padding: 1.5rem;
    }

    .timeline-item::before {
      left: -40px !important;
      width: 50px;
      font-family: "Outfit", sans-serif;
      height: 50px;
      font-size: 1.4rem;
    }

    .timeline-item::after {
      left: -20px !important;
      border-width: 10px;
    }

    .timeline::before {
      left: 25px;
      font-family: "Outfit", sans-serif;
    }

    .timeline-item-title {
      font-size: 1.4rem;
      font-family: "Outfit", sans-serif;
    }

    .timeline-list span {
      padding: 0.4rem 1rem;
      font-family: "Outfit", sans-serif;
      font-size: 1.2rem;
    }

    .timeline-text {
      font-size: 1.3rem;
      font-family: "Outfit", sans-serif;
    }
  }
`;
