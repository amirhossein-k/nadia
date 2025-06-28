// src/app/components/ClientComponent/ClientComponent.tsx
'use client';
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { SwiperRef } from 'swiper/react';

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
      if (active === 0) {
        gsap.from('.swiper-slide-active .yellow', { y: '-1000', duration: 2 });
        gsap.from('.swiper-slide-active .image', { x: '-1000', duration: 2 });
        gsap.from('.swiper-slide-active .small', { y: '-100', opacity: 0, delay: 2.1 });
        // gsap.to('.swiper-slide-active .small', { y: '-100',x:"500", opacity: 1, delay: 2.1 });
          gsap.to('.swiper-slide-active .image', {
          y: '0',
          x:"-20",
          opacity: 1,
          delay: 2.1,
          stagger: 0.2,
        });
           gsap.from('.swiper-slide-active .arrow', {
          y: '100',
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
          
        });
         gsap.to('.swiper-slide-active .arrow', {
          fill: '#ff0000', // تغییر به قرمز
          duration: 1,
         color:"#ff0000",
          yoyo: true,
          repeat: -1, // تکرار بی‌نهایت
          delay: 2.1,
        });
          gsap.from('.swiper-slide-active .bot', {
          y: '100',
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
           gsap.from('.swiper-slide-active .big span.after', {
          y: '150',
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
         gsap.to('.swiper-slide-active .big span.after', {
          y:"00",
          x:'20',
          opacity: 1,
          delay: 2.1,
          stagger: 0.2,
        });

     
        gsap.from('.swiper-slide-active .big span.before', {
          y: '150',
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
               gsap.to('.swiper-slide-active .big span.before', {
          y: '0',
          x:"-30",
          opacity: 1,
          delay: 2.1,
          stagger: 0.2,
        });
     
      }
    }, swiperContainer); // استفاده از ref برای المنت DOM
    return () => ctx.revert();
  }, [active]);

  return (
    <div ref={swiperContainer} className="w-full h-screen ">
      <Swiper
      ref={swiperRef}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"><span>${String(index + 1).padStart(2, '0')}</span></span>`;
          },
        }}
        onActiveIndexChange={(swiper) => {
          console.log(swiper);
          setActive(swiper.activeIndex);
          console.log(active)
        }}
        speed={1000}
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper w-full h-screen"
      >
        <SwiperSlide className="w-full h-full  relative">
          <div className="yellow  bg-pink-400"></div>
          <div className="black bg-black"></div>
          <div className="content ">
            <div className="title ">
            <div className="small  md:text-3xl  text-[17px]  w-full flex justify-end text-white">طراح لباس </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[80px] md:top-0 top-[50px] text-white">
                <span className='before'>N</span>
                <span className='before'>A</span>
                <span className='after  '>D</span>
                <span className='after'>I</span>
                <span className='after'>A</span>
              </div>
            </div>
            <div className="image relative w-full h-96 md:h-1/2 lg:h-2/3 scale-125">
              <Image
                alt="تصویر"
                src="https://c713657.parspack.net/c713657/uploads/icone_main2.png"
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
                onError={() => console.error('Failed to load image')}
                // sizes="100vw"
                // style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="absolute bot right-0 bottom-28 p-2 gap-6 text-[#fffcef]  justify-center md:text-xl text-[17px] flex items-center w-full">
              <span>
                <b className="font-bold z-20">اماده ای برای اغاز خلق یک اثر منحصر به فرد؟</b> 
              <div className=" z-20 text-5xl -rotate-90   w-fit arrow text-white cursor-pointer" onClick={handleArrowClick}  >  <PiArrowBendDoubleUpLeftBold />
</div>
              </span>
            </div>
          </div>
        </SwiperSlide>
        {/* اسلاید دوم برای تست */}
        <SwiperSlide className="w-full h-full">
          <div className="yellow w-1/2 h-1/2 bg-yellow-500"></div>
          <div className="black w-1/2 h-1/2 bg-black"></div>
          <div className="content">
            <div className="title">
              <div className="small text-sm text-white">متن کوچک دوم</div>
              <div className="big md:text-[200px] lg:text-[280px] text-[150px] md:top-0 top-[50px] text-white">
                <span>T</span>
                <span>E</span>
                <span>S</span>
                <span>T</span>
              </div>
            </div>
            <div className="image relative w-full h-64">
              <Image
                alt="تصویر دوم"
                src="https://c713657.parspack.net/c713657/uploads/icone_main2.png"
                quality={100}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="absolute bottom-10 p-2 gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
              <span>
                <b className="font-bold z-20">200</b> MPH
              </span>
            </div>
          </div>
        </SwiperSlide>
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </div>
  );
};

export default ClientComponent;