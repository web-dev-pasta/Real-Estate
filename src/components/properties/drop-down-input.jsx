import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function DropDownInput({ placeholder, label, dropDownItems }) {
  return (
    <Field className="gap-4 max-laptop:gap-3.5">
      <FieldLabel
        htmlFor="checkout"
        className="text-xl font-semibold text-white max-laptop:text-[16px]"
      >
        {label}
      </FieldLabel>
      <Select defaultValue="">
        <SelectTrigger
          id="checkout"
          className="px-5 py-6 max-laptop:py-4 max-laptop:px-5 border border-gray-15 bg-gray-10 rounded-lg text-lg max-laptop:text-sm h-17! max-laptop:h-13!"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {dropDownItems?.map((e, i) => (
            <SelectItem
              className="text-gray-40 text-lg max-laptop:text-sm"
              key={i}
              value={e}
            >
              {e}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
