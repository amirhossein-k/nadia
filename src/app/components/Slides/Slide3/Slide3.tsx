import React from "react";
import { BiSolidPhone } from "react-icons/bi";
import { RiTelegramFill } from "react-icons/ri";

const Slide3 = () => {
  return (
    <div className="w-full h-full  relative">
      <div className="yellow  bg-pink-400"></div>
      <div className="black bg-black  w-[56%]"></div>
      <div className="content3 w-full h-full flex flex-col relative">
        {/*  */}
        <div className="title relative flex  w-full h-full">
          <div
            className="sub  md:text-3xl absolute top-[180px]  text-[25px] right-[40px]  h-fit w-[52%]  flex justify-end text-white"
            dir="rtl"
          >
            برای داشتن لباس رویاییت میتونی از طریق راه های ارتباطی زیر با من در
            ارتباط باشی
          </div>
          {/*  */}
          <div className="bg-red-200 ">
            <div className="one absolute  flex justify-center items-center top-[360px] lg:w-[200px] xl:right-[200px] md:w-[100px] right-[100px]  w-[60px] h-[60px]  md:text-[55px] lg:text-[65px] text-[30px] text-white">
              <span className="phone ">
                <BiSolidPhone />
              </span>
            </div>
            <span className="one_one absolute flex justify-center items-center top-[360px] md:top-[400px] lg:w-[300px] xl:left-[200px] md:w-[300px] md:left-[200px] lg:left-[100px] left-[100px]  h-[60px]  md:text-[55px] lg:text-[65px] text-[30px]">
              0933181326
            </span>
          </div>
          {/*  */}
          <div className="">
            <div className="two absolute  flex justify-center items-center top-[510px] lg:w-[200px] xl:right-[200px] md:w-[100px] right-[100px]  w-[60px] h-[60px]  md:text-[55px] lg:text-[65px] text-[30px] text-white">
              <span className="phone ">
                <RiTelegramFill />
              </span>
            </div>
            <span className="two_two absolute flex justify-center items-center top-[510px] md:top-[550px] lg:w-[300px] xl:left-[200px] md:w-[300px] md:left-[200px] lg:left-[100px] left-[100px]  h-[60px]  md:text-[55px] lg:text-[65px] text-[30px]">
              n6dii6
            </span>
          </div>
          <div className=" ">
            <div className=" absolute  flex justify-center items-center top-[610px] lg:w-[200px] xl:right-[200px] md:w-[100px] right-[100px]  w-[60px] h-[60px]  md:text-[55px] lg:text-[65px] text-[30px] text-white"></div>
            <span className="three absolute flex justify-center items-center top-[660px] md:top-[700px] lg:w-[700px] xl:left-[380px] md:w-[600px] md:left-[180px] lg:left-[190px] left-[80px] sm:left-[200px] h-[60px]  md:text-[55px] lg:text-[65px] text-[30px]">
              خبرهای خوشی در راه است
            </span>
          </div>
        </div>
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Slide3;
