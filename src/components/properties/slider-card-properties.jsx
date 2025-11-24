import React from "react";
import Image from "next/image";
import Button from "../button";

function SliderCardProperties({
  id,
  image,
  price,
  title,
  description,
  noData,
}) {
  return (
    <div className="bg-gray-08 border border-gray-15 rounded-[10px] p-10 max-laptop:p-7.5 flex flex-col gap-7.5 max-laptop:gap-5 h-full max-sm:p-6 max-sm:gap-4">
      <div className="image overflow-hidden rounded-[10px] h-80 max-laptop:h-[255px] max-sm:h-[210px] ">
        <Image
          src={image}
          alt="properties-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col max-laptop:gap-6 gap-7.5 max-sm:gap-5 flex-1 justify-between">
        <div className="flex flex-col gap-5 max-laptop:gap-4">
          <p className="py-2 px-3.5 max-laptop:py-1.5 max-laptop:px-3 rounded-[28px] text-white text-lg max-laptop:text-sm font-medium leading-normal border bg-gray-10 border-gray-15 w-fit">
            {noData}
          </p>
          <div className="space-y-1.5 max-laptop:space-y-1">
            <p className="text-white font-semibold text-2xl max-laptop:text-xl leading-normal!">
              {title}
            </p>
            <p
              className="gray_text line-clamp-2 max-sm:line-clamp-none"
              title={description}
            >
              {description}
            </p>
          </div>
        </div>

        <div className="price flex items-center gap-12.5 max-[1210px]:gap-7.5 max-tiny-mobile:flex-col max-tiny-mobile:gap-2.5!">
          <div className="flex flex-col gap-0.5 max-tiny-mobile:items-center">
            <span className="gray_text max-laptop:text-[14px]">Price</span>
            <span className="semi_bold_font">${price}</span>
          </div>
          <Button
            color="purple"
            className="w-full whitespace-nowrap text-center"
            link={`/properties/${id}`}
          >
            View Property Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SliderCardProperties;
