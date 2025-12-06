import React from "react";
import Button from "./button";
import { Checkbox } from "./ui/checkbox";

function FormAgree() {
  return (
    <div className="flex justify-between items-center gap-12.5 max-sm:flex-col max-sm:gap-5">
      <div className="flex-1 flex items-center gap-2.5 max-sm:gap-1.5">
        <Checkbox
          id="terms"
          className="w-7 aspect-square max-laptop:w-6 rounded-sm"
        />
        <p className="gray_text">
          I agree with <span className="underline">Terms of Use</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
      <Button color="purple" className="max-sm:w-full text-center">
        Send Your Message
      </Button>
    </div>
  );
}

export default FormAgree;
/**
 * <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
 * 
 */
