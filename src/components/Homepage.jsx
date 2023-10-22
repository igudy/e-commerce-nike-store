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
      <div>
        <Hero />
        <PopularSales />
        <TopRatedSales />
        <Featured />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
