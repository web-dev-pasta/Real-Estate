"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function CustomLink({ href, label, forceActive }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-white text-lg max-laptop:text-sm font-medium ${
        forceActive ? `max-laptop:py-3.5 py-4` : `max-laptop:py-3 py-3.5`
      } rounded-[10px] border border-transparent transition-all duration-300 ${
        pathname === href || forceActive
          ? "border-gray-15! bg-gray-08 px-6 max-laptop:px-5"
          : ""
      } ${
        pathname === "/contact" && href === "/contact"
          ? "bg-purple-60 border-transparent!"
          : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default CustomLink;
