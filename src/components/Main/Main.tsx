
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Education } from "../Education/Education";
import { Experience } from "../Experience/Experience";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Certifications } from "../Certifications/certifications";
import { Skills } from "../Skills/Skills";
import { SWOT } from "../Swot/Swot";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Experience></Experience>
      <Certifications></Certifications>
      <Skills></Skills>
      <Project></Project>
      <SWOT></SWOT>
      <Contact></Contact>
    </Container>
  );
}