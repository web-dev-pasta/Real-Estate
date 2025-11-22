import SpecialHeading from "@/components/about/special-heading";

function AboutAchievements() {
  const data = [
    {
      title: "3+ Years of Excellence",
      description:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
      laptopText:
        "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
    },
    {
      title: "Happy Clients",
      description:
        "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
      title: "Industry Recognition",
      description:
        "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
  ];
  return (
    <section className="mb-37.5 max-[1320px]:px-4 max-laptop:mb-30 max-sm:mb-20 max-w-container max-laptop:max-w-7xl mx-auto max-large:px-4 max-laptop:px-0 flex flex-col gap-20 max-laptop:gap-15 max-md:gap-10">
      <SpecialHeading
        title="Our Achievements"
        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] max-laptop:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 max-laptop:gap-7.5 max-sm:gap-5 max-tiny-mobile:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {data.map(({ title, description, laptopText }, i) => (
          <div
            key={i}
            className="max-sm:gap-5 p-12.5 flex flex-col gap-7.5 max-laptop:gap-6 max-laptop:rounded-[10px] max-laptop:p-10 border border-gray-15 rounded-xl relative bg-gray-08 max-sm:p-7.5"
          >
            <p className="font-semibold text-3xl max-laptop:text-2xl leading-normal text-white max-sm:text-[20px]">
              {title}
            </p>
            <p className={`gray_text ${laptopText && `max-laptop:hidden`}`}>
              {description}
            </p>
            {laptopText && (
              <p className={`gray_text laptop:hidden`}>{laptopText}</p>
            )}
            <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] max-laptop:w-[calc(100%+12px)] max-laptop:h-[calc(100%+12px)] max-sm:h-[calc(100%+8px)] max-sm:w-[calc(100%+8px)] -top-2 -left-2 max-laptop:-top-1.5 max-laptop:-left-1.5 max-sm:-top-1 max-sm:-left-1 bg-gray-10 -z-10 rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutAchievements;
