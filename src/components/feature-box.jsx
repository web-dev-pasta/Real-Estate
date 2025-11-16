import Image from "next/image";
import topRightArrow from "../../public/assets/images/topRightArrow.svg";
function FeatureBox({ label, icon }) {
  return (
    <div className="border border-gray-15 bg-gray-10 rounded-xl px-5 py-10 flex flex-col gap-5 relative items-center max-laptop:gap-4 max-laptop:px-4 max-laptop:py-7.5 max-sm:px-3.5 max-sm:py-5 max-sm:rounded-[10px]">
      <span className="aspect-square w-[82px] max-laptop:w-15 max-sm:w-12">
        <Image src={icon} alt={icon} className="w-full h-full" />
      </span>
      <span
        className="text-white text-[20px] font-semibold max-laptop:text-[16px] text-center line-clamp-1 max-md:line-clamp-none max-sm:text-[14px]"
        title={label}
      >
        {label}
      </span>
      <span className="absolute aspect-square w-[34px] max-laptop:w-6.5 right-5 top-5">
        <Image
          src={topRightArrow}
          alt="top-right-arrow"
          className="w-full h-full"
        />
      </span>
    </div>
  );
}

export default FeatureBox;
