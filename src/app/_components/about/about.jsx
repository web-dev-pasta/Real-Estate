import AboutAchievements from "./about-achievements";
import AboutClients from "./about-clients";
import AboutHero from "./about-hero";
import AboutNavigating from "./about-navigating";
import AboutTeam from "./about-team";
import AboutValues from "./about-values";

function About() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutAchievements />
      <AboutNavigating />
      <AboutTeam />
      <AboutClients />
    </>
  );
}

export default About;
