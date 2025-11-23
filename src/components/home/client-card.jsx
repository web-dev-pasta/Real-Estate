import React from "react";
import rate from "@/../public/assets/images/rate.svg";
import Image from "next/image";

function ClientCard({ title, description, image, alt, name, location }) {
  return (
    <div className="rounded-xl border border-gray-15 p-12.5 max-laptop:p-10 max-sm:p-7.5 flex flex-col gap-10 max-laptop:gap-7.5 h-full max-sm:gap-6">
      <div className="stars flex gap-2.5 max-laptop:gap-2">
        {new Array(5).fill(0).map((_, i) => (
          <div
            key={i}
            className="w-11 h-11 max-laptop:w-[38px] max-laptop:h-9 max-sm:h-7.5 max-sm:w-7.5 flex justify-center items-center bg-gray-10 border border-gray-15 rounded-full"
          >
            <Image
              src={rate}
              alt="star-rate"
              className="w-6 h-6 max-laptop:w-5 max-laptop:h-5 max-sm:w-4.5 max-sm:h-4.5"
            />
          </div>
        ))}
      </div>
      <div className="text flex flex-col gap-2.5 flex-1   ">
        <div>
          <p className="semi_bold_font">{title}</p>
        </div>
        <div className="description">
          <p className="gray_text text-white">{description}</p>
        </div>
      </div>
      <div className="user flex items-center gap-2.5">
        <div className="w-12.5 aspect-square rounded-full overflow-hidden">
          <Image src={image} alt={alt} />
        </div>
        <div className="data">
          <p className="leading-normal font-medium text-xl max-laptop:text-[18px] text-white">
            {name}
          </p>
          <p className="gray_text">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
