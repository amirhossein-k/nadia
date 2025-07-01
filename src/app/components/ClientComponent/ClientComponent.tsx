// src/app/components/ClientComponent/ClientComponent.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SwiperRef } from "swiper/react";
import Slide1 from "../Slides/Slide1/Slide1";
import Slide2 from "../Slides/Slide2/Slide2";
import Slide3 from "../Slides/Slide3/Slide3";
import { animateSlide1, animateSlide2, animateSlide3 } from "@/features/StyleGsap";

const ClientComponent = () => {
  const [active, setActive] = useState<number>(0);
  const swiperContainer = useRef<HTMLDivElement | null>(null); // ref برای المنت DOM
  const swiperRef = useRef<SwiperRef | null>(null); // ref برای نمونه Swiper

  // تابع برای انتقال به اسلاید دوم
  const handleArrowClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(1); // انتقال به اسلاید دوم (اندیس 1)
    }
  };

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (active === 0) animateSlide1();
      else if (active === 1) animateSlide2();
      else if (active === 2) animateSlide3();
    }, swiperContainer);
    return () => ctx.revert();
  }, [active]);

  return (
    <div ref={swiperContainer} className="w-full h-screen ">
      <Swiper
        ref={swiperRef}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"><span>${String(
              index + 1
            ).padStart(2, "0")}</span></span>`;
          },
        }}
        onActiveIndexChange={(swiper) => {
          console.log(swiper);
          setActive(swiper.activeIndex);
          console.log(active);
        }}
        speed={1000}
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide>
          <Slide1 handleArrowClick={handleArrowClick} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </div>
  );
};

export default ClientComponent;
