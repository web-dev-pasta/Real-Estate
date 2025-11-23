import { cn } from "@/lib/utils";
import React from "react";
import Button from "./button";

import stars from "@/../public/assets/images/stars.svg";
import Image from "next/image";

function SwiperComponent({
  children,
  className,
  header,
  description,
  buttonText,
  hiddenText = "",
}) {
  return (
    <section
      className={cn(
        "mt-37.5 max-laptop:mt-30 max-sm:mt-20 max-w-container max-laptop:max-w-7xl mx-auto relative max-large:px-4",
        className
      )}
    >
      <div className="absolute w-[68px] h-7.5 -top-10 -left-5 max-large:left-0 max-laptop:left-1.5 max-laptop:-top-7.5 max-laptop:w-[54px]">
        <Image src={stars} alt="stars" width="auto" height="auto" />
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
        {buttonText && (
          <Button color="gray" className="whitespace-nowrap max-md:hidden">
            {buttonText}
          </Button>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default SwiperComponent;
