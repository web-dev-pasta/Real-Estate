import Button from "@/components/button";
import FormInput from "@/components/properties/form-input";
import SpecialHeading from "@/components/special-heading";
import React from "react";

function PropertiesForm() {
  const rowOne = [
    { label: "First Name", placeholder: "Enter First Name" },
    { label: "Last Name", placeholder: "Enter Last Name" },
    { label: "Email", placeholder: "Enter Your Email" },
    { label: "Phone", placeholder: "Enter Phone Number" },
  ];
  const rowTwo = [
    { label: "Preferred Location", placeholder: "Select Location", id: 1 },
    { label: "Property Type", placeholder: "Select Property Type", id: 1 },
    {
      label: "No. of Bathrooms",
      placeholder: "Select no. of Bathrooms",
      id: 1,
    },
    {
      label: "No. of Bedrooms",
      placeholder: "Select no. of Bedrooms",
      id: 1,
    },
  ];
  const rowThree = [
    {
      label: "Preferred Contact Method",
      placeholder: "Enter Your Number",
      id: 2,
      fill: "true",
    },
    {
      placeholder: "Enter Your Email",
      id: 2,
    },
  ];
  return (
    <section className="max_container mb-37.5 max-laptop:mb-30 max-sm:mb-20 flex flex-col gap-20 mt-37.5 max-laptop:mt-30 max-sm:mt-20">
      <SpecialHeading
        grayClass="max-w-[1297px]"
        title="Let's Make it Happen"
        description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
      />
      <form className="p-25 max-laptop:p-12.5 max-lg:p-5 border border-gray-15 rounded-xl flex flex-col gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
        <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
          {rowOne.map(({ label, placeholder }, i) => (
            <FormInput key={i} label={label} placeholder={placeholder} />
          ))}
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
          {rowTwo.map(({ label, placeholder, id }, i) => (
            <FormInput
              key={i}
              label={label}
              placeholder={placeholder}
              id={id}
              imageClass="max-laptop:w-5"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
          <FormInput
            label="Budget"
            placeholder="Select Budget"
            imageClass="max-laptop:w-5"
            id={1}
          />
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {rowThree.map(({ label, placeholder, id }, i) => (
              <FormInput
                key={i}
                label={label}
                placeholder={placeholder}
                id={id}
                imageClass="max-laptop:w-5"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-end">
          <p className="text-xl font-semibold text-white max-laptop:text-[16px]">
            Message
          </p>

          <textarea
            className="resize-none border border-gray-15 rounded-xl placeholder:text-gray-40 placeholder:text-lg text-lg max-lg:text-sm max-lg:placeholder:text-sm text-gray-400 leading-none bg-gray-10 outline-none px-5 py-6 h-[170px] max-sm:h-22.5 max-sm:py-4"
            placeholder="Enter your Message here.."
          />
        </div>
        <div className="flex justify-between items-center gap-12.5">
          <div className="flex-1 flex items-center gap-2.5">
            <span className="inline-block w-7 aspect-square max-laptop:w-6 border border-gray-15 bg-gray-10 rounded-sm"></span>
            <p className="gray_text">
              I agree with <span className="underline">Terms of Use</span> and
              <span>Privacy Policy</span>
            </p>
          </div>
          <Button color="purple">Send Your Message</Button>
        </div>
      </form>
    </section>
  );
}

export default PropertiesForm;
