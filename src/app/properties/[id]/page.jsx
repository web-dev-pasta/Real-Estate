import imageOne from "@/../public/assets/images/properties-1.jpg";
import imageTwo from "@/../public/assets/images/properties-2.jpg";
import imageThree from "@/../public/assets/images/properties-3.jpg";
import imageFour from "@/../public/assets/images/properties-4.jpg";
import imageFive from "@/../public/assets/images/properties-5.jpg";
import imageSix from "@/../public/assets/images/properties-6.jpg";
import imageSeven from "@/../public/assets/images/properties-7.jpg";
import imageEight from "@/../public/assets/images/properties-8.jpg";
import imageNine from "@/../public/assets/images/properties-9.jpg";
import Hero from "./hero";
import { notFound } from "next/navigation";
import PropForm from "./prop-form";
async function SingleProperty({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const cards = {
    1: {
      image: imageOne,
      price: "125,000",
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa with open sea views, private garden, and modern interior.",
      noData: "Coastal Escapes - Where Waves Beckon",
    },
    2: {
      image: imageTwo,
      price: "650,000",
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment located in the heart of the city with skyline views.",
      noData: "Urban Oasis - Life in the Heart of the City",
    },
    3: {
      image: imageThree,
      price: "350,000",
      title: "Rustic Retreat Cottage",
      description:
        "A cozy 3-bedroom cottage surrounded by greenery, featuring a spacious backyard and wooden décor.",
      noData: "Countryside Charm - Escape to Nature",
    },
    4: {
      image: imageFour,
      price: "620,000",
      title: "Urban Luxe Residence",
      description:
        "A modern 3-bedroom high-rise apartment with smart-home features and a private balcony.",
      noData: "City Living - Modern Comfort at New Heights",
    },
    5: {
      image: imageFive,
      price: "780,000",
      title: "Palm View Mansion",
      description:
        "A luxurious 5-bedroom mansion with a pool, large terrace, and premium finishing touches.",
      noData: "Luxury Living - Elegance with Every View",
    },
    6: {
      image: imageSix,
      price: "390,000",
      title: "Countryside Family Home",
      description:
        "A peaceful 3-bedroom family house in the countryside with a big garden and fresh air.",
      noData: "Rural Bliss - A Home Wrapped in Nature",
    },
    7: {
      image: imageSeven,
      price: "950,000",
      title: "Skyline Penthouse Suite",
      description:
        "An ultra-modern penthouse with panoramic skyline views, large terrace, and private elevator access.",
      noData: "Sky-High Luxury - Where Style Meets the Horizon",
    },
    8: {
      image: imageEight,
      price: "330,000",
      title: "Suburban Cozy Apartment",
      description:
        "A warm and welcoming 2-bedroom apartment located in a safe suburban neighborhood.",
      noData: "Suburban Comfort - Peaceful Living Awaits",
    },
    9: {
      image: imageNine,
      price: "1,200,000",
      title: "Luxury Waterfront Estate",
      description:
        "A breathtaking waterfront home with private dock, infinity pool, and premium high-end design.",
      noData: "Waterfront Grandeur - Life by the Waves",
    },
  };
  const keys = Object.keys(cards);
  if (!keys.includes(id)) {
    return notFound();
  }
  const title = cards[id].title;

  return (
    <>
      <Hero cards={cards} id={id} />
      <PropForm title={title} />
    </>
  );
}

export default SingleProperty;
