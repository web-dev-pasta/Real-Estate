import React from "react";
import Image from "next/image";
import heroImage from "@/../public/assets/images/hero-about.png";
import SpecialHeading from "@/components/special-heading";
import Box from "@/components/box";
function AboutHero() {
  let boxes = [
    { number: 200, text: "Happy Customers" },
    { number: "10k", text: "Properties For Clients" },
    { number: "16", text: "Years of Experience" },
  ];
  return (
    <section className="mb-37.5 max-laptop:mb-30 max-sm:mb-20 mt-25 max-laptop:mt-17.5 max-lg:mt-12.5 max-sm:gap-10 max_container flex items-center gap-20 max-laptop:gap-15 max-lg:flex-col-reverse">
      <div className="left flex-1 flex flex-col gap-20 py-[67px] max-laptop:gap-12.5 max-sm:gap-10 max-laptop:py-[55px] max-lg:py-0">
        <SpecialHeading
          title="Our Journey"
          description="Our story is one of continuous growth and evolution. We started as a
        small team with big dreams, determined to create a real estate platform
        that transcended the ordinary. Over the years, we've expanded our reach,
        forged valuable partnerships, and gained the trust of countless clients."
          imageClass="max-sm:-left-2"
        />
        <div className="flex gap-5 flex-wrap max-laptop:gap-4">
          {boxes.map(({ number, text }, i) => (
            <Box key={i} number={number} text={text} className="flex-1" />
          ))}
        </div>
      </div>
      <div className="right flex-1 rounded-[10px] overflow-hidden border border-gray-15 relative">
        <Image src={heroImage} alt="hero-about" />
        <div className="absolute inset-0 -z-10 opacity-20 max-lg:hidden">
          <Image
            src="/assets/images/aboutAbstractDesign.svg"
            className="bg-cover"
            fill
            alt="background-image"
          />
        </div>
        <div className="absolute inset-0 -z-10 opacity-20 lg:hidden ">
          <Image
            src="/assets/images/aboutMobileAbstractDesign.svg"
            className="bg-cover"
            fill
            alt="background-image"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
