import { AiFillStar } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

const ProductCards = ({
  title,
  text,
  rating,
  btn,
  img,
  price,
  color,
  shadow,
}) => {
  return (
    <div className="flex flex-wrap text-black">
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-start rounded-xl py-3 px-2 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <p>{title}</p>
        <p>{text}</p>
        <div className="flex gap-2 my-2">
          <p className="font-bold sm:text-sm xsm:text-sm lg:font-bold xl:font-bold md:font-bold md:text-xl lg:text-lg">
            ${price}
          </p>
          <span className="bg-slate-200 w-12 sm:w-8 md:w-16 lg:w-10 rounded-lg drop-shadow-xl text-black">
            <p className="flex text font-medium sm:text-sm justify-center items-center md:font-bold md:text-md md:mt-[2px]">
              {rating} <AiFillStar className="text-yellow-500" />
            </p>
          </span>
        </div>
        <div className="flex items-center">
          <div className="border-[2px] w-7 h-6 cursor-pointer rounded-full drop-shadow-xl text-inherit items-center">
            <span className="flex text-center items-center justify-center">
              <BsFillCartCheckFill className="pt-1" />
            </span>
          </div>
          <span className="mt-1 pl-2 xl:text-md text-sm shadow-md cursor-pointer">
            {btn}
          </span>
        </div>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default ProductCards;
