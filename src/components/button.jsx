import Link from "next/link";

function Button({ label, link = "", color, className }) {
  let usedColor;
  switch (color) {
    case "purble":
      usedColor = "bg-purple-60";
      break;
    case "black":
      usedColor = "bg-gray-08 border border-gray-15";
      break;
  }
  return (
    <Link
      href={link}
      className={`max-lg:text-sm max-lg:px-5 max-lg:py-3.5 px-6 py-4.5 max-laptop:text-sm font-medium text-lg text-white rounded-[10px] ${usedColor} ${className}`}
    >
      {label}
    </Link>
  );
}

export default Button;
