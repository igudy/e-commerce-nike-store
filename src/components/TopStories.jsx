import React from "react";
import { story } from "../data/data";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const TopStories = () => {
  return (
    <>
      <p className="relative text-5xl sm:text-4xl sm:mb-2 font-extrabold my-10">
        {story.title}
      </p>
      <div>
        <Swiper
          breakpoints={{
            // when window width is >= 375px
            375: {
              width: 375,
              slidesPerView: 2,
            },
            550: {
              width: 550,
              slidesPerView: 2,
            },
            767: {
              width: 767,
              slidesPerView: 3,
            },
            991: {
              width: 991,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {/* {slides.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCards
            title={item.title}
            text={item.text}
            rating={item.rating}
            btn={item.btn}
            img={item.img}
            price={item.price}
            color={item.color}
            shadow={item.shadow}
          />
        </SwiperSlide>
      ))} */}
          {/* Add news here */}
        </Swiper>
      </div>
    </>
  );
};

export default TopStories;
