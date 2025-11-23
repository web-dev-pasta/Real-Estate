import { cn } from "@/lib/utils";
import React from "react";

function FormInput({
  label,
  placeholder,
  id,
  fill = false,
  className,
  imageClass,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 justify-end max-laptop:gap-3.5",
        className
      )}
    >
      <p className="text-xl font-semibold text-white max-laptop:text-[16px]">
        {label}
      </p>
      <div
        className={`wrapper px-5 ${
          !id ? `py-6` : `py-5.5`
        } max-laptop:py-4 max-laptop:px-5 border border-gray-15 bg-gray-10 rounded-lg flex justify-between items-center gap-3 h-17 max-laptop:h-13`}
      >
        {id === 2 && (
          <img
            src="/assets/images/phoneIcon.svg"
            alt="phone-icon"
            className={imageClass}
          />
        )}
        <input
          type="text"
          className="w-full flex-1 placeholder:text-gray-40 placeholder:text-lg text-lg max-laptop:text-sm max-laptop:placeholder:text-sm text-gray-40 leading-0"
          placeholder={placeholder}
        />
        {id === 2 && fill ? (
          <span className="inline-block w-4 aspect-square max-laptop:w-2.5 rounded-full bg-purple-60" />
        ) : id === 2 && !fill ? (
          <span className="w-4 aspect-square max-laptop:w-2.5 inline-block border border-purple-60 rounded-full" />
        ) : (
          ""
        )}
        {id === 1 && (
          <img
            src="/assets/images/arrowDown.svg"
            alt="arrow-down"
            className={imageClass}
          />
        )}
      </div>
    </div>
  );
}

export default FormInput;
