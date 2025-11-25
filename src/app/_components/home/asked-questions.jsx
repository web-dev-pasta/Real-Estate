import Slider from "@/components/swiper";
import SwiperComponent from "@/components/swiper-component";

function AskedQuestions() {
  const cards = [
    {
      title: "How do I search for properties on Estatein?",
      description:
        "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "How can I list my property for sale on Estatein?",
      description:
        "Find out the steps required to create a listing and attract potential buyers.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      description:
        "Get a full overview of the paperwork needed to complete your property listing.",
    },
    {
      title: "How can I contact an Estatein agent?",
      description:
        "Discover all the available channels to reach our professional real estate agents.",
    },
    {
      title: "Does Estatein offer assistance with property valuation?",
      description:
        "Learn about our valuation services and how we help you estimate your property's market value.",
    },
    {
      title: "Can I schedule property tours through Estatein?",
      description:
        "Find out how to book in-person or virtual tours for any available property.",
    },
    {
      title: "Are there fees for using Estatein services?",
      description:
        "Understand the different types of fees associated with buying or selling property.",
    },
    {
      title: "How do I filter properties by location and price?",
      description:
        "Use advanced search filters to narrow down listings based on your preferred area and budget.",
    },
    {
      title: "Can Estatein help first-time home buyers?",
      description:
        "Explore our resources and guidance specifically designed for first-time buyers.",
    },
    {
      title: "How do I stay updated on new property listings?",
      description:
        "Learn how to enable notifications and stay informed about the latest listings.",
    },
    {
      title: "Does Estatein provide rental property listings?",
      description:
        "Find out how to browse and apply for rental properties available on our platform.",
    },
    {
      title: "What should I check before buying a property?",
      description:
        "Read our recommended checklist to ensure a safe and informed property purchase.",
    },
    {
      title: "How do I compare properties on Estatein?",
      description:
        "Use our comparison tools to evaluate multiple properties side by side.",
    },
    {
      title: "Is it possible to get mortgage assistance through Estatein?",
      description:
        "Learn how we connect you with trusted financial partners to secure a mortgage.",
    },
    {
      title: "How do I verify the authenticity of a property listing?",
      description:
        "Discover the measures we take to ensure every listing is accurate and trustworthy.",
    },
    {
      title: "Can I save my favorite properties for later?",
      description:
        "Find out how to add properties to your favorites and access them anytime.",
    },
  ];

  return (
    <SwiperComponent
      header="Frequently Asked Questions"
      description={`Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}
      buttonText="View All FAQ’s"
      id={"home-faq"}
      className="mb-24 max-laptop:mb-18 max-sm:mb-20"
    >
      <Slider cards={cards} buttonText="View All FAQ’s" id={3} />
    </SwiperComponent>
  );
}

export default AskedQuestions;
