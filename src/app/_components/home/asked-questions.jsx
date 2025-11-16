import Swiper from "@/components/swiper";
import React from "react";

function AskedQuestions() {
  return (
    <Swiper
      header="Frequently Asked Questions"
      description={`Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}
      buttonText="View All FAQ’s"
      className="mb-24 max-laptop:mb-18 max-sm:mb-20"
    >
      FeatureProperties
    </Swiper>
  );
}

export default AskedQuestions;
