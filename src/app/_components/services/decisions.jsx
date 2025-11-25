import Button from "@/components/button";
import SpecialHeading from "@/components/special-heading";
import Image from "next/image";

function Decisions() {
  const firstIcons = [
    {
      icon: "/assets/images/servicesOne.svg",
      alt: "services-one",
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      icon: "/assets/images/servicesNine.svg",
      alt: "services-nine",
      title: "ROI Assessment",
      description:
        "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    },
    {
      icon: "/assets/images/servicesNine.svg",
      alt: "services-nine",
      title: "Customized Strategies",
      description:
        "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
    },
    {
      icon: "/assets/images/servicesEight.svg",
      alt: "services-eight",
      title: "Diversification Mastery",
      description:
        "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    },
  ];
  return (
    <section className="mb-37.5 max-laptop:mb-30 max-sm:mb-20 max_container grid gap-15 max-laptop:gap-12.5 max-md:gap-10 grid-cols-[519px_1fr] max-laptop:grid-cols-[412px_1fr] max-lg:grid-cols-1">
      <div className="flex flex-col gap-12.5 max-laptop:gap-10 max-sm:gap-7.5">
        <SpecialHeading
          title="Smart Investments, Informed Decisions"
          description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
          smallDescription="Building a real estate portfolio requires a strategic approach."
        />
        <div
          className={`p-12.5 bg-gray-10 rounded-xl max-laptop:p-10 max-laptop:rounded-[10px] border border-gray-15 flex flex-col gap-7.5 relative max-laptop:gap-5 max-md:p-6`}
        >
          <div className="button laptop:flex items-center gap-5 relative z-10 ">
            <p className="flex-1 semi_bold_font">
              Unlock Your Investment Potential
            </p>
            <Button
              color="black"
              className="max-md:w-full text-center max-laptop:hidden"
            >
              Learn More
            </Button>
          </div>
          <p className="text-lg max-laptop:text-[16px] font-medium text-white relative z-10 max-sm:text-sm max-sm:text-gray-09">
            Explore our Property Management Service categories and let us handle
            the complexities while you enjoy the benefits of property ownership.
          </p>
          <Button
            color="black"
            className="text-center w-full laptop:hidden relative z-10"
          >
            Learn More
          </Button>
          <div className="absolute inset-0 max-laptop:hidden">
            <Image
              src="/assets/images/abstractDesignLast.svg"
              alt="abstract-design"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 laptop:hidden">
            <Image
              src="/assets/images/abstractDesignLastLaptop.svg"
              alt="abstract-design"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="p-2.5 bg-gray-10 rounded-xl grid grid-cols-2 gap-2.5 max-xl:grid-cols-1">
        {firstIcons.map((item, index) => (
          <div
            className="p-12.5 rounded-xl max-laptop:rounded-[10px] border bg-gray-08 border-gray-15 flex flex-col gap-7.5 max-laptop:p-10 max-laptop:gap-6 max-md:p-6 max-md:gap-4"
            key={index}
          >
            <div className="flex items-center gap-5 max-laptop:gap-4 max-md:gap-3">
              <Image
                src={item.icon}
                alt={item.alt}
                width={82}
                height={82}
                className="max-laptop:w-15 max-md:w-12"
              />
              <p className="semi_bold_font">{item.title}</p>
            </div>
            <p className="gray_text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Decisions;
