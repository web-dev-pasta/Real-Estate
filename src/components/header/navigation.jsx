import React from "react";
import HeaderLinks from "./header-links";
import CustomLink from "./custom-link";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import Image from "next/image";

function NavigationBar() {
  return (
    <header className="border-y border-gray-15 py-5 bg-gray-10 max-laptop:py-3.5 max-md:py-5">
      <div className="max_container w-full flex items-center justify-between px-4">
        <Link
          href={"/"}
          aria-label="logo"
          className="logo max-laptop:w-[114px] max-md:w-[93px]"
        >
          <Image width={160} height={48} src="/assets/images/logo.svg" alt="" />
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
