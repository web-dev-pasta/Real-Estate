import React from "react";
import FeatureIconsSection from "../home/feature-icons";

function Hero() {
  return (
    <section className="mb-37.5 max-laptop:mb-30 max-md:mb-20">
      <div className="relative">
        <div className="max_container pt-37.5 pb-25 flex flex-col gap-3.5 max-laptop:pt-25 max-laptop:pb-25 max-laptop:gap-2.5 max-md:py-12.5">
          <p className="large_text">Elevate Your Real Estate Experience</p>
          <p className="gray_text max-w-[1358px] max-laptop:max-w-[1160px]">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs and dreams.
          </p>
        </div>
        <div className="absolute bg-[linear-gradient(120deg,rgba(38,38,38,1)_0%,rgba(38,38,38,0)_53%)] w-full h-full -z-10 top-0 -left-[300px] max-lg:left-0"></div>
      </div>
      <FeatureIconsSection servicesDiv={true} />
    </section>
  );
}

export default Hero;
