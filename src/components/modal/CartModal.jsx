import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { IoArrowBackOutline } from "react-icons/io5";
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/slices/CartSlice";

const CartModal = ({ openModal, closeModal, isOpen }) => {
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);

  return (
    <>
      <ShoppingBagIcon
        type="button"
        onClick={openModal}
        className="w-8 h-6 cursor-pointer"
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="transform transition-transform ease-out duration-600"
            enterFrom="translate-x-[100%] opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transform transition-transform ease-in duration-100"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-[100%] opacity-0"
          >
            <div className="fixed inset-0 opacity-80 bg-slate-100" />
          </Transition.Child>
          <div className="fixed top-0 right-0 xsm:w-[100%] sm:w-[100%] md:w-[100%] w-[50%]">
            <div className="">
              <Transition.Child
                as={Fragment}
                enter="transform transition-transform ease-out duration-300"
                enterFrom="translate-x-[100%] opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition-transform ease-in duration-100"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-[100%] opacity-0"
              >
                <Dialog.Panel className="w-full transform overflow-hidden h-screen bg-white text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 mx-4">
                    <p className="flex justify-between text-md">
                      <div className="flex left-0 items-center">
                        <IoArrowBackOutline
                          className="w-6 h-6 cursor-pointer"
                          onClick={closeModal}
                        />{" "}
                        <span className="ml-2">
                          Your cart
                          <span className="bg-black mx-2 rounded-lg text-white">
                            <span className="px-3 py-3">1 item(s)</span>
                          </span>
                        </span>
                      </div>
                      <div className="right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-10 h-10 hover:text-slate-300 cursor-pointer"
                          onClick={closeModal}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </p>{" "}
                    {/* Cart Section */}
                    {/* Empty cart */}
                    <div className="mt-8 ">
                      {cartItems?.length === 0 ? (
                        <CartEmpty />
                      ) : (
                        cartItems?.map((item, i) => (
                          <CartItems key={i} item={item} />
                        ))
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default CartModal;
