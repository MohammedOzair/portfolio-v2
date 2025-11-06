import styled from 'styled-components';
import background from "../../assets/skills-background.jpg";
// TypeScript interfaces for props
interface ToggleButtonProps {
  active: boolean;
}

interface StatNumberProps {
  variant: 'green' | 'purple' | 'blue' | 'orange';
}

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
// Main container with gradient background
export const Container = styled.div`
  *{
    font-family: "Outfit", sans-serif;
  }
  width: 100%;
  min-height: 100vh;
  padding: 80px 20px;
  color: white;
  font-family: "Outfit", sans-serif;
  position: relative;
`;

// Content wrapper with max width
export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Header section
export const Header = styled.header`
  text-align: center;
  margin-bottom: 60px;
  
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
    background: rgb(197, 255, 65);
    border-radius: 2px;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
  }
`;

// View toggle container
export const ViewToggle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const ToggleContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 4px;
  display: flex;
  gap: 4px;
`;

export const ToggleButton = styled.button<ToggleButtonProps>`
  padding: 12px 24px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(255, 255, 255, 1)' : 'transparent'};
  color: ${props => props.active ? 'black' : 'rgba(255, 255, 255, 0.7)'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
  }
`;

// Marquee section
export const MarqueeSection = styled.div`
  margin-bottom: 80px;
  
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
    color: white;
  }
`;

export const MarqueeContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: none;
  border-radius: 20px;
  padding: 30px 0;
`;

export const MarqueeMaskLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100%;
  background: none;
  z-index: 10;
  pointer-events: none;
`;

export const MarqueeMaskRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 100%;
  background: none;
  z-index: 10;
  pointer-events: none;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const LogoSlide = styled.div`
  display: flex;
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;
  min-width: 100px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const LogoText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin: 0;
`;

// Category grid
export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const CategoryCard = styled.div`
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 15px;
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: white;
  }
  
  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
`;

// Detailed view
export const DetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const DetailedCategory = styled.div`
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  
  span {
    font-size: 2.5rem;
    margin-right: 20px;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin: 0;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

export const SkillTag = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 15px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
  
  span {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }
`;

// Stats section
export const StatsSection = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  text-align: center;
`;

export const StatCard = styled.div`
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled.div<StatNumberProps>`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${props => {
    switch (props.variant) {
      case 'green': return '#4ade80';
      case 'purple': return '#a855f7';
      case 'blue': return '#3b82f6';
      case 'orange': return '#f59e0b';
      default: return '#fff';
    }
  }};
`;

export const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
`;

// Mobile responsiveness
export const MobileStyles = `
  @media (max-width: 768px) {
    ${Container} {
      padding: 40px 15px;
    }
    
    ${Header} h1 {
      font-size: 2.5rem;
    }
    
    ${Header} p {
      font-size: 1rem;
    }
    
    ${MarqueeSection} h2 {
      font-size: 1.5rem;
    }
    
    ${LogoWrapper} {
      margin: 0 20px;
      min-width: 80px;
    }
    
    ${LogoContainer} {
      width: 60px;
      height: 60px;
    }
    
    ${LogoImage} {
      width: 35px;
      height: 35px;
    }
    
    ${CategoryGrid} {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    ${CategoryCard} {
      padding: 20px;
    }
    
    ${DetailedCategory} {
      padding: 25px;
    }
    
    ${CategoryHeader} h3 {
      font-size: 1.5rem;
    }
    
    ${SkillsGrid} {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
    
    ${StatsSection} {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }
`;