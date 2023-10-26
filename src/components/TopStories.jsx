import React from "react";
import { story } from "../data/data";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import StoriesCard from "./sub-components/StoriesCard";

const TopStories = () => {
  return (
    <>
      <p className="relative text-5xl sm:text-4xl sm:mb-2 font-extrabold my-10">
        {story.title}
      </p>
      <div>
        <Swiper
          breakpoints={{
            375: {
              width: 375,
              slidesPerView: 2,
              spaceBetween: 30,
            },
            550: {
              width: 550,
              slidesPerView: 2,
              spaceBetween: 30,
            },
            767: {
              width: 767,
              slidesPerView: 3,
              spaceBetween: 30,
            },
            991: {
              width: 991,
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1200: {
              width: 1200,
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, dragSize: "20px" }}
        >
          {story?.news?.map((item, i) => (
            <SwiperSlide key={i} className="flex cursor-pointer">
              <StoriesCard
                title={item.title}
                text={item.text}
                img={item.img}
                url={item.url}
                like={item.like}
                time={item.time}
                by={item.by}
                btn={item.btn}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopStories;
