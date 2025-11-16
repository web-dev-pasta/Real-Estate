import Swiper from "@/components/swiper";
import React from "react";

function FeatureProperties() {
  return (
    <Swiper
      header="Featured Properties"
      description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.`}
      hiddenText={` Click "View Details" for more information.`}
      buttonText="View All Properties"
    >
      FeatureProperties
    </Swiper>
  );
}

export default FeatureProperties;
