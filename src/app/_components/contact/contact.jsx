import React from "react";
import Hero from "./hero";
import ContactForm from "./form";
import Discover from "./discover";
import CallToAction from "@/components/cta";
import Footer from "@/components/footer";
import World from "./world";

function Contact() {
  return (
    <>
      <Hero />
      <ContactForm />
      <Discover />
      <World />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Contact;
