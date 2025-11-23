import React from "react";
import Button from "../button";

function ClientsBox({ date, title, domain, category, comment }) {
  const data = [
    { image: "/assets/images/appIcon.svg", label: "Domain", text: domain },
    {
      image: "/assets/images/electricIcon.svg",
      label: "Category",
      text: category,
    },
  ];
  return (
    <div className="p-2 rounded-xl bg-gray-10 max-sm:p-1.5">
      <div className="p-12.5 max-laptop:p-10 max-sm:p-6 bg-gray-08 flex flex-col gap-10 max-laptop:gap-7.5 rounded-xl border border-gray-15 relative h-full justify-between max-sm:gap-7.5">
        <div className="flex sm:items-center gap-7.5 max-laptop:gap-5 max-sm:flex-col max-sm:gap-5">
          <div className="flex flex-col gap-1.5 flex-1 max-laptop:gap-1">
            <p className="gray_text">Since {date}</p>
            <p className="font-semibold text-3xl max-laptop:text-2xl leading-normal text-white max-sm:text-[20px]">
              {title}
            </p>
          </div>
          <Button color="gray" className="max-sm:text-center">
            Visit Website
          </Button>
        </div>
        <div className="flex items-center gap-15 max-laptop:gap-10 max-sm:gap-8">
          {data.map(({ image, label, text }, i) => (
            <div
              className="flex flex-col gap-2 max-laptop:gap-1.5 relative flex-1"
              key={i}
            >
              <div className="flex items-center gap-1.5 max-laptop:gap-1">
                <img
                  src={image}
                  className="max-laptop:w-5 aspect-square"
                  alt={label}
                />
                <p className="gray_text">{label}</p>
              </div>
              <p className="font-medium text-white text-xl max-laptop:text-[16px] max-sm:text-sm">
                {text}
              </p>
              {i === 0 && (
                <div className="absolute h-full w-px bg-gray-15 z-10 -right-7.5 max-laptop:-right-5 max-sm:-right-4" />
              )}
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-gray-15 p-7.5 max-laptop:p-6 space-y-3.5 max-laptop:space-y-2.5 max-sm:p-5 max-sm:space-y-2">
          <p className="gray_text">What They Said 🤗</p>
          <p className="text-white font-medium text-lg max-laptop:text-[16px] max-sm:text-sm">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientsBox;
