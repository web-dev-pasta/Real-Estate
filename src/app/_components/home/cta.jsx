import Button from "@/components/button";
import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <div className="py-25 max-laptop:py-15 border-y border-gray-15 relative overflow-hidden max-md:py-12.5">
      <div className="max-w-container mx-auto max-large:px-4 text-white flex gap-[250px] max-laptop:gap-[150px] items-center max-md:flex-col max-md:gap-7.5">
        <div className="text space-y-3.5">
          <p className="text-5xl font-semibold text-white max-laptop:text-[38px] leading-normal max-sm:text-[28px]">
            Start Your Real Estate Journey Today
          </p>
          <p className="gray_text">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>
        <Button
          className="whitespace-nowrap max-sm:w-full text-center"
          color="purple"
        >
          Explore Properties
        </Button>
      </div>
      <div className="absolute max-md:hidden bottom-0 -left-[19px] -z-10 max-laptop:left-0 max-laptop:w-[474] max-laptop:h-[258]">
        <img
          src="/assets/images/abstractDesignLeft.svg"
          alt="left-background"
          className="max-lg:[-webkit-mask-image:linear-gradient(to_top,#000_60%,transparent_100%)] 
               max-lg:mask-[linear-gradient(to_top,#000_60%,transparent_100%)]"
        />
      </div>
      <div className="absolute max-md:hidden -right-[92px] -bottom-[63px] -z-10 max-laptop:w-[569px] max-laptop:h-[310px] max-laptop:-bottom-[21px] max-lg:top-0 max-lg:bottom-[initial]">
        <img
          src="/assets/images/abstractDesignRight.svg"
          alt="right-background"
          className="max-lg:[-webkit-mask-image:linear-gradient(to_bottom,#000_60%,transparent_100%)] 
               max-lg:mask-[linear-gradient(to_bottom,#000_60%,transparent_100%)]"
        />
      </div>
      <div className="absolute -z-10 md:hidden top-0 -left-[21px]">
        <img src="/assets/images/abstractDesignTop.svg" alt="top-background" />
      </div>
      <div className="absolute -z-10 md:hidden bottom-0 right-0">
        <img
          src="/assets/images/abstractDesignBottom.svg"
          alt="bottom-background"
        />
      </div>
    </div>
  );
}

export default CallToAction;
