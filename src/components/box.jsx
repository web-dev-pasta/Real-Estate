import React from "react";

function Box({ number, text, className }) {
  return (
    <div
      className={`${className} bg-gray-10 border border-gray-15 flex flex-col gap-0.5 py-4 px-6 rounded-xl max-laptop:px-5 max-laptop:py-3.5 max-lg:gap-0 max-lg:items-center max-lg:p-4`}
    >
      <span className="text-white font-bold text-[40px] max-laptop:text-[30px] max-lg:text-[24px]">{number}+</span>
      <span className="font-medium text-lg text-gray-09 max-laptop:text-[16px] whitespace-nowrap max-lg:text-sm">{text}</span>
    </div>
  );
}

export default Box;
