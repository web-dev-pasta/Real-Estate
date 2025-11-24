import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <header className="relative bg-gray-10 text-white max-sm:h-[78px] max-laptop:h-[49px] h-[63px] flex items-center justify-between sm:justify-center max-sm:px-4 max-sm:pt-10 max-sm:pb-5">
      <div className="absolute pointer-events-none inset-0 bg-[url('/assets/images/background_2.svg')] sm:bg-cover bg-center opacity-40"></div>

      <div className="font-medium max-sm:text-[12px] max-laptop:text-sm text-lg flex justify-center max-laptop:gap-1.5 gap-2.5 relative">
        <div className="discover flex items-center gap-1">
          <span className="max-laptop:w-3 max-laptop:h-3 w-4 h-4 inline-block">
            <Image
              width={16}
              height={16}
              src="/assets/images/sparkles.svg"
              alt="sparkles"
            />
          </span>
          <p>Discover Your Dream Property with Estatein</p>
        </div>
        <Link href={``} className="underline max-small-mobile:hidden">
          Learn More
        </Link>
      </div>
      <button className="sm:absolute top-1/2 transform sm:-translate-y-1/2 flex justify-center items-center max-laptop:w-6.5 max-laptop:h-6.5 w-8 h-8 bg-white/10 rounded-full right-[29px] cursor-pointer">
        <Image
          width={24}
          height={24}
          src="/assets/images/xIcon.svg"
          alt="xIcon"
          className="max-laptop:h-4.5 max-laptop:w-4.5 w-6 h-6"
        />
      </button>
    </header>
  );
}

export default Banner;
