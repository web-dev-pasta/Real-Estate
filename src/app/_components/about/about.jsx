import Footer from "@/components/footer";
import AboutAchievements from "./achievements";
import AboutClients from "./clients";
import AboutHero from "./hero";
import AboutNavigating from "./navigating";
import AboutTeam from "./team";
import AboutValues from "./values";
import CallToAction from "@/components/cta";

function About() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutAchievements />
      <AboutNavigating />
      <AboutTeam />
      <AboutClients />
      <CallToAction />
      <Footer />
    </>
  );
}

export default About;
