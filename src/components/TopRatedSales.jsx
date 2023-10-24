import React from "react";
import { topratesales } from "../data/data";
import ProductCards from "./sub-components/ProductCards";

const TopRatedSales = () => {
  return (
    <div>
      <p className="relative text-5xl sm:text-4xl sm:mb-2 font-extrabold my-10">
        {topratesales.title}
      </p>
      <div>
        {topratesales.items((item) => (
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
