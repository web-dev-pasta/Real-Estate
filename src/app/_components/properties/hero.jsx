import Button from "@/components/button";
import Image from "next/image";
import React from "react";

function PropertiesHero() {
  const data = [
    {
      image: "/assets/images/locationIcon.svg",
      alt: "location-icon",
      label: "Location",
    },
    {
      image: "/assets/images/propertyIcon.svg",
      alt: "property-icon",
      label: "Property Type",
    },
    {
      image: "/assets/images/pricingIcon.svg",
      alt: "pricing-icon",
      label: "Pricing Range",
    },
    {
      image: "/assets/images/sizeIcon.svg",
      alt: "size-icon",
      label: "Property Size",
    },
    {
      image: "/assets/images/yearIcon.svg",
      alt: "year-icon",
      label: "Build year",
    },
  ];

  return (
    <section className="relative mb-[307px] max-laptop:mb-[225px] max-[1210px]:mb-[303px] max-md:mb-20">
      <div className="border-b border-gray-15 relative">
        <div className="max_container pt-37.5 pb-40 flex flex-col gap-3.5 max-laptop:pt-25 max-laptop:pb-32.5 max-laptop:gap-2.5 max-md:py-12.5">
          <p className="large_text">Find Your Dream Property</p>
          <p className="gray_text max-w-[1358px] max-laptop:max-w-[1160px]">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
        <div className="absolute bg-[linear-gradient(120deg,rgba(38,38,38,1)_0%,rgba(38,38,38,0)_53%)] w-full h-full -z-10 top-0 -left-[300px] max-lg:left-0"></div>
      </div>
      <div className="max_container flex flex-col gap-2.5 max-laptop:gap-0.5 max-md:gap-5 md:absolute max-md:mt-10 z-10 top-full left-1/2 md:transform md:-translate-x-1/2 w-full md:-translate-y-[52px]  ">
        <div className="md:px-37">
          <div className="py-5 pl-6 pr-5 max-laptop:pl-5 max-laptop:py-4 max-laptop:pr-4 max-md:py-2.5 max-md:pr-2.5 max-md:pl-4.5 flex items-center max-md:rounded-xl rounded-t-xl gap-12.5 bg-gray-08 relative border border-gray-15">
            <div className="flex-1">
              <input
                placeholder="Search For A Property"
                className="font-medium placeholder:text-2xl max-laptop:placeholder:text-xl max-md:text-[16px] max-md:placeholder:text-[16px] leading-normal text-2xl max-laptop:text-xl text-gray-40 w-full"
              />
            </div>
            <Button
              className="flex items-center gap-2 max-md:rounded-lg"
              color="purple"
            >
              <Image
                width={24}
                height={24}
                src="/assets/images/searchIcon.svg"
                alt="search-icon"
                className="aspect-square max-laptop:w-5"
              />
              <p className="max-md:hidden text-lg text-white max-laptop:text-sm">
                Find Property
              </p>
            </Button>
            <div className="absolute max-md:w-[calc(100%+8px)] max-md:h-[calc(100%+8px)] w-[calc(100%+20px)] h-[calc(100%+22px)] -top-2.5 -left-2.5 max-md:-top-1 max-md:-left-1 bg-gray-10 -z-10 max-md:rounded-xl rounded-t-xl" />
          </div>
        </div>
        <div className="grid grid-cols-5 p-2.5 gap-5 bg-gray-10 rounded-xl items-center max-[1210px]:grid-cols-3 max-md:grid-cols-1 max-md:p-5">
          {data.map(({ image, alt, label }, i) => (
            <div
              key={i}
              className={`border border-gray-15 rounded-xl max-laptop:rounded-lg p-5 max-laptop:py-3 max-laptop:px-3.5 flex items-center gap-12.5 max-laptop:gap-5 bg-gray-08 ${
                i === 2 && `max-[1210px]:row-span-2`
              }`}
            >
              <div className="flex-1 flex gap-5 items-center max-md:gap-4">
                <div className="image-wrapper relative">
                  <Image
                    width={24}
                    height={24}
                    src={image}
                    alt={alt}
                    className="max-md:w-5 max-md:h-5"
                  />
                  <div className="absolute inset-y-0 w-px bg-gray-15 -right-2.5 max-laptop:-right-2"></div>
                </div>
                <p className="gray_text max-laptop:text-sm whitespace-nowrap">
                  {label}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-10">
                <Image
                  width={24}
                  height={24}
                  src="/assets/images/arrowDown.svg"
                  alt="arrow-down"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertiesHero;
