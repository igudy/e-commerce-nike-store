import React from "react";
import { topratedsales } from "../data/data";
import ProductCards from "./sub-components/ProductCards";

const TopRatedSales = () => {
  return (
    <div>
      <p className="relative text-5xl sm:text-4xl sm:mb-2 font-extrabold my-10">
        {topratedsales.title}
      </p>
      <div className="flex flex-wrap gap-5">
        {topratedsales?.items?.map((item) => (
          <div className="" key={item.id}>
            <ProductCards
              title={item.title}
              text={item.text}
              rating={item.rating}
              btn={item.btn}
              img={item.img}
              price={item.price}
              color={item.color}
              shadow={item.shadow}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedSales;
