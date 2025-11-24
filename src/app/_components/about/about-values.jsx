import SpecialHeading from "@/components/special-heading";
import Image from "next/image";
import React from "react";

function AboutValues() {
  const data = [
    {
      title: "Trust",
      description:
        "Trust is the cornerstone of every successful real estate transaction.",
      image: "/assets/images/starIcon.svg",
      alt: "star-icon",
    },
    {
      title: "Excellence",
      description:
        "We set the bar high for ourselves. From the properties we list to the services we provide.",
      image: "/assets/images/excellenceIcon.svg",
      alt: "excellence-icon",
    },
    {
      title: "Client-Centric",
      description:
        "Your dreams and needs are at the center of our universe. We listen, understand.",
      image: "/assets/images/groupIcon.svg",
      alt: "group-icon",
    },
    {
      title: "Our Commitment",
      description:
        "We are dedicated to providing you with the highest level of service, professionalism.",
      image: "/assets/images/starIcon.svg",
      alt: "star-icon",
    },
  ];
  return (
    <section className="mb-37.5 max-laptop:mb-30 max-sm:mb-20 max_container flex gap-20 max-laptop:gap-15 max-lg:flex-col md:items-center max-md:gap-10 relative">
      <SpecialHeading
        title="Our Values"
        className="max-w-[517px] max-laptop:max-w-[413px] md:text-center lg:text-start"
        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
      />
      <div className="p-15 max-laptop:p-12.5 max-md:p-6 border rounded-xl border-gray-15 max-md:grid-rows-none relative grid grid-cols-2 grid-rows-2 gap-15 max-laptop:gap-12 max-md:grid-cols-1 max-md:gap-0">
        {data.map(({ title, description, image, alt }, i) => (
          <div
            className={`flex flex-col gap-5 max-laptop:gap-4 max-md:gap-3.5 md:justify-between relative max-md:py-5 ${
              i === 0 ? `pt-0!` : ``
            } ${i == 3 ? `pb-0!` : ` max-md:border-b border-gray-15`} `}
            key={i}
          >
            {i % 2 === 0 && (
              <div className="absolute inset-y-0 w-px bg-gray-15 -right-7.5 max-laptop:-right-6 max-md:hidden" />
            )}
            <div className="image flex gap-3.5 items-center max-laptop:gap-2.5 max-md:gap-2">
              <Image
                width={74}
                height={74}
                src={image}
                alt={alt}
                className="max-laptop:w-15 max-md:w-[52px]"
              />
              <p className="semi_bold_font">{title}</p>
            </div>
            <p className="gray_text">{description}</p>
          </div>
        ))}
        <div className="absolute w-[calc(100%+20px)] h-[calc(100%+20px)] bg-gray-10 rounded-xl -left-2.5 -top-2.5 -z-10 max-md:w-[calc(100%+12px)] max-md:h-[calc(100%+12px)] max-md:-top-1.5 max-md:-left-1.5"></div>
        <div className="absolute h-px bg-gray-15 top-1/2 left-15 w-[calc(100%-120px)] max-laptop:w-[calc(100%-100px)] max-laptop:left-12.5 max-md:w-[calc(100%-48px)] max-md:left-6 max-md:hidden" />
      </div>
    </section>
  );
}

export default AboutValues;
