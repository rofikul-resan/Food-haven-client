import React, { useRef, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      autoplay={{
        delay: 250,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/slider1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slider3.jpeg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/slider4.jpeg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
