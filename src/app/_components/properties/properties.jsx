import CallToAction from "@/components/cta";
import PropertiesForm from "./properties-form";
import PropertiesHero from "./properties-hero";
import PropertiesPossibilities from "./properties-possibilities";
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
