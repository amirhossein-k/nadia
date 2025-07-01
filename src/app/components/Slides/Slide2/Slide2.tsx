import Image from 'next/image'
import React from 'react'
import { Bs1Circle, Bs2Circle, Bs3Circle } from 'react-icons/bs'

const Slide2 = () => {
  return (
    <div className="w-full h-full relative ">
          <div className="y  bg-pink-500 absolute left-0 h-[35%] right-0-0 w-[44%] z-10"></div>
          <div className="y2  bg-pink-500 absolute left-0 h-[35%] right-0-0 w-[44%] z-10"></div>
          <div className="y3  bg-pink-500 absolute left-0 h-[45%] right-0-0 w-[44%] z-10"></div>

          <div className="black  bg-black w-[56%]"></div>

          <div className="container_content h-full w-full gap-2 flex-col z-50 ">
            <div className="content  relative flex-1 h-[35%]">
              <div className="title_number font-bold z-50 text-[#fffcef] text-[40px] absolute top-[20px] sm:right-[100px] right-[40px]">
                <Bs1Circle />
              </div>
              <div
                className="title sm:text-2xl lg:text-4xl text-[20px] justify-end  left-[10px] md:right-[160px] md:left-auto  xl:right-[60px] bsolute top-[240px] sm:top-[320px]  w-[150px] sm:w-[65%] md:w-[72%] lg:w-[80%]  flex z-50  h-fit "
                dir="rtl"
              >
                اول اندازه هایت را دقیق یادداشت میکنم
              </div>
              <div className="image2 flex z-50 absolute top-[50px] sm:top-[30px]  sm:right-[100px] md:right-[180px] lg:right-[250px] right-[50px] sm:w-[250px] md:w-[300px] xl:w-[350px] w-[200px] h-[100px] sm:h-[300px]  rounded-2xl overflow-hidden ">
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
                className="title sm:text-2xl lg:text-4xl text-[20px]    left-[10px] md:right-[160px] md:left-auto  xl:right-[60px] absolute top-[150px] sm:top-[260px] justify-end   w-[150px] sm:w-[65%] md:w-[72%] lg:w-[80%]  flex   z-50 h-fit "
                dir="rtl"
              >
                الگو میکشم برای لباس خوشگلت
              </div>
              <div className="image2 flex z-50 absolute top-[50px] sm:top-[30px]  sm:right-[100px] md:right-[180px] lg:right-[250px] right-[50px] sm:w-[250px] md:w-[250px] lg:w-[300px] xl:w-[300px] w-[200px] h-[100px] sm:h-[300px]  rounded-2xl overflow-hidden  ">
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
            <div className="content3 relative  w-full z-50  flex justify-center items-center h-[35%] text-white  ">
              <div className="title_number font-bold z-50 text-[#fffcef] text-[40px] absolute top-[15px] sm:right-[100px] right-[40px]">
                <Bs3Circle />
              </div>
               <div
                className=" title sm:text-2xl lg:text-4xl text-[20px] left-[10px] md:right-[160px] md:left-auto  xl:right-[60px]   absolute top-[110px] sm:top-[180px] justify-end   w-[150px] sm:w-[65%] md:w-[75%] lg:w-[80%]  flex   z-50 h-fit "
                dir="rtl"
              >
                پارچه منحصر به فرد خودتو برش میدم
              </div>
              <div className="image3  flex z-50 absolute top-[50px] sm:top-[30px]  sm:right-[100px] md:right-[180px] lg:right-[250px] right-[50px] sm:w-[250px] md:w-[300px] xl:w-[350px] w-[200px] h-[100px] sm:h-[300px]  rounded-2xl overflow-hidden  ">
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
        </div>
  )
}

export default Slide2
