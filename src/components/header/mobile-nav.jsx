"use client";

import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Image from "next/image";

function MobileNav() {
  const [active, setActive] = useState(false);
  const links = useSelector((state) => state.links.links);

  const allLinks = [
    ...links,
    {
      label: "Contact Us",
      link: "/contact",
    },
  ];
  const pathName = usePathname();
  return (
    <div className="md:hidden z-999">
      <button
        onClick={() => setActive((prev) => !prev)}
        className="flex justify-center items-center cursor-pointer"
      >
        <Image
          width={28}
          height={28}
          src="/assets/images/burgerIcon.svg"
          alt="burger-icon"
        />
      </button>

      <div
        className={`fixed bg-black/20 inset-0 transition-all duration-500 ${
          active ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed top-0 bottom-0 right-0 w-4/5 bg-gray-10 transform transition-all duration-500 z-10 rounded-l-2xl p-6 py-10 ${
          active ? "translate-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setActive(false)} className="cursor-pointer">
            <Image
              width={24}
              height={24}
              src="/assets/images/xIcon.svg"
              alt="x-icon"
            />
          </button>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          {allLinks.map(({ label, link }, i) => {
            return (
              <Link
                href={link}
                key={i}
                onClick={() => setActive(false)}
                className={`text-center border py-2 rounded-sm text-white border-gray-15 transition-all delay-500 ${
                  pathName === link ? "border-white/50" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
