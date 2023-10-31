import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { IoArrowBackOutline } from "react-icons/io5";
import {FiDelete} from 'react-icons/fi'
import CartEmpty from "./CartEmpty";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/slices/CartSlice";

const CartModal = ({ openModal, closeModal, isOpen }) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <>
      <ShoppingBagIcon
        type="button"
        onClick={openModal}
        className="w-8 h-6 cursor-pointer"
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999] sm:text-sm xsm:text-sm" onClose={closeModal}>
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
                  <div className="mt-2 px-2">
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
                      <div className="right-0 items-center flex gap-1 cursor-pointer border-2 rounded-full px-2 hover:text-gray-400">
<p>Clear Cart</p><FiDelete />
                  
                      </div>
                    </p>{" "}
                    {/* Cart Section */}
                    <div className="mt-8">
                      {cartItems?.length === 0 ? (
                        <CartEmpty />
                      ) : (
                        <>
                          <div className="overflow-y-scroll scroll-smooth  scroll-hidden xsm:max-h-[calc(100vh-270px)] sm:max-h-[calc(100vh-270px)] max-h-[calc(100vh-180px)]">
                            {cartItems?.map((item, i) => (
                              <CartItems key={i} item={item} />
                            ))}
                          </div>
                          <div className="fixed bottom-0 w-full px-5 py-2 xsm:mb-16 sm:mb-16 grid items-center">
                            <div className="flex items-center justify-between">
                              <h1 className="text-base font-semibold uppercase">
                                SubTotal
                              </h1>
                              <h1 className="text-sm rounded bg-theme-cart justify-center text-center w-20 text-slate-100 py-0.5">
                                $300
                              </h1>
                            </div>
                            <div className="grid items-center gap-2">
                              <p className="text-sm font-medium text-center">
                                Taxes and shipping will be calculated at
                                shipping.
                              </p>
                              <button
                                type="button"
                                className="button-theme bg-theme-cart text-white"
                              >
                                Checkout
                              </button>
                            </div>
                          </div>
                        </>
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
