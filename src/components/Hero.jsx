import React from "react";
import Navbar from "./Navbar";
import { heroapi } from "../data/data";

const Hero = () => {
  return (
    <div className="bg-theme realtive clip-path">
      <div className="z-10 relative">
        <Navbar />
        <div className="text-center justify-center">
          <div className="text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-slate-200 drop-shadow-sm filter">
            <p className="">{heroapi.title}</p>
            <p className="">{heroapi.subtitle}</p>
          </div>
          <div className="">
            <button className="bg-slate-100 my-16 w-[200px] h-12 shadow-xl rounded-3xl align-center cursor-pointer hover:bg-slate-200">
              {heroapi.btntext}
            </button>
          </div>
        </div>
        <div className="flex justify-center text-center items-center relative">
          <img
            width={600}
            height={300}
            src={heroapi.img}
            className="w-auto h-[20vh] lg:h-[55vh] md:h-[41vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
            alt="hero-footer z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
