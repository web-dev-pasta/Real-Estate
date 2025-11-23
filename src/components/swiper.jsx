"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import arrow from "@/../public/assets/images/arrow.svg";

import { Autoplay } from "swiper/modules";
import PropertiesCard from "./home/properties-card";
import Button from "./button";
import Image from "next/image";
import ClientCard from "./home/client-card";
import QuestionCard from "./home/question-card";
import ClientsBox from "./about/clients-box";

export default function Slider({ cards, id, buttonText }) {
  const swiper1Ref = useRef(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(cards?.length);

  const updateButtons = (swiper) => {
    const totalSlides = swiper.slides.length;
    const perView = swiper.params.slidesPerView;
    const perGroup = swiper.params.slidesPerGroup || perView;

    const pages = Math.ceil(totalSlides / perGroup);
    setTotalPages(pages);
    let page;
    if (swiper.isEnd) {
      page = pages;
    } else {
      page = Math.floor(swiper.activeIndex / perGroup) + 1;
    }

    setCurrentPage(page);
    setDisablePrev(swiper.isBeginning);
    setDisableNext(swiper.isEnd);
  };
  const renderSlides = () => {
    if (id === 1) {
      return cards?.map(({ image, title, description, data, price }, i) => (
        <SwiperSlide key={i} className="h-auto!">
          <PropertiesCard
            image={image}
            price={price}
            data={data}
            description={description}
            title={title}
          />
        </SwiperSlide>
      ));
    }

    if (id === 2) {
      return cards?.map(
        ({ title, description, user: { image, alt, name, location } }, i) => (
          <SwiperSlide key={i} className="h-auto!">
            <ClientCard
              title={title}
              description={description}
              image={image}
              alt={alt}
              name={name}
              location={location}
            />
          </SwiperSlide>
        )
      );
    }

    if (id === 3) {
      return cards?.map(({ title, description }, i) => (
        <SwiperSlide key={i} className="h-auto!">
          <QuestionCard title={title} description={description} />
        </SwiperSlide>
      ));
    }
    if (id === 4) {
      return cards?.map(({ date, title, domain, category, comment }, i) => (
        <SwiperSlide key={i} className="h-auto!">
          <ClientsBox
            date={date}
            title={title}
            domain={domain}
            category={category}
            comment={comment}
          />
        </SwiperSlide>
      ));
    }
  };

  return (
    <>
      <Swiper
        // autoplay={{
        //   delay: 300,
        // }}
        onSwiper={(swiper) => {
          swiper1Ref.current = swiper;
          updateButtons(swiper);
        }}
        onResize={(swiper) => updateButtons(swiper)}
        onSlideChange={(swiper) => updateButtons(swiper)}
        modules={[Autoplay]}
        allowTouchMove={true}
        slidesPerView={id === 4 ? 2 : 3}
        className="mySwiper max-w-container pb-12.5! max-laptop:pb-10! max-sm:pb-7.5!"
        slidesPerGroup={id === 4 ? 2 : 3}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          768: {
            slidesPerView: id === 4 ? 1 : 2,
            slidesPerGroup: id === 4 ? 1 : 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: id === 4 ? 2 : 3,
            slidesPerGroup: id === 4 ? 2 : 3,
            spaceBetween: id === 4 ? 40 : 30,
          },
          1440: { spaceBetween: id === 4 ? 50 : 30 },
        }}
      >
        {renderSlides()}
      </Swiper>
      <div className="flex justify-between border-t border-gray-15 pt-5 max-md:hidden">
        <div className="text-[20px] max-laptop:text-[16px]">
          <span className="text-white">
            {String(currentPage).padStart(2, "0")}{" "}
          </span>
          <span className="text-gray-09">
            of {String(totalPages).padStart(2, "0")}
          </span>
        </div>
        <div className="buttons flex gap-2.5">
          <div
            className={`left aspect-square w-[58px] max-laptop:w-11 rotate-180 ${
              disablePrev ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => swiper1Ref.current?.slidePrev()}
          >
            <Image src={arrow} className="w-full h-full" alt="left-arrow" />
          </div>
          <div
            className={`right aspect-square w-[58px] max-laptop:w-11 ${
              disableNext ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => swiper1Ref.current?.slideNext()}
          >
            <Image src={arrow} className="w-full h-full" alt="right-arrow" />
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between border-t border-gray-15 pt-4 gap-3 max-tiny-mobile:flex-col items-center md:hidden ${
          !buttonText && `pt-0! border-none!`
        }`}
      >
        {buttonText && (
          <Button color="gray" className="whitespace-nowrap">
            {buttonText}
          </Button>
        )}

        <div
          className={`pagination flex items-center gap-2.5 justify-between w-40 ${
            !buttonText && `flex-1`
          }`}
        >
          <div
            className={`aspect-square w-[58px] max-laptop:w-11 rotate-180 ${
              disablePrev ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => swiper1Ref.current?.slidePrev()}
          >
            <Image src={arrow} className="w-full h-full" alt="left-arrow" />
          </div>
          <p className="text-white text-sm">
            {String(currentPage).padStart(2, "0")}{" "}
            <span className="text-gray-09">
              of {String(totalPages).padStart(2, "0")}
            </span>
          </p>
          <div
            className={`aspect-square w-[58px] max-laptop:w-11 ${
              disableNext ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => swiper1Ref.current?.slideNext()}
          >
            <Image src={arrow} className="w-full h-full" alt="right-arrow" />
          </div>
        </div>
      </div>
    </>
  );
}
