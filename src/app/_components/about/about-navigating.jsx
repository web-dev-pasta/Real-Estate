import SpecialHeading from "@/components/about/special-heading";

function AboutNavigating() {
  const data = [
    {
      title: "Discover a World of Possibilities",
      description:
        "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
    {
      title: "Narrowing Down Your Choices",
      description:
        "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      title: "Personalized Guidance",
      description:
        "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      title: "See It for Yourself",
      description:
        "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      title: "Making Informed Decisions",
      description:
        "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
    {
      title: "Getting the Best Deal",
      description:
        "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];
  return (
    <section className="mb-37.5 max-[1320px]:px-4 max-laptop:mb-30 max-sm:mb-20 max-w-container max-laptop:max-w-7xl mx-auto max-large:px-4 max-laptop:px-0 flex flex-col gap-20 max-laptop:gap-15 max-md:gap-10">
      <SpecialHeading
        description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        title="Navigating the Estatein Experience"
      />
      <div className="grid grid-cols-3 grid-rows-2 gap-x-7.5 gap-y-12.5 max-laptop:gap-x-5 max-laptop:gap-y-10 max-xl:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] max-md:grid-cols-1 max-sm:gap-7.5">
        {data.map(({ title, description }, i) => (
          <div className="relative flex flex-col" key={i}>
            <div className="px-5 py-4 max-laptop:px-4 max-laptop:py-3.5 text-white font-medium text-xl border-l border-purple-60 max-laptop:text-[16px]">
              Step {String(i + 1).padStart(2, "0")}
            </div>
            <div className="p-12.5 flex flex-col gap-5 max-laptop:gap-4 rounded-tl-none! rounded-xl max-laptop:rounded-[10px] border border-gray-15 relative overflow-hidden flex-1 max-laptop:p-10 max-md:p-7.5 max-sm:gap-3.5">
              <p className="font-semibold text-[26px] leading-none text-white max-laptop:text-xl">
                {title}
              </p>
              <p className="gray_text">{description}</p>
              <div
                className="absolute -left-20 -top-20 w-full h-full -z-10 bg-[linear-gradient(135deg,rgba(112,59,247,1)_0%,rgba(112,59,247,0)_40%)] max-md:-left-35 max-sm:[-webkit-mask-image:linear-gradient(to_bottom,#000_40%,transparent_100%)] 
               max-sm:mask-[linear-gradient(to_bottom,#000_40%,transparent_100%)] max-sm:-left-10"
              />
            </div>
            <div className="absolute left-0 top-15 w-full h-px bg-[linear-gradient(135deg,rgba(112,59,247,1)_0%,rgba(112,59,247,0)_36%)]! z-10 max-laptop:top-[50px]" />
            <div className="absolute left-0 bottom-0 h-[calc(100%-60px)] w-px bg-[linear-gradient(135deg,rgba(112,59,247,1)_0%,rgba(112,59,247,0)_36%)]! z-10 max-laptop:h-[calc(100%-51px)]" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutNavigating;
