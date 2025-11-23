import SpecialHeading from "@/components/special-heading";
import manOne from "@/../public/assets/images/man-a-1.png";
import manTwo from "@/../public/assets/images/man-a-2.png";
import womanOne from "@/../public/assets/images/woman-a-1.png";
import womanTwo from "@/../public/assets/images/woman-a-2.png";
import Image from "next/image";

function AboutTeam() {
  const data = [
    {
      image: manOne,
      name: "Max Mitchell",
      role: "Founder",
    },
    {
      image: womanOne,
      name: "Sarah Johnson",
      role: "Chief Real Estate Officer",
    },
    {
      image: manTwo,
      name: "David Brown",
      role: "Head of Property Management",
    },
    {
      image: womanTwo,
      name: "Michael Turner",
      role: "Legal Counsel",
    },
  ];
  return (
    <section className="mb-37.5 max-[1320px]:px-4 max-laptop:mb-30 max-sm:mb-20 max_container max-laptop:px-0 flex flex-col gap-20 max-laptop:gap-15 max-md:gap-10">
      <SpecialHeading
        title="Meet the Estatein Team"
        description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(375px,1fr))] max-laptop:grid-cols-[repeat(auto-fill,minmax(305px,1fr))] gap-7.5 max-laptop:gap-5">
        {data.map(({ image, name, role }, i) => (
          <div
            key={i}
            className="rounded-xl p-7.5 border border-gray-15 flex flex-col gap-12.5 max-laptop:p-6 max-sm:p-5 max-sm:gap-10"
          >
            <div className="relative">
              <Image
                src={image}
                className="w-full h-full rounded-xl object-cover"
                alt={name}
              />
              <div className="absolute w-[76px] h-[52px] rounded-[43px] px-[26px] py-3.5 bg-purple-60 z-10 flex justify-center items-center -bottom-[26px] left-1/2 transform -translate-x-1/2 max-laptop:py-2.5 max-laptop:px-5 max-laptop:w-15 max-laptop:h-10">
                <img
                  src="/assets/images/twitter.svg"
                  alt="twitter"
                  className="max-laptop:w-20 aspect-square"
                />
              </div>
            </div>
            <div className="text flex flex-col gap-6 max-laptop:gap-5 max-sm:gap-4">
              <div className="top space-y-1.5 text-center max-laptop:space-y-1 max-sm:space-y-0.5">
                <p className="semi_bold_font">{name}</p>
                <p className="gray_text">{role}</p>
              </div>
              <div className="bottom rounded-[100px] gap-5 bg-gray-10 border border-gray-15 px-6 py-3.5 max-laptop:px-5 max-laptop:py-2.5 flex items-center max-sm:py-2 max-sm:pl-6 max-sm:pr-2">
                <p className="font-medium text-lg text-white flex-1 max-laptop:text-[16px] max-sm:text-sm">
                  Say Hello 👋
                </p>
                <span className="w-11 h-11 max-laptop:w-9 max-laptop:h-9 max-sm:w-12 max-sm:h-12  flex justify-center items-center rounded-full bg-purple-60 ">
                  <img
                    src="/assets/images/sendIcon.svg"
                    alt="send-icon"
                    className="w-6 h-6 max-laptop:h-5 max-laptop:w-5"
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;
