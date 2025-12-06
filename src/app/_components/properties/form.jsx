import Button from "@/components/button";
import FormAgree from "@/components/form-agree";
import DropDownInput from "@/components/properties/drop-down-input";
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
    {
      label: "Preferred Location",
      placeholder: "Select Location",
      id: 1,
      dropDownItems: ["United States", "California"],
    },
    {
      label: "Property Type",
      placeholder: "Select Property Type",
      id: 1,
      dropDownItems: ["Home", "Villa", "Condos", "Town House"],
    },
    {
      label: "No. of Bathrooms",
      placeholder: "Select no. of Bathrooms",
      id: 1,
      dropDownItems: ["2", "3"],
    },
    {
      label: "No. of Bedrooms",
      placeholder: "Select no. of Bedrooms",
      id: 1,
      dropDownItems: ["4", "5", "6"],
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
    <section className="max_container sm_mb flex_col gap-20 mt-37.5 max-laptop:mt-30 max-sm:mt-20">
      <SpecialHeading
        grayClass="max-w-[1297px]"
        title="Let's Make it Happen"
        description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
      />
      <form className="p-25 max-laptop:p-12.5 max-lg:p-5 border border-gray-15 rounded-xl flex_col gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
        <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
          {rowOne.map(({ label, placeholder }, i) => (
            <FormInput key={i} label={label} placeholder={placeholder} />
          ))}
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
          {rowTwo.map(({ label, placeholder, dropDownItems }, i) => (
            <DropDownInput
              key={i}
              label={label}
              placeholder={placeholder}
              dropDownItems={dropDownItems}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12.5 max-laptop:gap-7.5 max-lg:gap-5">
          <DropDownInput
            label="Budget"
            placeholder="Select Budget"
            dropDownItems={["150,000", "220,000", "300,000"]}
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
        <div className="flex_col gap-4 justify-end">
          <p className="text-xl font-semibold text-white max-laptop:text-[16px]">
            Message
          </p>

          <textarea
            className="resize-none border border-gray-15 rounded-xl placeholder:text-gray-40 placeholder:text-lg text-lg max-lg:text-sm max-lg:placeholder:text-sm text-gray-400 leading-none bg-gray-10 outline-none px-5 py-6 h-[170px] max-sm:h-22.5 max-sm:py-4"
            placeholder="Enter your Message here.."
          />
        </div>
        <FormAgree />
      </form>
    </section>
  );
}

export default PropertiesForm;
