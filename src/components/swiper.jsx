import { cn } from "@/lib/utils";
import React from "react";
import Button from "./button";
import buttonLeft from "@/../public/assets/images/buttonLeft.svg";
import buttonRight from "@/../public/assets/images/buttonRight.svg";
import stars from "@/../public/assets/images/stars.svg";
import Image from "next/image";

function Swiper({
  children,
  className,
  header,
  description,
  buttonText,
  hiddenText = "",
}) {
  return (
    <div
      className={cn(
        "mt-37.5 max-laptop:mt-30 max-sm:mt-20 max-w-container mx-auto relative max-large:px-4",
        className
      )}
    >
      <div className="absolute w-[68px] h-7.5 -top-10 -left-5 max-large:left-0 max-laptop:left-1.5 max-laptop:-top-7.5 max-laptop:w-[54px]">
        <Image src={stars} alt="stars" className="w-full h-full" />
      </div>
      <div className="header flex items-end justify-between gap-50 max-laptop:gap-[150px] mb-20 max-laptop:mb-15 max-sm:mb-10">
        <div className="text flex flex-col gap-3.5 max-laptop:gap-2.5 max-sm:gap-1.5">
          <h2 className="text-5xl font-semibold text-white max-laptop:text-[38px] leading-normal max-sm:text-[28px]">
            {header}
          </h2>
          <p className="gray_text max-w-[1200px] max-laptop:max-w-[975px]">
            {description}
            {hiddenText && <span className="max-sm:hidden">{hiddenText}</span>}
          </p>
        </div>
        <Button
          color="gray"
          className="whitespace-nowrap max-md:hidden"
          label={buttonText}
        />
      </div>
      <div>{children}</div>
      <div className="flex justify-between border-t border-gray-15 pt-5 max-md:hidden">
        <div className="text-[20px] max-laptop:text-[16px]">
          <span className="text-white">01 </span>
          <span className="text-gray-09">of 10</span>
        </div>
        <div className="buttons flex gap-2.5">
          <div className="left aspect-square w-[58px] max-laptop:w-11">
            <Image
              src={buttonLeft}
              className="w-full h-full"
              alt="left-arrow"
            />
          </div>
          <div className="right aspect-square w-[58px] max-laptop:w-11">
            <Image
              src={buttonRight}
              className="w-full h-full"
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-15 pt-4 gap-3 max-tiny-mobile:flex-col items-center md:hidden">
        <Button color="gray" className="whitespace-nowrap" label={buttonText} />
        <div className="pagination flex items-center gap-2.5">
          <div className="aspect-square w-[58px] max-laptop:w-11">
            <Image
              src={buttonLeft}
              className="w-full h-full"
              alt="left-arrow"
            />
          </div>
          <p className="text-white text-sm">
            01 <span className="text-gray-09">of 60</span>
          </p>
          <div className="aspect-square w-[58px] max-laptop:w-11">
            <Image
              src={buttonRight}
              className="w-full h-full"
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swiper;
