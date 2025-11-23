import SwiperComponent from "@/components/swiper-component";
import imageOne from "@/../public/assets/images/properties-1.jpg";
import imageTwo from "@/../public/assets/images/properties-2.jpg";
import imageThree from "@/../public/assets/images/properties-3.jpg";
import imageFour from "@/../public/assets/images/properties-4.jpg";
import imageFive from "@/../public/assets/images/properties-5.jpg";
import imageSix from "@/../public/assets/images/properties-6.jpg";
import imageSeven from "@/../public/assets/images/properties-7.jpg";
import imageEight from "@/../public/assets/images/properties-8.jpg";
import imageNine from "@/../public/assets/images/properties-9.jpg";
import Slider from "@/components/swiper";
function PropertiesPossibilities() {
  const cards = [
    {
      image: imageOne,
      price: "125,000",
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa with open sea views, private garden, and modern interior.",
      noData: "Coastal Escapes - Where Waves Beckon",
    },
    {
      image: imageTwo,
      price: "650,000",
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment located in the heart of the city with skyline views.",
      noData: "Urban Oasis - Life in the Heart of the City",
    },
    {
      image: imageThree,
      price: "350,000",
      title: "Rustic Retreat Cottage",
      description:
        "A cozy 3-bedroom cottage surrounded by greenery, featuring a spacious backyard and wooden décor.",
      noData: "Countryside Charm - Escape to Nature",
    },
    {
      image: imageFour,
      price: "620,000",
      title: "Urban Luxe Residence",
      description:
        "A modern 3-bedroom high-rise apartment with smart-home features and a private balcony.",
      noData: "City Living - Modern Comfort at New Heights",
    },
    {
      image: imageFive,
      price: "780,000",
      title: "Palm View Mansion",
      description:
        "A luxurious 5-bedroom mansion with a pool, large terrace, and premium finishing touches.",
      noData: "Luxury Living - Elegance with Every View",
    },
    {
      image: imageSix,
      price: "390,000",
      title: "Countryside Family Home",
      description:
        "A peaceful 3-bedroom family house in the countryside with a big garden and fresh air.",
      noData: "Rural Bliss - A Home Wrapped in Nature",
    },
    {
      image: imageSeven,
      price: "950,000",
      title: "Skyline Penthouse Suite",
      description:
        "An ultra-modern penthouse with panoramic skyline views, large terrace, and private elevator access.",
      noData: "Sky-High Luxury - Where Style Meets the Horizon",
    },
    {
      image: imageEight,
      price: "330,000",
      title: "Suburban Cozy Apartment",
      description:
        "A warm and welcoming 2-bedroom apartment located in a safe suburban neighborhood.",
      noData: "Suburban Comfort - Peaceful Living Awaits",
    },
    {
      image: imageNine,
      price: "1,200,000",
      title: "Luxury Waterfront Estate",
      description:
        "A breathtaking waterfront home with private dock, infinity pool, and premium high-end design.",
      noData: "Waterfront Grandeur - Life by the Waves",
    },
  ];

  return (
    <>
      <SwiperComponent
        header="Discover a World of Possibilities"
        description={`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home`}
        grayClass={"max-w-full"}
      >
        <Slider cards={cards} id={5} />
      </SwiperComponent>
    </>
  );
}

export default PropertiesPossibilities;
