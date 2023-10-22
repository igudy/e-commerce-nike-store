import React from "react";
import Navbar from "./Navbar";
import { heroapi } from "../data/data";

const Hero = () => {
  return (
    <>
      <div className="bg-theme clip-path h-[60vh] lg:h-[70vh]">
        <div className="elative">
          <Navbar />
          <div className="text-center justify-center">
            <div className="text-5xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-slate-200 drop-shadow-sm filter">
              <p className="">{heroapi.title}</p>
              <p className="">{heroapi.subtitle}</p>
            </div>
            <div className="">
              <button className="bg-slate-100 my-8 w-[200px] h-12 shadow-xl rounded-3xl align-center cursor-pointer hover:bg-slate-200">
                {heroapi.btntext}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center items-center relative">
        <img
          width={600}
          height={300}
          src={heroapi.img}
          className="w-auto h-[50vh] lg:h-[50vh] md:h-[50vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill mt-[-150px]"
          alt="hero-footer"
        />
      </div>
    </>
  );
};

export default Hero;
