"use client";
import Link from "next/link";

function Button({ children, link = "", color, className }) {
  let usedColor;
  switch (color) {
    case "purple":
      usedColor = "bg-purple-60";
      break;
    case "black":
      usedColor = "bg-gray-08 border border-gray-15";
      break;
    case "gray":
      usedColor = "bg-gray-10 border border-gray-15";
      break;
  }
  const handleClick = (e) => {
    if (!link) {
      e.preventDefault();
      return;
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={link}
      className={`max-lg:text-sm max-lg:px-5 max-lg:py-3.5 px-6 py-4.5 max-laptop:text-sm font-medium text-lg text-white rounded-[10px] max-laptop:px-5 max-laptop:py-3.5 ${usedColor} ${
        className || ""
      }`}
    >
      {children}
    </Link>
  );
}

export default Button;
