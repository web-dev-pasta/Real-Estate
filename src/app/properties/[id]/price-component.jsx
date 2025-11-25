import { cn } from "@/lib/utils";
import React from "react";

function PriceComponent({
  title,
  aside,
  body,
  className,
  rightBorder = false,
  rightBorderClass,
  asideClass,
  roundedClass,
}) {
  return (
    <div
      className={cn("flex flex-col gap-4 relative max-md:gap-2.5", className)}
    >
      <p className="gray_text">{title}</p>
      <div className="flex gap-4 items-center max-md:gap-3">
        <p className={cn("semi_bold_font", asideClass)}>{aside}</p>
        {body && (
          <div
            className={cn(
              "py-2 px-3.5 max-laptop:py-1.5 max-laptop:px-3 rounded-[28px] bg-gray-10 border border-gray-15 max-md:rounded-md",
              roundedClass
            )}
          >
            <p className="text-gray-09 font-medium text-lg leading-normal max-laptop:text-sm">
              {body}
            </p>
          </div>
        )}
      </div>
      {rightBorder && (
        <div
          className={cn(
            "absolute inset-y-0 w-px bg-gray-15 max-md:hidden",
            rightBorderClass
          )}
        />
      )}
    </div>
  );
}

export default PriceComponent;
