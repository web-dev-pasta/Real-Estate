import Button from "@/components/button";
import Image from "next/image";
import small from "@/../public/assets/images/small.png";
import smallTwo from "@/../public/assets/images/smallTwo.png";
import smallThree from "@/../public/assets/images/smallThree.png";
import smallFour from "@/../public/assets/images/smallFour.png";
import smallFive from "@/../public/assets/images/smallFive.png";
import smallSix from "@/../public/assets/images/smallSix.png";
import smallSeven from "@/../public/assets/images/smallSeven.png";
import smallEight from "@/../public/assets/images/smallEight.png";
import smallNine from "@/../public/assets/images/smallNine.png";
import bannerImage from "@/../public/assets/images/bannerImage.png";
import arrow from "@/../public/assets/images/arrow.svg";
import grayBath from "@/../public/assets/images/grayBathIcon.svg";
import grayBed from "@/../public/assets/images/grayBedIcon.svg";
import grayArea from "@/../public/assets/images/grayAreaIcon.svg";
import electricIcon from "@/../public/assets/images/filledElectricIcon.svg";

function Hero({ cards, id }) {
  const images = [
    smallTwo,
    smallThree,
    smallFour,
    smallFive,
    smallSix,
    smallSeven,
    smallEight,
    smallNine,
  ];
  const icons = [
    { label: "Bedrooms", number: "04", icon: grayBed, alt: "bed-icon" },
    { label: "Bathrooms", number: "03", icon: grayBath, alt: "bath-icon" },
    {
      label: "Area",
      number: "2,500 Square Feet",
      icon: grayArea,
      alt: "area-icon",
    },
  ];
  const text = [
    "Expansive oceanfront terrace for outdoor entertaining",
    "Gourmet kitchen with top-of-the-line appliances",
    "Private beach access for morning strolls and sunset views",
    "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    "Private garage and ample storage space",
  ];
  return (
    <section className="max_container flex flex-col mt-30 mb-37.5 max-laptop:mt-20 max-laptop:mb-30 max-md:mt-15">
      <div className="flex items-center gap-12.5 mb-12.5 max-laptop:mb-10 max-md:mb-7.5">
        <div className="flex md:items-center gap-5 flex-1 max-md:flex-col max-md:gap-2.5">
          <p className="font-semibold text-[30px] text-white">
            {cards[id].title}
          </p>
          <span className="flex items-center gap-5">
            <Button
              className="flex items-center gap-1.5 p-2.5! max-laptop:p-2"
              color="black"
            >
              <Image
                src="/assets/images/whiteLocationIcon.svg"
                alt="location-icon"
                width={24}
                height={24}
                className="max-laptop:w-5"
              />
              <p className="text-lg font-medium text-white max-laptop:text-sm">
                Malibu, California
              </p>
            </Button>
            <div className="flex items-center gap-1 md:hidden">
              <p className="gray_text">Price</p>
              <p className="semi_bold_font">${cards[id].price}</p>
            </div>
          </span>
        </div>
        <div className="flex flex-col gap-0.5 max-md:hidden">
          <p className="gray_text">Price</p>
          <p className="semi_bold_font">${cards[id].price}</p>
        </div>
      </div>
      <div className="mb-7.5 max-laptop:mb-5 p-12.5 max-laptop:p-10 rounded-xl bg-gray-10 border border-gray-15 flex flex-col gap-7.5 max-laptop:gap-5 max-md:p-5">
        <div className="bg-gray-08 border border-gray-15 rounded-xl p-5 flex gap-5 max-laptop:gap-2.5 max-laptop:p-2.5 max-large:flex-wrap max-[820px]:w-fit max-[820px]:mx-auto max-sm:flex-nowrap max-tiny-mobile:gap-0 max-tiny-mobile:w-full max-tiny-mobile:justify-between">
          <Image
            src={cards[id].image}
            width={144}
            height={94}
            className={`rounded-lg max-laptop:rounded-md max-laptop:w-[122px] max-laptop:h-[74px] object-cover max-sm:w-[67px] max-sm:h-[41px]`}
            alt={`small`}
          />
          {images.map((e, i) => (
            <Image
              src={e}
              key={i}
              width={144}
              height={94}
              className={`rounded-lg max-laptop:rounded-md max-laptop:w-[122px] max-laptop:h-[74px] opacity-50 object-cover max-sm:w-[67px] max-sm:h-[41px] ${
                i > 2 && `max-[820px]:hidden`
              }`}
              alt={`small-${i + 1}`}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-7.5 max-prop-custom:grid-cols-1">
          <Image
            src={cards[id].image}
            alt={cards[id].title}
            width={733}
            height={583}
            className="max-prop-custom:mx-auto w-full h-full object-cover rounded-[10px] max-laptop:w-[585px] max-laptop:h-[507px] max-sm:w-[318px] max-sm:h-[249px]"
          />
          <Image
            src={bannerImage}
            alt="banner-image"
            width={733}
            height={583}
            className="rounded-[10px] w-full h-full object-cover max-prop-custom:hidden"
          />
        </div>
        <div className="rounded-[100px] p-2.5 max-laptop:p-2 bg-gray-08 flex items-center gap-2.5 w-fit mx-auto">
          <Image
            src={arrow}
            alt="arrow"
            width={58}
            className="-rotate-180 opacity-50 max-laptop:w-11"
          />
          <div className="navigation flex items-center gap-1">
            {new Array(6).fill(0).map((_, i) => (
              <span
                className={`inline-block w-5 h-1.25 rounded-[60px] max-laptop:w-[11px] max-laptop:h-[3px] max-laptop:gap-[3px] ${
                  i === 0 ? `bg-purple-60` : `bg-gray-30`
                }`}
                key={i}
              ></span>
            ))}
          </div>
          <Image
            src={arrow}
            alt="arrow"
            width={58}
            className="max-laptop:w-11"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-7.5 max-laptop:gap-5 items-start max-prop-custom:grid-cols-1">
        <div className="p-12.5 max-laptop:p-10 flex flex-col gap-12.5 max-laptop:gap-10 border border-gray-15 rounded-xl max-laptop:rounded-[10px] max-sm:p-5 max-sm:gap-5">
          <div className="text flex flex-col gap-3.5 max-laptop:gap-2.5">
            <p className="semi_bold_font">Description</p>
            <p className="gray_text">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
          </div>
          <div className="pt-5 max-laptop:pt-4 border-t border-gray-15 grid grid-cols-3 max-sm:grid-cols-2 items-center gap-10 max-laptop:gap-5 max-prop-custom:gap-7.5 max-sm:gap-y-5 max-sm:gap-x-10 max-sm:pt-5">
            {icons.map(({ label, number, icon, alt }, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2.5 relative max-laptop:gap-2 ${
                  i === 2 &&
                  `max-sm:col-span-2 max-sm:pt-5 max-sm:border-t max-sm:border-gray-15`
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Image
                    src={icon}
                    alt={alt}
                    width={24}
                    height={24}
                    className="max-laptop:w-5"
                  />
                  <p className="gray_text">{label}</p>
                </div>
                <p className="semi_bold_font">{number}</p>
                {i !== 2 && (
                  <div className="absolute -right-5 inset-y-0 w-px bg-gray-15 max-laptop:-right-2.5 max-prop-custom:-right-3.75 max-sm:-right-5"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-12.5 max-laptop:p-10 flex flex-col gap-12.5 max-laptop:gap-10 rounded-xl border border-gray-15 max-sm:p-5 max-sm:gap-5">
          <div className="title">
            <p className="semi_bold_font">Key Features and Amenities</p>
          </div>
          <div className="flex flex-col gap-7.5 max-laptop:gap-5 max-sm:gap-4.5">
            {text.map((e, i) => (
              <div
                key={i}
                className="py-4.5 px-6 max-laptop:py-3.5 max-laptop:px-4 flex items-center gap-2.5 relative border-l border-purple-60 max-sm:py-2.5 max-sm:px-3"
              >
                <Image
                  src={electricIcon}
                  alt="electric-icon"
                  width={24}
                  height={24}
                  className="max-laptop:w-5 max-sm:w-4.5"
                />
                <p className="gray_text">{e}</p>
                <div className="absolute inset-0 bg-[linear-gradient(64deg,rgba(26,26,26,1)_0%,rgba(26,26,26,0)_100%)] -z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
