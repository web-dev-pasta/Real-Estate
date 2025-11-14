import React from "react";
import HeaderLinks from "./header-links";
import CustomLink from "./custom-link";
import Link from "next/link";
import MobileNav from "./mobile-nav";

function NavigationBar() {
  return (
    <header className="border-y border-gray-15 py-5 bg-gray-10 max-laptop:py-3.5 max-md:py-5">
      <div className="max-laptop:max-w-[1440px] max-w-container w-full mx-auto flex items-center justify-between px-4">
        <Link href={"/"} className="logo max-laptop:w-[114px] max-md:w-[93px]">
          <img src="/assets/images/logo.svg" alt="" />
        </Link>
        <HeaderLinks />
        <div className="contact max-md:hidden">
          <CustomLink
            label={`Contact Us`}
            forceActive={true}
            href={`/contact`}
          />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}

export default NavigationBar;
