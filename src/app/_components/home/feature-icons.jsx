import FeatureBox from "@/components/home/feature-box";
import iconOne from "@/../public/assets/images/icon-1.svg";
import iconTwo from "@/../public/assets/images/icon-2.svg";
import iconThree from "@/../public/assets/images/icon-3.svg";
import iconFour from "@/../public/assets/images/icon-4.svg";
function FeatureIconsSection({ servicesDiv }) {
  const features = [
    {
      icon: iconOne,
      label: "Find Your Dream Home",
    },
    {
      icon: iconTwo,
      label: "Unlock Property Value",
    },
    {
      icon: iconThree,
      label: "Effortless Property Management",
    },
    {
      icon: iconFour,
      label: "Smart Investments, Informed Decisions",
    },
  ];
  return (
    <div
      className={`grid p-5 gap-5 border border-gray-15 bg-gray-08 my-2.5 max-laptop:my-1.5 grid-cols-4 max-laptop:p-2.5 max-laptop:gap-2.5 shadow-[0px_-10px_0_#191919,0px_10px_0_#191919] max-laptop:shadow-[0px_-6px_0_#191919,0px_6px_0_#191919] ${
        !servicesDiv && `max-sm:shadow-none max-sm:mx-1.5 max-sm:rounded-xl`
      }  max-lg:grid-cols-2 relative`}
    >
      {features.map(({ label, icon }, i) => (
        <FeatureBox key={i} label={label} icon={icon} />
      ))}
      <div
        className={`absolute w-[calc(100%+8px)] h-[calc(100%+8px)] bg-gray-10 -z-10 -left-1 -top-1 rounded-xl sm:hidden ${
          servicesDiv && `max-sm:hidden`
        }`}
      ></div>
    </div>
  );
}

export default FeatureIconsSection;
