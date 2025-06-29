// src/app/components/ClientComponent/ClientComponent.tsx
"use client";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SwiperRef } from "swiper/react";
import { Bs1Circle, Bs2Circle, Bs3Circle } from "react-icons/bs";

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
        gsap.from(".swiper-slide-active .yellow", { y: "-1000", duration: 2 });
        gsap.from(".swiper-slide-active .image", { x: "-1000", duration: 2 });
        gsap.from(".swiper-slide-active .small", {
          y: "-100",
          opacity: 0,
          delay: 2.1,
        });
        // gsap.to('.swiper-slide-active .small', { y: '-100',x:"500", opacity: 1, delay: 2.1 });
        gsap.to(".swiper-slide-active .image", {
          y: "0",
          x: "-20",
          opacity: 1,
          delay: 2.1,
          stagger: 0.2,
        });
        gsap.from(".swiper-slide-active .arrow", {
          y: "100",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
        gsap.to(".swiper-slide-active .arrow", {
          fill: "#ff0000", // تغییر به قرمز
          duration: 1,
          color: "#ff0000",
          yoyo: true,
          repeat: -1, // تکرار بی‌نهایت
          delay: 2.1,
        });
        gsap.from(".swiper-slide-active .bot", {
          y: "100",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
        gsap.from(".swiper-slide-active .big span.after", {
          y: "150",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
        gsap.to(".swiper-slide-active .big span.after", {
          y: "00",
          x: "20",
          opacity: 1,
          delay: 2.1,
          stagger: 0.2,
        });

        gsap.from(".swiper-slide-active .big span.before", {
          y: "150",
          opacity: 0,
          delay: 2.1,
          stagger: 0.2,
        });
        gsap.to(".swiper-slide-active .big span.before", {
          y: "0",
          x: "-30",
          opacity: 1,
          delay: 2.1,
          stagger: 0.2,
        });
      } else if (active === 1) {
        // slide 2
         gsap.from(".swiper-slide-active .y", { y: "-1000", duration: 2 });
         gsap.from(".swiper-slide-active .y2", { y: "-1100", duration: 3 });
         gsap.to(".swiper-slide-active .y2", { y: "230", duration: 4 });
         gsap.from(".swiper-slide-active .y3", { y: "-1100", duration: 4.4 });
         gsap.to(".swiper-slide-active .y3", { y: "450", duration: 6.0 });


        gsap.from(".swiper-slide-active .content .title_number", {
          y: "100",
          x: "0",
          opacity: 0,
          delay: 1,
          stagger: 0.2,
          ease: "circ",
        });
        gsap.from(".swiper-slide-active .content .title", {
          y: "100",
          x: "0",
          opacity: 0,
          delay: 2,
          // stagger:0.5,
          ease: "circ",
        });
        gsap.to(".swiper-slide-active .content .title", {
          y: "-90",
          x: "-190",
          opacity: 1,
          delay: 2,
          // stagger:0.5,
          ease: "circ",
        });
        gsap.from(".swiper-slide-active .content .image2", {
          y: "100",
          x: "0",
          opacity: 0,
          delay: 2,
          // stagger:0.2,
          ease: "elastic.out",
        });
            gsap.from('.swiper-slide-active .content2 .title',{
          y:"100",
          x:"0",
          opacity:0,
          delay:2.5,
          stagger:0.2,
          ease:'circ',

        })
          gsap.to('.swiper-slide-active .content2 .title',{
          y:"0",
          x:"0",
          opacity:1,
          delay:3.6,
          stagger:0.2,
          ease:'circ'

        })
            gsap.from('.swiper-slide-active .content2 .image2',{
          y:"0",
          x:"100",
          opacity:0,
          delay:3,
          stagger:0.2,
          ease:'circ',

        })
          gsap.to('.swiper-slide-active .content2 .image2',{
          y:"0",
          x:"0",
          opacity:1,
          delay:3.2,
          stagger:0.2,
          ease:'circ'

        })
            gsap.from(".swiper-slide-active .content2 .title_number", {
          y: "100",
          x: "0",
          opacity: 0,
          delay: 2.5,
          stagger: 0.2,
          ease: "circ",
        });
        // 
         gsap.from('.swiper-slide-active .content3 .title',{
          y:"100",
          x:"0",
          opacity:0,
          delay:3.5,
          stagger:0.2,
          ease:'circ',

        })
          gsap.to('.swiper-slide-active .content3 .title',{
          y:"0",
          x:"0",
          opacity:1,
          delay:4.6,
          stagger:0.2,
          ease:'circ'

        })
            gsap.from('.swiper-slide-active .content3 .image3',{
          y:"0",
          x:"100",
          opacity:0,
          delay:4,
          stagger:0.2,
          ease:'circ',

        })
          gsap.to('.swiper-slide-active .content3 .image3',{
          y:"0",
          x:"0",
          opacity:1,
          delay:4.2,
          stagger:0.2,
          ease:'circ'

        })
            gsap.from(".swiper-slide-active .content3 .title_number", {
          y: "100",
          x: "0",
          opacity: 0,
          delay: 3.5,
          stagger: 0.2,
          ease: "circ",
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
        <SwiperSlide className="w-full h-full  relative">
          <div className="yellow  bg-pink-400"></div>
          <div className="black bg-black  w-[56%]" ></div>
          <div className="content w-full h-full ">
            <div className="title  absolute pb-[170px]">
              <div className="small  md:text-3xl  text-[17px]  w-full flex justify-end text-white">
                طراح لباس{" "}
              </div>
              <div className="big md:text-[200px] lg:text-[280px] text-[80px] md:top-0 top-[50px] text-white">
                <span className="before">N</span>
                <span className="before">A</span>
                <span className="after  ">D</span>
                <span className="after">I</span>
                <span className="after">A</span>
              </div>
            </div>
            <div className="image relative w-full h-96 md:h-1/2 lg:h-2/3 scale-125">
              <Image
                alt="تصویر"
                src="https://c713657.parspack.net/c713657/uploads/icone_main2.png"
                quality={100}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
                onError={() => console.error("Failed to load image")}
                // sizes="100vw"
                // style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="absolute bot right-0 bottom-28 p-2 gap-6 text-[#fffcef]  justify-center md:text-xl text-[17px] flex items-center w-full">
              <span>
                <b className="font-bold z-20">
                  اماده ای برای اغاز خلق یک اثر منحصر به فرد؟
                </b>
                <div
                  className=" z-20 text-5xl -rotate-90   w-fit arrow text-white cursor-pointer"
                  onClick={handleArrowClick}
                >
                  {" "}
                  <PiArrowBendDoubleUpLeftBold />
                </div>
              </span>
            </div>
          </div>
        </SwiperSlide>
        {/* اسلاید دوم برای تست */}
        <SwiperSlide className="w-full h-full relative">
          <div className="y  bg-pink-500 absolute left-0 h-[35%] right-0-0 w-[44%] z-10"></div>
          <div className="y2  bg-pink-500 absolute left-0 h-[35%] right-0-0 w-[44%] z-10"></div>
          <div className="y3  bg-pink-500 absolute left-0 h-[35%] right-0-0 w-[44%] z-10"></div>

          <div className="black  bg-black w-[56%]"></div>

          <div className="container_content h-full w-full gap-2 flex-col z-50 ">
            <div className="content  relative flex-1 h-[35%]">
              <div className="title_number font-bold z-50 text-[#fffcef] text-[40px] absolute top-[20px] sm:right-[100px] right-[40px]">
                <Bs1Circle />
              </div>
              <div
                className="title sm:text-2xl text-[20px] right-[30px] absolute top-[240px]  w-[150px] sm:w-full flex z-50  h-fit "
                dir="rtl"
              >
                اول اندازه هایت را دقیق یادداشت میکنم
              </div>
              <div className="image2 flex z-50 absolute top-[50px] sm:right-[100px] right-[50px] sm:w-[300px] w-[200px] h-[100px] sm:h-[300px]  rounded-2xl overflow-hidden ">
                <Image
                  alt="تصویر دوم"
                  src="https://c713657.parspack.net/c713657/uploads/pngwing.com%20%2839%29.png"
                  quality={100}
                  fill
                  className="  w-full h-fit"
                  // sizes="100px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* <div className="absolute bottom-10 p-2 gap-4 text-[#fffcef] justify-center text-xl flex items-center w-full">
                <span>
                  <b className="font-bold z-20">
                    <Bs1Circle />
                  </b>
                </span>
              </div> */}
            </div>
            {/*  */}
            <div className="content2 relative z-50  w-full  flex justify-center items-center h-[35%] text-white ">
              
              <div className="title_number font-bold z-50 text-[#fffcef] text-[40px] absolute top-[15px] sm:right-[100px] right-[40px]">
                <Bs2Circle />
              </div>
               <div
                className="title sm:text-2xl text-[20px] -left-[14px] absolute top-[150px]  w-[150px] sm:w-full flex   h-fit "
                dir="rtl"
              >
                الگو میکشم برای لباس خوشگلت
              </div>
              <div className="image2 flex absolute top-[50px] sm:right-[100px] right-[60px] sm:w-[300px] w-[200px] h-[100px] sm:h-[300px]  rounded-2xl overflow-hidden ">
                <Image
                  alt="تصویر دوم"
                  src="https://c713657.parspack.net/c713657/uploads/sqq.png"
                  quality={100}
                  fill
                  className="  w-full h-fit"
                  // sizes="100px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            {/*  */}
            <div className="content3 relative  z-50 w-full  flex justify-center items-center h-[35%] text-white ">
              <div className="title_number font-bold z-50 text-[#fffcef] text-[40px] absolute top-[15px] sm:right-[100px] right-[40px]">
                <Bs3Circle />
              </div>
               <div
                className="title sm:text-2xl text-[20px] left-[10px] absolute top-[110px]  w-[150px] sm:w-full flex   h-fit "
                dir="rtl"
              >
                پارچه منحصر به فرد خودتو برش میدم
              </div>
              <div className="image3 flex absolute top-[40px] sm:right-[100px] right-[40px] sm:w-[300px] w-[200px] h-[100px] sm:h-[300px]  rounded-2xl overflow-hidden ">
                <Image
                  alt="تصویر دوم"
                  src="https://c713657.parspack.net/c713657/uploads/sciq.png"
                  quality={100}
                  fill
                  className="  w-full h-fit scale-125"
                  // sizes="100px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </div>
  );
};

export default ClientComponent;
