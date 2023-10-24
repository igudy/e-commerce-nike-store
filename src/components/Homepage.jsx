import React from "react";
import {
  Featured,
  Footer,
  Hero,
  Highlights,
  PopularSales,
  TopRatedSales,
} from "./";

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="mx-6 sm:mx-4 xsm:mx-2">
        <PopularSales />
        <Highlights />
        <TopRatedSales />
        <Featured />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
