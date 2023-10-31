import React from "react";
import Product5 from "../../assets/product5.png";

import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

const CartItems = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="left-0">
          <div className="flex flex-row">
            <img src={img} alt="product5" className="w-32 h-20 border-2 p-2" />
            <div className=" mx-2 flex-col">
              <p>{title}</p>
              <p>{text}</p>
              <div className="flex items-center gap-6">
                <div className="">
                  <AiFillMinusSquare className="w-7 h-7 cursor-pointer" />
                </div>
                <div>${price}</div>
                <div className="">
                  <AiFillPlusSquare className="w-7 h-7 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-0">
          <div className="flex-col">
            <p>Total Quantity</p>
            <BsFillTrash3Fill className="w-7 mt-2 h-7 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
