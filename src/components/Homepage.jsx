import React from "react";
import {
  Featured,
  Footer,
  Hero,
  Highlights,
  PopularSales,
  TopRatedSales,
  TopStories,
} from "./";

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="mx-6 sm:mx-2 xsm:mx-1">
        <PopularSales />
        {/* <Highlights />
        <TopRatedSales />
        <Featured />
        <TopStories /> */}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
