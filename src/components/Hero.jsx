import React from "react";
import Navbar from "./Navbar";
import { heroapi } from "../data/data";

const Hero = () => {
  return (
    <>
      <div className="relative bg-theme clip-path h-[60vh] lg:h-[70vh]">
        <Navbar />
        <div className="text-center justify-center">
          <div className="text-5xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-slate-200 drop-shadow-sm filter">
            <p className="">{heroapi.title}</p>
            <p className="">{heroapi.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-5 sm:mt-[-370px] xsm:mt-[-260px] mt-[-250px]">
        <div className="left-0 cursor-pointer z-10">
          {heroapi.videos?.map((item, i) => (
            <div className="my-3" key={i}>
              <img
                className="w-20 h-20 rounded-lg shadow-xl hover:z-0 hover:border-2 z-20"
                src={item.imgsrc}
                alt={item.icon}
              />
              {/* <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                className="w-20 h-20 rounded-lg mt-[-80px] hover:z-20 z-0"
              >
                <source type="video/mp4" src={item.clip} />
              </video> */}
            </div>
          ))}
        </div>

        <div className="justify-center text-center z-20">
          <button className="bg-slate-100 my-8 w-[200px] sm:w-[170px] h-12 shadow-xl rounded-3xl align-center cursor-pointer  hover:bg-slate-200">
            {heroapi.btntext}
          </button>
        </div>

        <div className="right-0 z-20">
          {heroapi.sociallinks?.map((item, i) => (
            <div className="my-3 cursor-pointer" key={i}>
              <img
                className="w-8 h-8 relative object-fill"
                src={item.icon}
                alt={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-center items-center relative">
        <img
          width={600}
          height={300}
          src={heroapi.img}
          className="w-auto h-[50vh] lg:h-[50vh] md:h-[50vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill mt-[-150px] sm:mt-[-100px] z-20"
          alt="hero-footer"
        />
      </div>
    </>
  );
};

export default Hero;
