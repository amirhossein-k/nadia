import Image from 'next/image'
import React from 'react'
import { PiArrowBendDoubleUpLeftBold } from 'react-icons/pi'

interface SlideProps {
    handleArrowClick:()=>void
}

const Slide1:React.FC<SlideProps> = ({handleArrowClick}) => {
  return (
    <div className="w-full h-full  relative">
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
        </div>
  )
}

export default Slide1
