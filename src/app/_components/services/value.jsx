import Button from "@/components/button";
import SpecialHeading from "@/components/special-heading";
import Image from "next/image";
import React from "react";

function Value() {
  const firstIcons = [
    {
      icon: "/assets/images/servicesOne.svg",
      alt: "services-one",
      title: "Valuation Mastery",
      description:
        "Discover the true worth of your property with our expert valuation services.",
    },
    {
      icon: "/assets/images/servicesOne.svg",
      alt: "services-one",
      title: "Strategic Marketing",
      description:
        "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
      laptopDescription:
        "Selling a property requires more than just a listing; it demands a strategic marketing.",
    },
    {
      icon: "/assets/images/servicesOne.svg",
      alt: "services-one",
      title: "Negotiation Wizardry",
      description:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      icon: "/assets/images/servicesOne.svg",
      alt: "services-one",
      title: "Closing Success",
      description:
        "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
    {
      type: "special",
      title: "Unlock the Value of Your Property Today",
      description:
        "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
      className: "col-span-2 max-md:col-span-1",
    },
  ];
  return (
    <section className="mb-37.5 max-laptop:mb-30 max-sm:mb-20 max_container flex flex-col gap-20 max-laptop:gap-15 max-md:gap-10">
      <SpecialHeading
        title="Unlock Property Value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
        grayClass="max-w-[1296px]"
      />
      <div className="grid grid-cols-3 gap-7.5 max-laptop:gap-5 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-5">
        {firstIcons.map((item, index) => {
          if (item.type === "special") {
            return (
              <div
                key={index}
                className={`p-12.5 bg-gray-10 rounded-xl max-laptop:p-10 max-laptop:rounded-[10px] border border-gray-15 flex flex-col gap-7.5 ${item.className} relative max-laptop:gap-5 max-md:p-6`}
              >
                <div className="button flex items-center gap-5 relative z-10 max-laptop:gap-3.5 max-md:flex-col max-md:gap-5">
                  <p className="flex-1 font-semibold text-[30px] max-laptop:text-2xl leading-normal text-white max-md:text-xl">
                    {item.title}
                  </p>
                  <Button color="black" className="max-md:w-full text-center">
                    Learn More
                  </Button>
                </div>
                <p className="gray_text relative z-10">{item.description}</p>
                <div className="absolute inset-0 max-md:hidden">
                  <Image
                    src="/assets/images/abstractDesignServices.svg"
                    alt="abstract-design"
                    fill
                  />
                </div>
                <div className="absolute inset-0 md:hidden">
                  <Image
                    src="/assets/images/abstractDesignServicesMobile.svg"
                    alt="abstract-design"
                    fill
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              className="p-12.5 rounded-xl max-laptop:rounded-[10px] border border-gray-15 flex flex-col gap-7.5 max-laptop:p-10 max-laptop:gap-5 max-md:p-6 max-md:gap-4"
              key={index}
            >
              <div className="flex items-center gap-5 max-laptop:gap-4 max-md:gap-2.5">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={82}
                  height={82}
                  className="max-laptop:w-15 max-md:w-12"
                />
                <p className="semi_bold_font">{item.title}</p>
              </div>
              <p
                className={`gray_text ${
                  item.laptopDescription && `max-laptop:hidden`
                }`}
              >
                {item.description}
              </p>
              {item.laptopDescription && (
                <p className="gray_text laptop:hidden">
                  {item.laptopDescription}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Value;
