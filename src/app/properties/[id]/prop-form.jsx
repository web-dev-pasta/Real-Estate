import Button from "@/components/button";
import FormInput from "@/components/properties/form-input";
import SpecialHeading from "@/components/special-heading";
import Image from "next/image";
import React from "react";

function PropForm({ title }) {
  return (
    <section className="max_container mb-37.5 max-laptop:mb-30 max-sm:mb-20">
      <div className="grid gap-25 grid-cols-[auto_1fr] max-laptop:gap-20 max-prop-custom:grid-cols-1 max-md:gap-10">
        <SpecialHeading
          title={`Inquire About ${title}`}
          description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
          className="max-w-[519px] max-laptop:max-w-[412px]"
        />
        <div className="p-12.5 rounded-xl border border-gray-15 flex flex-col gap-12.5 max-laptop:gap-10 max-prop-custom:p-5 max-md:gap-5">
          <div className="grid grid-cols-2 gap-7.5 max-laptop:gap-5 *:col-span-2 max-md:grid-cols-1  max-md:gap-5">
            <div className="flex *:flex-1 gap-7.5 max-md:flex-col max-md:gap-5">
              <FormInput label="First Name" placeholder="Enter First Name" />
              <FormInput label="Last Name" placeholder="Enter Last Name" />
            </div>
            <div className="flex *:flex-1 gap-7.5 max-md:flex-col max-md:gap-5">
              <FormInput label="Email" placeholder="Enter Your Email" />
              <FormInput label="Phone" placeholder="Enter Phone Number" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold text-white max-laptop:text-[16px]">
                Selected Property
              </p>
              <div className="flex gap-3 items-center py-6 px-5 rounded-lg bg-gray-10">
                <p className="font-medium text-xl text-white flex-1 max-laptop:text-sm">
                  {title}
                </p>
                <Image
                  src="/assets/images/whiteLocationIcon.svg"
                  alt="location-icon"
                  width={24}
                  height={24}
                  className="max-laptop:w-5"
                />
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
          </div>
          <div className="flex justify-between items-center gap-12.5 max-sm:flex-col max-sm:gap-5">
            <div className="flex-1 flex items-center gap-2.5 max-sm:gap-1.5">
              <span className="inline-block w-7 aspect-square max-laptop:w-6 border border-gray-15 bg-gray-10 rounded-sm"></span>
              <p className="gray_text">
                I agree with <span className="underline">Terms of Use</span> and{" "}
                <span className="underline">Privacy Policy</span>
              </p>
            </div>
            <Button color="purple" className="max-sm:w-full text-center">
              Send Your Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropForm;
