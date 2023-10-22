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
      <div className="px-6">
        <PopularSales />
        <TopRatedSales />
        <Featured />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
