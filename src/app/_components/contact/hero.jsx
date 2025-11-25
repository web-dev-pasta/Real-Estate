import FeatureIconsSection from "../home/feature-icons";
function Hero() {
  const contactFeatures = [
    {
      icon: "/assets/images/contactOne.svg",
      label: "info@estatein.com",
    },
    {
      icon: "/assets/images/contactTwo.svg",
      label: "+1(123)456-7890",
    },
    {
      icon: "/assets/images/contactThree.svg",
      label: "Main Headquarters",
    },
    {
      icon: "/assets/images/contactFour.svg",
      label: ["Instagram", "Linkedin", "Facebook"],
    },
  ];

  return (
    <section className="mb-37.5 max-laptop:mb-30 max-md:mb-20">
      <div className="relative">
        <div className="max_container pt-37.5 pb-25 flex flex-col gap-3.5 max-laptop:pt-25 max-laptop:pb-25 max-laptop:gap-2.5 max-md:py-12.5">
          <p className="large_text">Get in Touch with Estatein</p>
          <p className="gray_text max-w-[1358px] max-laptop:max-w-[1160px]">
            Welcome to Estatein's Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to buy or sell a property, explore investment opportunities,
            or simply want to connect, we're just a message away. Reach out to
            us, and let's start a conversation.
          </p>
        </div>
        <div className="absolute bg-[linear-gradient(120deg,rgba(38,38,38,1)_0%,rgba(38,38,38,0)_53%)] w-full h-full -z-10 top-0 -left-[300px] max-lg:left-0"></div>
      </div>
      <FeatureIconsSection
        servicesDiv={true}
        contactFeatures={contactFeatures}
      />
    </section>
  );
}

export default Hero;
