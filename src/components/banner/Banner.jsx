// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-2xl "
      >
        <SwiperSlide>
          <img src="https://i.ibb.co.com/DDqM04T/1.png" alt="course image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/LZCYs7Q/3.png" alt="course image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/qd9KbZr/2.png" alt="course image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
