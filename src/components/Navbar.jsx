import React from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-8">
      <div className="">
        <img src={logo} width={90} height={30} alt="logo" />
      </div>
      <div className="flex text-white items-center right-0 text-3xl">
        <HeartIcon width={40} height={30} />
        <MagnifyingGlassIcon width={40} height={30} />
        <ShoppingBagIcon width={40} height={30} />
      </div>
    </div>
  );
};

export default Navbar;
