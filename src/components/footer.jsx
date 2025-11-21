import Link from "next/link";
import React from "react";

function Footer() {
  const links = [
    {
      header: "Home",
      sections: [
        { label: "Hero Section", link: "Hero Section" },
        { label: "Features", link: "Features" },
        { label: "Properties", link: "Properties" },
        { label: "Testimonials", link: "Testimonials" },
        { label: "FAQ's", link: "FAQ's" },
      ],
    },
    {
      header: "About Us",
      sections: [
        { label: "Our Story", link: "Our Story" },
        { label: "Our Works", link: "Our Works" },
        { label: "How It Works", link: "How It Works" },
        { label: "Our Team", link: "Our Team" },
        { label: "Our Clients", link: "Our Clients" },
      ],
    },
    {
      header: "Properties",
      sections: [
        { label: "Portfolio", link: "Portfolio" },
        { label: "Categories", link: "Categories" },
      ],
    },
    {
      header: "Services",
      sections: [
        { label: "Valuation Mastery", link: "Valuation Mastery" },
        { label: "Strategic Marketing", link: "Strategic Marketing" },
        { label: "Negotiation Wizardry", link: "Negotiation Wizardry" },
        { label: "Closing Success", link: "Closing Success" },
        { label: "Property Management", link: "Property Management" },
      ],
    },
    {
      header: "Contact Us",
      sections: [
        { label: "Contact Form", link: "Contact Form" },
        { label: "Our Offices", link: "Our Offices" },
      ],
    },
  ];
  const left = ["Home", "Properties", "Contact Us"];
  const leftLinks = links.filter(({ header }) => left.includes(header));
  const rightLinks = links.filter(({ header }) => !left.includes(header));

  const icons = [
    "/assets/images/facebook.svg",
    "/assets/images/linkedin.svg",
    "/assets/images/twitter.svg",
    "/assets/images/youtube.svg",
  ];

  return (
    <>
      <footer className="max-w-container max-laptop:max-w-7xl mx-auto max-large:px-4 flex gap-20 py-25 max-laptop:py-20 items-start max-lg:flex-col max-sm:py-12.5 max-sm:gap-12.5">
        <div className="logo space-y-7.5 max-laptop:space-y-6 w-[538px] max-laptop:w-[326px] max-lg:mx-auto">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            className="max-laptop:w-[113px] max-lg:mx-auto"
          />
          <div className="input-wrapper border border-gray-15 rounded-xl flex gap-2.5 items-center px-6 py-4.5 max-laptop:py-3.5 max-laptop:px-5  w-[423px] max-laptop:w-[305px] max-lg:w-full">
            <img
              src="/assets/images/emailIcon.svg"
              alt="email-icon"
              className="max-laptop:w-5"
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="flex-1 placeholder:text-gray-09 placeholder:max-laptop:text-sm text-gray-09"
            />
            <img
              src="/assets/images/sendIcon.svg"
              className="max-laptop:w-6"
              alt="send-icon"
            />
          </div>
        </div>
        <nav className="links flex justify-between items-start w-full max-sm:hidden">
          {links.map(({ header, sections }, i) => (
            <div key={i} className="flex flex-col gap-7.5 max-laptop:gap-6">
              <div className="header text-xl font-medium text-gray-09 max-laptop:text-lg">
                {header}
              </div>
              <div className="links flex flex-col gap-5">
                {sections?.map(({ label, link }, i) => (
                  <Link
                    href=""
                    className="text-white font-medium text-lg max-laptop:text-[16px]"
                    key={i}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <nav className="links flex w-full sm:hidden">
          <div className="left pr-5 flex-1">
            {leftLinks.map(({ header, sections }, i) => (
              <div
                key={i}
                className={`flex flex-col gap-4 ${i !== 0 && "mt-5"}`}
              >
                <div className="font-medium text-gray-09 text-[16px]">
                  {header}
                </div>
                <div className="flex flex-col gap-2 pb-5 border-b border-gray-15">
                  {sections.map(({ label, link }, i) => (
                    <Link href="" className="text-white text-sm" key={i}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="right pl-5 flex-1 text-white">
            {rightLinks.map(({ header, sections }, i) => (
              <div
                key={i}
                className={`flex flex-col gap-4 ${i !== 0 && "mt-5"} relative`}
              >
                <div className="absolute -left-[21px] top-0 bottom-0 w-px bg-gray-15"></div>

                <div className="font-medium text-gray-09 text-[16px]">
                  {header}
                </div>
                <div className="flex flex-col gap-2 pb-5 border-b border-gray-15">
                  {sections.map(({ label, link }, i) => (
                    <Link href="" className="text-white text-sm" key={i}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>
      </footer>
      <div className="py-4 bg-gray-10 max-laptop:py-3 max-sm:py-5 max-sm:px-4">
        <div className="max-w-container max-laptop:max-w-7xl mx-auto max-large:px-4 flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-5 max-sm:p-0">
          <div className="left flex items-center gap-9.5 py-2.5 text-white text-lg max-laptop:text-sm max-laptop:gap-5 font-medium max-sm:flex-col max-sm:gap-2.5 max-sm:text-sm">
            <p>@{new Date().getFullYear()} Estatin. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="right flex gap-2.5 max-laptop:gap-2 items-center">
            {icons.map((e, i) => (
              <div
                className="wrapper w-13 max-laptop:w-10 max-sm:w-15 aspect-square flex justify-center items-center rounded-full bg-gray-08"
                key={i}
              >
                <img
                  src={e}
                  alt={e.split("/")[3].split(".")[0]}
                  className="max-laptop:w-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
