import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import DrawerNavbar from "./DrawerNavbar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showNav2, setShowNav2] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const cartData = useSelector((state) => state);  
  const cartItems =cartData.cartData ;  
  let subtotal = cartData.totalDiscountedPrice;
const totalItems=cartData.totalItem
const shipingFee=399

  const handleDrawer = () => {
    setDrawerOpen(true);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShowNav2(true);
    } else {
      setShowNav2(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {location.pathname !== "/checkout" && (
        <div className="z-50 relative fontStyle -top-2  pt-7 px-7">
          <div
            className={` ${
              location.pathname === "/" ? "grid" : "hidden"
            } grid-cols-3 `}
          >
            <div className="flex items-center">
              <div
                className="flex items-center text-white  space-x-2 cursor-pointer"
                onClick={handleDrawer}
              >
                <FaBars className="text-[25px] font-extrabold "></FaBars>
                <p className="text-[13px] uppercase font-semibold">Menu</p>
              </div>
            </div>
            <Link
              to="/"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                className="w-[35%] h-full"
                src="https://uniworthshop.com/ui/images/icon/logo_white.svg"
                alt=""
              />
            </Link>
            <div className="flex items-center justify-end text-white space-x-20 ">
              <div className="flex items-center text-white space-x-1">
                <IoSearchOutline className="text-[32px] "></IoSearchOutline>
                <p className="text-[13px] uppercase font-semibold">Search</p>
              </div>

              <div className="text-white  group cursor-pointer  py-2 ">
                <div className="flex items-center  space-x-2 relative">
                  <IoCartOutline className="text-[42px] font-extrabold "></IoCartOutline>
                  <p className="text-[13px] uppercase font-semibold">bag</p>
                  <p className="bg-[#cb9a51] flex items-center justify-center w-[20px] h-[20px] rounded-full absolute -top-3 right-11">
                    {totalItems}
                  </p>
                  {cartItems?.length === 0 ? (
                    <div className="bg-white border absolute top-10 text-black -left-80 opacity-0  group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto p-4 w-[24rem] text-center font-semibold  ">
                      Your Cart is empty.
                    </div>
                  ) : (
                    <div className="bg-white absolute top-10 text-black -left-80 opacity-0  group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto p-4">
                      {cartItems?.map((item, index) => (
                        <div
                          key={index}
                          className="flex space-x-4 text-gray-600 pb-4 mt-2 border-b border-black "
                        >
                          <div className="w-[100px] h-[100px] ">
                            <img
                              className="w-full h-full object-contain"
                              src={item.product.images[0]}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="w-[150px] h-[24px] overflow-hidden">
                                {item.product.name}
                              </p>
                              <p className="font-bold text-black">
                                Rs.
                                {(item.product.discountedPrice*item.quantity)
                                  .toFixed(2)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </p>
                            </div>
                            <p>{item.product.brand}</p>
                            <p>Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                      <div className="mt-3 pb-2 border-b border-black pr-16">
                        <div className="flex items-center justify-between  text-lg font-semibold ">
                          <p>Shipping</p>
                          <p>Rs.{shipingFee.toFixed(2)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div className="flex items-center justify-between text-lg font-semibold mt-2 ">
                          <p>Subtotal</p>
                          <p>Rs.{(subtotal+shipingFee).toFixed(2)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-around mt-4">
                        <Link
                          to="/shoping-cart"
                          className="text-white bg-black hover:bg-white hover:text-black border font-semibold px-10 py-1.5"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="text-white hover:text-black hover:bg-white border bg-[#ed1c24] font-semibold px-10 py-1.5"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-3 shadow-lg py-3 px-12 bg-white ${
              showNav2
                ? " translate-y-0 "
                : location.pathname !== "/"
                ? "translate-y-10 duration-0"
                : "-translate-y-full"
            } transition-transform duration-300 w-full fixed top-0 left-0 right-0 z-[1000000]`}
          >
            <div
              className="flex items-center text-black space-x-2 cursor-pointer"
              onClick={handleDrawer}
            >
              <FaBars className="text-[25px] font-extrabold "></FaBars>
              <p
                className="text-[13px] uppercase font-semibold"
                hidden={location.pathname !== "/"}
              >
                Menu
              </p>
            </div> 
            <Link
              to="/"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                className="w-[35%] h-full"
                src="	https://uniworthshop.com/ui/images/icon/home_logo.png"
                alt=""
              />
            </Link>
            <div className="flex items-center justify-end text-white space-x-20">
              <div className="flex items-center text-black space-x-1">
                <IoSearchOutline className="text-[22px] font-extrabold "></IoSearchOutline>
                <p className="text-[13px] uppercase font-semibold">Search</p>
              </div>
              <div className="text-black  group cursor-pointer  py-2 ">
                <div className="flex items-center  space-x-2 relative">
                  <IoCartOutline className="text-[42px] font-extrabold "></IoCartOutline>
                  <p className="text-[13px] uppercase font-semibold">bag</p>
                  <p className="bg-[#cb9a51] text-white flex items-center justify-center w-[20px] h-[20px] rounded-full absolute -top-3 right-11">
                    {totalItems}
                  </p>
                  {cartItems?.length === 0 ? (
                    <div className="bg-white border shadow absolute top-10 text-black -left-80 opacity-0  group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto p-4 w-[24rem] text-center font-semibold  ">
                      Your Cart is empty.
                    </div>
                  ) : (
                    <div className="bg-white absolute top-10 text-black -left-80 opacity-0  group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto p-4 border">
                      {cartItems?.map((item, index) => (
                        <div
                          key={index}
                          className="flex space-x-4 text-gray-600 pb-4 mt-2 border-b border-black "
                        >
                          <div className="w-[100px] h-[100px] ">
                            <img
                              className="w-full h-full object-contain"
                              src={item.product.images[0]}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <p className="w-[150px] h-[24px] overflow-hidden">
                                {item.product.name}
                              </p>
                              <p className="font-bold text-black">
                                Rs.
                                {(item.product.discountedPrice*item.quantity)
                                  .toFixed(2)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </p>
                            </div>
                            <p>{item.product.brand}</p>
                            <p>Size: {item.size}</p>
                            <p>Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                     <div className="mt-3 pb-2 border-b border-black pr-16">
                        <div className="flex items-center justify-between  text-lg font-semibold ">
                          <p>Shipping</p>
                          <p>Rs.{shipingFee.toFixed(2)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                        <div className="flex items-center justify-between text-lg font-semibold mt-2 ">
                          <p>Subtotal</p>
                          <p>Rs.{(subtotal+shipingFee).toFixed(2)
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-around mt-4">
                        <Link
                          to="/shoping-cart"
                          className="text-white bg-black hover:bg-white hover:text-black border font-semibold px-10 py-1.5"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="text-white hover:text-black hover:bg-white border bg-[#ed1c24] font-semibold px-10 py-1.5"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DrawerNavbar
            drawerStatus={drawerOpen}
            onClose={() => {
              setDrawerOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
