import {
  AiFillDelete,
  AiFillMinusSquare,
  AiFillPlusSquare,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItems = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  return (
    <div className="">
      <div className="flex justify-between my-5">
        <div className="left-0">
          <div className="flex flex-row">
            <img
              src={img}
              alt="product5"
              className={`relative bg-gradient-to-b ${color} ${shadow} rounded-xl py-2 xsm:py-1 sm:py-2 px-3 transition-all duration-700 ease-in-out w-36 hover:scale-95 text-white sm:my-[0.5px]`}
            />
            <div className=" mx-2 flex-col">
              <p className="font-bold">{title}</p>
              <p>{text}</p>
              <div className="flex items-center gap-6">
                <div className="bg-theme-cart bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </div>
                <div className="bg-theme-cart bg-theme-cart rounded w-12 h-7 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer">
                  <span className="text-white">${price}</span>
                </div>
                <div className="bg-theme-cart bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-0">
          <div className="flex-col">
            <p>Total Quantity</p>
            <div className="bg-theme-cart bg-theme-cart rounded w-8 h-8 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90 cursor-pointer">
              <AiFillDelete className="w-5 h-5 lg:w-8 lg:h-8 text-white stroke-[2]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
