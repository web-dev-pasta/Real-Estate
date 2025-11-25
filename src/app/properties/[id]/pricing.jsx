import Button from "@/components/button";
import SpecialHeading from "@/components/special-heading";
import PriceComponent from "./price-component";

export default function Pricing({ price }) {
  const pricingData = [
    {
      title: "Additional Fees",
      button: true,
      groups: [
        [
          {
            title: "Property Transfer Tax",
            aside: "$25,000",
            body: "Based on the sale price and local regulations",
            border: true,
          },
          {
            title: "Legal Fees",
            aside: "$3,000",
            body: "Approximate cost for legal services, including title transfer",
          },
        ],
        [
          {
            title: "Home Inspection",
            aside: "$500",
            body: "Recommended for due diligence",
            border: true,
            roundedClass: "max-md:rounded-[28px]",
          },
          {
            title: "Property Insurance",
            aside: "$1,200",
            body: "Annual cost for comprehensive property insurance",
          },
        ],
        [
          {
            title: "Mortgage Fees",
            aside: "Varies",
            body: "If applicable, consult with your lender for specific details",
          },
        ],
      ],
    },
    {
      title: "Monthly Costs",
      button: true,
      groups: [
        [
          {
            title: "Property Taxes",
            aside: "$1,250",
            body: "Approximate monthly property tax based on the sale price",
          },
        ],
        [
          {
            title: "Homeowners' Association Fee",
            aside: "$300",
            body: "Monthly fee for common area maintenance and security",
          },
        ],
      ],
    },
    {
      title: "Total Initial Costs",
      button: true,
      groups: [
        [
          {
            title: "Listing Price",
            aside: `$${price}`,
            border: true,
          },
          {
            title: "Additional Fees",
            aside: "$29,700",
            body: "Taxes, legal fees, inspection, insurance",
          },
        ],
        [
          {
            title: "Down Payment",
            aside: "$250,000",
            body: "20%",
            border: true,
            roundedClass: "max-md:rounded-[28px]",
          },
          {
            title: "Mortgage Amount",
            aside: "$1,000,000",
            body: "If applicable",
            roundedClass: "max-md:rounded-[28px]",
          },
        ],
      ],
    },
    {
      title: "Monthly Expenses",
      button: true,
      groups: [
        [
          {
            title: "Property Taxes",
            aside: "$1,250",
            border: true,
          },
          {
            title: "Homeowners' Association Fee",
            aside: "$300",
          },
        ],
        [
          {
            title: "Mortgage Payment",
            aside: "Varies",
            body: "Based on terms & interest rate",
            border: true,
          },
          {
            title: "Property Insurance",
            aside: "$100",
            body: "Approximate monthly cost",
            roundedClass: "max-md:rounded-[28px]",
          },
        ],
      ],
    },
  ];

  return (
    <section className="max_container flex flex-col gap-20 max-laptop:gap-15 max-sm:gap-10">
      <SpecialHeading
        grayClass="max-w-[1296px]"
        title="Comprehensive Pricing Details"
        description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
      />
      <div className="flex flex-col gap-12.5 max-laptop:gap-10 max-sm:gap-7.5">
        <div className="rounded-xl border border-gray-15 bg-gray-10 py-7.5 px-12.5 flex sm:items-center gap-10 max-laptop:px-10 max-laptop:py-5 max-laptop:gap-8 max-sm:gap-0 max-sm:flex-col max-sm:px-5 max-sm:py-6 max-sm:rounded-lg">
          <div className="relative max-sm:pb-2.5 max-sm:border-b max-sm:border-gray-15">
            <p className="semi_bold_font">Note</p>
            <div className="absolute w-px inset-y-0 -right-5 bg-gray-15 max-laptop:-right-4 max-sm:hidden" />
          </div>
          <p className="gray_text max-sm:pt-2.5">
            The figures provided above are estimates and may vary depending on
            the property, location, and individual circumstances.
          </p>
        </div>

        <div className="flex items-start gap-12.5 max-laptop:gap-10 max-lg:flex-col max-md:gap-5">
          <div className="flex flex-col gap-0.5 md:sticky top-5">
            <p className="gray_text">Listing Price</p>
            <p className="text-white font-semibold text-[40px] max-laptop:text-[30px] max-lg:text-[24px]">
              ${price}
            </p>
          </div>

          <div className="flex flex-col gap-12.5 max-laptop:gap-10 max-md:gap-5 w-full">
            {pricingData.map((section) => (
              <div
                key={section.title}
                className="p-12.5 border rounded-xl border-gray-15 flex flex-col gap-20 max-laptop:p-10 max-laptop:gap-15 max-md:p-5 max-md:gap-0"
              >
                <div className="flex justify-between items-center gap-10 relative max-md:pb-5 max-md:border-b max-md:border-gray-15">
                  <p className="semi_bold_font flex-1">{section.title}</p>
                  <Button color="gray">Learn More</Button>
                  <div className="absolute inset-x-0 h-px bg-gray-15 -bottom-10 max-laptop:-bottom-7.5 max-md:-bottom-5 max-md:hidden" />
                </div>

                {section.groups.map((row, i) => (
                  <div
                    key={i}
                    className="flex gap-10 *:flex-1 relative max-md:flex-col max-md:gap-0"
                  >
                    {row.map((item, index) => (
                      <PriceComponent
                        key={index}
                        {...item}
                        rightBorder={item.border}
                        rightBorderClass="-right-5"
                        className={
                          i === section.groups.length - 1 &&
                          index === row.length - 1
                            ? "max-md:pt-5"
                            : "max-md:py-5 max-md:border-b max-md:border-gray-15"
                        }
                      />
                    ))}

                    {i !== section.groups.length - 1 && (
                      <div className="absolute inset-x-0 h-px bg-gray-15 -bottom-10 max-laptop:-bottom-7.5 max-md:hidden" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
