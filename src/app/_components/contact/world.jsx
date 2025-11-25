import SpecialHeading from "@/components/special-heading";
import Image from "next/image";
import React from "react";

function World() {
  const boxes = [
    {
      image: "/assets/images/contactOne.png",
      alt: "contact one",
      width: 570,
      height: 192,
      className: "col-span-2 max-md:w-37.5 max-md:h-[70px] object-cover",
    },
    {
      image: "/assets/images/contactTwo.png",
      alt: "contact two",
      width: 570,
      height: 192,
      className:
        "col-span-2 max-lg:col-span-1 max-md:col-span-2 max-md:w-37.5 max-md:h-[70px] object-cover",
    },
    {
      image: "/assets/images/contactThree.png",
      alt: "contact three",
      width: 570,
      height: 192,
      className:
        "col-span-2 max-lg:col-span-1 max-md:col-span-2 max-md:w-37.5 max-md:h-[70px] object-cover",
    },
    {
      image: "/assets/images/contactFour.png",
      alt: "contact four",
      width: 275,
      height: 192,
      className: "col-span-1 max-md:w-37.5 max-md:h-[72px] object-cover",
    },
    {
      image: "/assets/images/contactFive.png",
      alt: "contact five",
      width: 275,
      height: 192,
      className: "col-span-1 max-md:w-37.5 max-md:h-[72px] object-cover",
    },

    {
      type: "component",
      component: (
        <SpecialHeading
          imageClass="static"
          title="Explore Estatein's World"
          description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
        />
      ),
      className: "col-span-2 max-md:col-span-4 max-md:mb-2.5",
    },

    {
      image: "/assets/images/contactSix.png",
      alt: "contact six",
      width: 570,
      height: 220,
      className:
        "col-span-2 max-md:col-span-4 max-md:w-[309px] max-md:h-[135px] object-cover",
    },
  ];

  return (
    <section className="max_container mb-37.5 max-laptop:mb-30 max-md:mb-20">
      <div className="relative p-20 max-laptop:p-15 rounded-xl border border-gray-15 grid grid-cols-4 gap-5 max-md:gap-2.5 max-lg:grid-cols-2 max-md:grid-cols-4 max-md:p-6">
        {boxes.map((e, i) => {
          if (e.type === "component") {
            return (
              <div key={i} className={e.className}>
                {e.component}
              </div>
            );
          }
          return (
            <Image
              src={e.image}
              width={e.width}
              height={e.height}
              key={i}
              alt={e.alt}
              className={`rounded-[10px] w-full ${e.className}`}
            />
          );
        })}
        <div className="absolute inset-0 -z-10 max-md:hidden">
          <Image
            src="/assets/images/abstractDesignContact.svg"
            alt="abstract-design"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 md:hidden w-full">
          <Image
            src="/assets/images/abstractDesignContactMobile.svg"
            alt="abstract-design"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default World;
