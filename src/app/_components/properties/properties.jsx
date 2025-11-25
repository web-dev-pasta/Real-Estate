import CallToAction from "@/components/cta";
import PropertiesForm from "./form";
import PropertiesHero from "./hero";
import PropertiesPossibilities from "./possibilities";
import Footer from "@/components/footer";

function Properties() {
  return (
    <>
      <PropertiesHero />
      <PropertiesPossibilities />
      <PropertiesForm />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Properties;
