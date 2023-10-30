import React from "react";
import Product5 from "../../assets/product5.png";

import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItems = () => {
  return (
    <div className="flex justify-between">
      <div className="left-0">
        <div className="flex flex-row">
          <img
            src={Product5}
            alt="product5"
            className="w-32 h-20 border-2 p-2"
          />
          <div className=" mx-2 flex-col">
            <p>Nike Addapt BB Rose</p>
            <p> MEN Running Shoes</p>
            <div className="flex items-center gap-6">
              <div className="">
                <AiFillMinusSquare className="w-7 h-7 cursor-pointer" />
              </div>
              <div>10</div>
              <div className="">
                <AiFillPlusSquare className="w-7 h-7 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-0">
        <div className="flex-col">
          <p>$150</p>
          <BsFillTrash3Fill className="w-7 mt-2 h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
