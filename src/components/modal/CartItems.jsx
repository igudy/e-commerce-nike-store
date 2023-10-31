import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItems = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="left-0">
          <div className="flex flex-row">
            <img
              src={img}
              alt="product5"
              className={`relative bg-gradient-to-b ${color} ${shadow} rounded-xl py-2 xsm:py-1 sm:py-2 px-3 transition-all duration-700 ease-in-out hover:scale-95 h-[210px] xsm:h-[200px] text-white sm:my-[0.5px] shadow-lg`}
            />
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
