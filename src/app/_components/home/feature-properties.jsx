import SwiperComponent from "@/components/swiper-component";
import React from "react";
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

function FeatureProperties() {
  const cards = [
    {
      image: imageOne,
      price: "550,000",
      title: "Seaside Serenity Villa",
      description:
        "A stunning 4-bedroom, 3-bathroom villa with open sea views, private garden, and modern interior.",
      data: [{ id: 1, number: 4 }, { id: 2, number: 3 }, { id: 3 }],
    },
    {
      image: imageTwo,
      price: "450,000",
      title: "Metropolitan Haven",
      description:
        "A chic and fully-furnished 2-bedroom apartment located in the heart of the city with skyline views.",
      data: [{ id: 1, number: 2 }, { id: 2, number: 2 }, { id: 4 }],
    },
    {
      image: imageThree,
      price: "500,000",
      title: "Rustic Retreat Cottage",
      description:
        "A cozy 3-bedroom cottage surrounded by greenery, featuring a spacious backyard and wooden décor.",
      data: [{ id: 1, number: 3 }, { id: 2, number: 2 }, { id: 3 }],
    },
    {
      image: imageFour,
      price: "620,000",
      title: "Urban Luxe Residence",
      description:
        "A modern 3-bedroom high-rise apartment with smart-home features and a private balcony.",
      data: [{ id: 1, number: 3 }, { id: 2, number: 3 }, { id: 4 }],
    },
    {
      image: imageFive,
      price: "780,000",
      title: "Palm View Mansion",
      description:
        "A luxurious 5-bedroom mansion with a pool, large terrace, and premium finishing touches.",
      data: [{ id: 1, number: 5 }, { id: 2, number: 4 }, { id: 4 }],
    },
    {
      image: imageSix,
      price: "390,000",
      title: "Countryside Family Home",
      description:
        "A peaceful 3-bedroom family house in the countryside with a big garden and fresh air.",
      data: [{ id: 1, number: 3 }, { id: 2, number: 2 }, { id: 3 }],
    },
    {
      image: imageSeven,
      price: "950,000",
      title: "Skyline Penthouse Suite",
      description:
        "An ultra-modern penthouse with panoramic skyline views, large terrace, and private elevator access.",
      data: [{ id: 1, number: 4 }, { id: 2, number: 4 }, { id: 3 }],
    },
    {
      image: imageEight,
      price: "330,000",
      title: "Suburban Cozy Apartment",
      description:
        "A warm and welcoming 2-bedroom apartment located in a safe suburban neighborhood.",
      data: [{ id: 1, number: 2 }, { id: 2, number: 1 }, { id: 3 }],
    },
    {
      image: imageNine,
      price: "1,200,000",
      title: "Luxury Waterfront Estate",
      description:
        "A breathtaking waterfront home with private dock, infinity pool, and premium high-end design.",
      data: [{ id: 1, number: 6 }, { id: 2, number: 5 }, { id: 4 }],
    },
  ];

  return (
    <>
      <SwiperComponent
        header="Featured Properties"
        id="home-featured"
        description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.`}
        hiddenText={` Click "View Details" for more information.`}
        buttonText="View All Properties"
        link="/properties"
      >
        <Slider
          cards={cards}
          buttonText="View All Properties"
          length={Math.ceil(cards.length / 3)}
          id={1}
        />
      </SwiperComponent>
    </>
  );
}

export default FeatureProperties;
