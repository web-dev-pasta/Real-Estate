import React from "react";
import Button from "../button";

function ClientsBox({ date, title, domain, category, comment }) {
  return (
    <div className="p-12.5 flex flex-col gap-10 rounded-xl border border-gray-15 relative h-full justify-between">
      <div className="flex items-center gap-7.5">
        <div className="flex flex-col gap-1.5 flex-1">
          <p className="gray_text">Since {date}</p>
          <p className="font-semibold text-3xl max-laptop:text-2xl leading-normal text-white max-sm:text-[20px]">
            {title}
          </p>
        </div>
        <div className="button">
          <Button color="gray">Visit Website</Button>
        </div>
      </div>
      <div className="flex items-center gap-15">
        <div className="flex flex-col gap-2 relative flex-1">
          <div className="flex items-center gap-1.5">
            <img src="/assets/images/appIcon.svg" alt="app-icon" />
            <p className="gray_text">Domain</p>
          </div>
          <p className="font-medium text-white text-xl">{domain}</p>
          <div className="absolute h-full w-px bg-gray-15 z-10 -right-7.5 " />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-1.5">
            <img src="/assets/images/electricIcon.svg" alt="electric-icon" />
            <p className="gray_text">Category</p>
          </div>
          <p className="font-medium text-white text-xl">{category}</p>
        </div>
      </div>
      <div className="rounded-xl border border-gray-15 p-7.5 space-y-3.5">
        <p className="gray_text">What They Said 🤗</p>
        <p className="text-white font-medium text-lg">{comment}</p>
      </div>
    </div>
  );
}

export default ClientsBox;
