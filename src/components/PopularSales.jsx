import React from "react";
import { popularsales } from "../data/data";

const PopularSales = () => {
  return (
    <div>
      <p className="text-5xl font-extrabold my-10">{popularsales.title}</p>

      <div className="flex justify-center items-center gap-10">
        {popularsales?.items?.map((item) => (
          <div key={item.id}>
            <div
              className={`relative bg-gradient-to-b ${item.color} ${item.shadow} grid items-center justify-items-start
              rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
            >
              <div className="flex justify-between px-5">
                <div>
                  <p>{item.title}</p>
                  <p>{item.text}</p>
                  <div className="flex gap-2">
                    <p>{item.price}</p>
                    <span className="bg-slate-200">
                      <p>{item.rating}</p>
                    </span>
                  </div>
                  <div className="flex">
                    <p>Cart</p>
                    <span>{item.btn}</span>
                  </div>
                </div>
                <div className="right-0">
                  <img
                    src={item.img}
                    alt={`${item.title}`}
                    className="w-auto h-[20vh] transitions-theme -rotate-[15deg] hover:rotate-0 cursor-pointer object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSales;
