import React from "react";
import Image from "next/image";
import Button from "./button";

function PropertiesCard({ image, price, data, title, description }) {
  const props = {
    1: {
      label: "Bedroom",
      src: "/assets/images/bedIcon.svg",
      alt: "bed-icon",
    },
    2: {
      label: "Bathroom",
      src: "/assets/images/bathIcon.svg",
      alt: "bath-icon",
    },
    3: {
      label: "Villa",
      src: "/assets/images/villaIcon.svg",
      alt: "villa-icon",
    },
    4: {
      label: "Home",
      src: "/assets/images/homeIcon.svg",
      alt: "home-icon",
    },
  };
  return (
    <div className="bg-gray-08 border border-gray-15 rounded-[10px] p-10 max-laptop:p-7.5 flex flex-col gap-7.5 max-laptop:gap-5 h-full max-sm:p-6 max-sm:gap-4">
      <div className="image overflow-hidden rounded-[10px] h-80 max-laptop:h-[255px] max-sm:h-[210px] ">
        <Image
          src={image}
          alt="properties-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col max-laptop:gap-6 gap-7.5 max-sm:gap-5">
        <div className="text space-y-1.5 max-laptop:space-y-1">
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
        <div className="custom-scroll flex items-center gap-2.5 sm:overflow-auto sm:whitespace-nowrap pb-3 max-sm:flex-wrap">
          {data.map(({ id, number }, i) => (
            <div
              className="border border-gray-15 bg-gray-10 text-white py-2 px-3.5 flex items-center gap-1 w-fit rounded-[28px] shrink-0 max-laptop:py-1.5 max-laptop:px-3.5 max-laptop:gap-1.5"
              key={i}
            >
              <img
                src={props[id].src}
                alt={props[id].alt}
                className="max-laptop:w-5"
              />
              <span className="leading-normal text-lg font-medium max-laptop:text-sm">
                {number && number + "-"}
                {props[id].label}
              </span>
            </div>
          ))}
        </div>
        <div className="price flex items-center gap-12.5 max-sm:gap-7.5 max-tiny-mobile:flex-col max-tiny-mobile:gap-2.5!">
          <div className="flex flex-col gap-0.5 max-tiny-mobile:items-center">
            <span className="gray_text max-laptop:text-[14px]">Price</span>
            <span className="semi_bold_font">${price}</span>
          </div>
          <Button color="purble" className="w-full text-center">
            View Property Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PropertiesCard;
