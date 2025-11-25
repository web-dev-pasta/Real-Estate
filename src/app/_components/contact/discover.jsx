import Button from "@/components/button";
import SpecialHeading from "@/components/special-heading";
import Image from "next/image";

function Discover() {
  const categories = ["All", "Regional", "International"];
  const cards = [
    {
      info: "Main Headquarters",
      title: "123 Estatein Plaza, City Center, Metropolis",
      description:
        "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    },
    {
      info: "Regional Offices",
      title: "456 Urban Avenue, Downtown District, Metropolis",
      description:
        "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    },
  ];
  const branches = [
    {
      icon: "/assets/images/messageIcon.svg",
      alt: "message-icon",
      label: "info@estatein.com",
    },
    {
      icon: "/assets/images/phoneIcon.svg",
      alt: "phone-icon",
      label: "+1 (123) 456-7890",
    },
    {
      icon: "/assets/images/whiteLocationIcon.svg",
      alt: "location-icon",
      label: "Metropolis",
    },
  ];
  return (
    <section className="max_container mb-37.5 max-laptop:mb-30 max-sm:mb-20 flex flex-col gap-20 max-laptop:gap-15 max-sm:gap-10">
      <SpecialHeading
        grayClass="max-w-[1297px]"
        title="Discover Our Office Locations"
        description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
        smallDescription="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team."
      />
      <div className="flex flex-col gap-12.5 max-laptop:gap-10 max-sm:gap-7.5">
        <div className="p-2.5 rounded-xl flex *:flex-1 gap-2.5 bg-gray-10 w-[516px] max-laptop:w-[413px] max-sm:mx-auto max-sm:rounded-lg max-sm:w-full">
          {categories.map((e, i) => (
            <span
              key={i}
              className={`rounded-[10px] py-4.5 px-6 max-laptop:py-3.5 max-laptop:px-5 text-white text-lg max-sm:rounded-lg font-medium border border-gray-15 text-center max-sm:text-sm ${
                i == 0 ? `bg-gray-08` : `bg-transparent`
              }`}
            >
              {e}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-7.5 max-laptop:gap-5 max-lg:grid-cols-1 ">
          {cards.map(({ info, title, description }, i) => (
            <div
              className="p-12.5 max-laptop:p-10 flex flex-col gap-10 rounded-xl border border-gray-15 max-laptop:gap-7.5 max-sm:p-6 max-sm:gap-6"
              key={i}
            >
              <div className="text flex flex-col gap-3.5 flex-1 max-sm:gap-2">
                <div className="first flex flex-col gap-2.5 max-laptop:gap-1.5 max-sm:gap-1">
                  <p className="text-lg font-medium leading-normal text-white max-laptop:text-sm">
                    {info}
                  </p>
                  <p className="font-semibold text-[30px] max-laptop:text-2xl text-white lg:line-clamp-1">
                    {title}
                  </p>
                </div>
                <p className="gray_text lg:line-clamp-3">{description}</p>
              </div>
              <div className="categories flex items-center gap-2.5 flex-wrap">
                {branches.map(({ icon, alt, label }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-gray-10 rounded-[28px] border border-gray-15 py-3.5 px-5 max-laptop:py-2.5 max-laptop:px-4"
                  >
                    <Image
                      src={icon}
                      alt={alt}
                      width={24}
                      height={24}
                      className="max-laptop:w-5"
                    />
                    <p className="text-white text-lg leading-normal font-medium max-laptop:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <Button color="purple" className="text-center">
                Get Direction
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Discover;
