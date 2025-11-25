import React from "react";
import Hero from "./hero";
import Value from "./value";
import Management from "./management";
import Decisions from "./decisions";
import CallToAction from "@/components/cta";
import Footer from "@/components/footer";

function Services() {
  return (
    <>
      <Hero />
      <Value />
      <Management />
      <Decisions />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Services;
