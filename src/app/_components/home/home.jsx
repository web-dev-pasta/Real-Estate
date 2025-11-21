import Footer from "@/components/footer";
import AskedQuestions from "./asked-questions";
import Clients from "./clients";
import CallToAction from "./cta";
import FeatureIconsSection from "./feature-icons";
import FeatureProperties from "./feature-properties";
import Hero from "./hero";

function Home() {
  return (
    <>
      <Hero />
      <FeatureIconsSection />
      <FeatureProperties />
      <Clients />
      <AskedQuestions />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
