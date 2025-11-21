import React from "react";
import stars from "@/../public/assets/images/stars.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
function SpecialHeading({ title, description, imageClass = "" }) {
  return (
    <div className="text flex flex-col gap-3.5 max-laptop:gap-2.5 max-sm:gap-1.5 relative">
      <div
        className={cn(
          "absolute w-[68px] h-7.5 -top-10 -left-5 max-large:left-0 max-laptop:left-1.5 max-laptop:-top-7.5 max-laptop:w-[54px]",
          imageClass
        )}
      >
        <Image src={stars} alt="stars" width="auto" height="auto" />
      </div>
      <h2 className="text-5xl font-semibold text-white max-laptop:text-[38px] leading-normal max-sm:text-[28px]">
        {title}
      </h2>
      <p className="gray_text max-w-[1200px] max-laptop:max-w-[975px]">
        {description}
      </p>
    </div>
  );
}

export default SpecialHeading;
