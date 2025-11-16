import React from "react";
import Image from "next/image";
import Button from "@/components/button";
import Box from "@/components/box";
import CircularText from "@/components/circular-text";
function Hero() {
  let boxes = [
    { number: 200, text: "Happy Customers" },
    { number: "10k", text: "Properties For Clients" },
    { number: "16", text: "Years of Experience" },
  ];
  return (
    <div className="grid grid-cols-2 max-laptop:gap-15 gap-20 bg-gray-08 min-h-[calc(100vh-100px)] max-laptop:min-h-[calc(100vh-76px)] items-center relative max-lg:grid-cols-1 max-lg:px-4 max-lg:pt-9">
      <div className="max-lg:pl-0 pl-40 text-white flex flex-col gap-[60px] max-laptop:gap-[50px] max-laptop:pl-20 max-lg:order-1 max-lg:gap-10 max-lg:pb-10">
        <div className="flex flex-col gap-6 max-laptop:gap-5">
          <h1 className="text-white max-laptop:text-[46px] text-6xl font-semibold leading-tight max-sm:text-[28px]">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="gray_text">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>
        <div className="flex gap-5 items-center max-lg:flex-col max-lg:gap-3">
          <Button
            label="Learn More"
            color="black"
            className="max-lg:w-full max-lg:text-center"
          />
          <Button
            label="Browse Properties"
            color="purble"
            className="max-lg:w-full max-lg:text-center"
          />
        </div>
        <div className="flex gap-5 flex-wrap max-laptop:gap-4">
          {boxes.map(({ number, text }, i) => (
            <Box key={i} number={number} text={text} className="flex-1" />
          ))}
        </div>
      </div>
      <div className="relative bg-gray-10 h-full flex items-end max-lg:order2 max-lg:justify-center rounded-xl max-lg:border max-lg:border-gray-15">
        <div
          className="[-webkit-mask-image:linear-gradient(20deg,#0000_5%,#000_60%)]
 absolute pointer-events-none inset-0 bg-[url('/assets/images/background_2.svg')] opacity-40 bg-center"
        ></div>
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(240deg, #2A213F 6%, rgba(25,25,25,0) 49%)",
          }}
        ></div>

        <Image
          src="/assets/images/hero.png"
          className="relative z-10 object-cover h-11/12 max-xl:h-3/4 max-lg:object-contain max-sm:h-full max-sm:object-cover"
          alt="hero-image"
          width={910}
          height={814}
        />
        <div className="absolute top-30 -left-25 p-2 border rounded-full border-gray-15 bg-gray-08 z-10 max-lg:-bottom-15 max-lg:-left-px max-lg:top-[initial]">
          <div className="absolute top-1/2 left-1/2 transform -translate-1/2 text-white w-20 h-20 max-laptop:w-15 max-laptop:h-15">
            <img src="/assets/images/arrowShape.svg" alt="arrow-shape" />
          </div>
          <CircularText
            text="Discover Your Dream Property "
            spinDuration={20}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
