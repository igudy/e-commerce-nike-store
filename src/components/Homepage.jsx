import React from "react";
import {
  Featured,
  Footer,
  Hero,
  Navbar,
  PopularSales,
  TopRatedSales,
} from "./";

const Homepage = () => {
  return (
    <>
      <Hero />
      <div className="px-6 sm:px-2 xsm:px-1">
        <PopularSales />
        <TopRatedSales />
        <Featured />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
