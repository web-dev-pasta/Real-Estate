import React from "react";
import Button from "../button";

function QuestionCard({ title, description }) {
  return (
    <div className="bg-gray-08 rounded-xl border border-gray-15 p-12.5 max-laptop:p-10 max-sm:p-7.5 flex flex-col gap-7.5 max-laptop:gap-6 max-sm:gap-5 h-full">
      <p className="semi_bold_font">{title}</p>
      <p className="gray_text flex-1">{description}</p>
      <Button
        color="gray"
        className="max-sm:w-full text-center w-fit font-medium text-[18px]"
      >
        Read More
      </Button>
    </div>
  );
}

export default QuestionCard;
