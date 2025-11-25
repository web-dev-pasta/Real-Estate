import React from "react";
import stars from "@/../public/assets/images/stars.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
function SpecialHeading({
  title,
  description,
  className,
  imageClass = "",
  grayClass = "",
  smallDescription = "",
}) {
  return (
    <div
      className={cn(
        "text flex flex-col gap-3.5 max-laptop:gap-2.5 max-sm:gap-2 relative",
        className
      )}
    >
      <div
        className={cn(
          "absolute w-[68px] h-7.5 -top-10 -left-5 max-large:left-0 max-laptop:left-1.5 max-laptop:-top-7.5 max-laptop:w-[54px]",
          imageClass
        )}
      >
        <Image src={stars} alt="stars" width="auto" height="auto" />
      </div>
      <h2 className="large_text">{title}</h2>
      <p
        className={cn(
          "gray_text max-w-[1200px] max-laptop:max-w-[975px]",
          grayClass,
          smallDescription && `max-sm:hidden`
        )}
      >
        {description}
      </p>
      <p className={cn("gray_text sm:hidden", grayClass)}>{smallDescription}</p>
    </div>
  );
}

export default SpecialHeading;
