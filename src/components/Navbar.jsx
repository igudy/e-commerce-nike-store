import React from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row relative justify-between items-center px-8 py-8">
      <div className="">
        <img src={logo} className="w-20 h-6" alt="logo" />
      </div>
      <div className="flex text-white items-center gap-4 xsm:gap-0 sm:gap-1 right-0">
        <HeartIcon className="w-8 h-6" />
        <MagnifyingGlassIcon className="w-8 h-6" />
        <ShoppingBagIcon className="w-8 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
