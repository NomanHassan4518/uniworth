import React from "react";
import { Link } from "react-router-dom";
import {
  MdLocalPhone,
  MdEmail,
  MdAccessTime,
  MdLocationOn,
  MdOutlineCopyright,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f9f9f9] fontStyle mt-9 p-10 block relative">
        <div className="flex items-center justify-between pb-9 border-b">
          <div>
            <h1 className="text-[20px]">KNOW IT ALL FIRST!</h1>
            <p className="mt-1 text-[17px]">
              Never Miss Anything From Uniworth By Signing Up To Our Newsletter.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-[215px] py-[10px] px-[20px] placeholder:text-[17px] border bg-white "
            />
            <button className="bg-[#212529] border border-[#212529] text-white text-[15px] font-bold py-[10px] px-[20px] ">
              Subcribe
            </button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-12 gap-4">
          <div className="col-span-5">
            <div>
              <img
                className="w-[19%]"
                src="https://uniworthshop.com/ui/images/icon/logo.svg"
                alt=""
              />
            </div>
            <div className="mt-2">
              <p className="mt-1 text-[17.5px]">
                Uniworth is a menswear brand, designed entirely in-house,
                stand-alone Pakistan’s no. 1 Shirt Brand. From timeless
                tailoring to premium formal shirts, we present a considered edit
                of quality, wearable clothes, and accessories bearing the
                Uniworth name.
              </p>
              <div className="flex items-center space-x-5 mt-4">
                <Link to="/">
                  <img
                    src="https://uniworthshop.com/ui/images/icon/facebook.svg"
                    className="w-[20px]"
                    alt=""
                  />
                </Link>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </Link>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </Link>
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.3em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-7 grid grid-cols-3 pl-12 mt-3">
            <div>
              <h1 className="text-[18px] font-bold">Information</h1>
              <ul className="mt-5 space-y-2">
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    How to Order
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Returns & Exchange Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-bold">Customer Services</h1>
              <ul className="mt-5 space-y-2">
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Payment Opetions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Made To Measure
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Made To Measure Stores
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Track Your Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className='text-[14px] font-semibold relative inline-block  after:w-0 after:h-[2px] after:bg-[#ed1c24] after:inline-block after:content-[""] after:absolute after:left-0 after:top-6 transition-transform hover:after:w-full after:duration-500  '
                  >
                    Loyalty Card
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-bold">Store information</h1>
              <ul className="mt-5 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-[14px] font-semibold relative flex items-center space-x-3 group  "
                  >
                    <span>
                      <MdLocalPhone className="text-[16px] group-hover:text-gray-700 " />
                    </span>
                    <span className="group-hover:text-[#ed1c24]">
                      +92 42 111 789 456
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[14px] font-semibold relative flex items-center space-x-3  group "
                  >
                    <span>
                      <FaWhatsapp className="text-[16px] group-hover:text-gray-700 " />
                    </span>
                    <span className="group-hover:text-[#ed1c24]">
                      +92 345 4037778
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[14px] font-semibold relative flex items-center space-x-3  group "
                  >
                    <span>
                      <MdEmail className="text-[16px] group-hover:text-gray-700 " />
                    </span>
                    <span className="group-hover:text-[#ed1c24]">
                      askus@uniworthshop.com
                    </span>
                  </Link>
                </li>
                <li>
                  <h1 className="text-[14px] font-semibold relative flex items-center space-x-3 group  ">
                    <span>
                      <MdAccessTime className="text-[16px] group-hover:text-gray-700 " />
                    </span>
                    <span className="group-hover:text-gray-500 ">
                      Mon-Sat: (10:00AM to 06:00PM)
                    </span>
                  </h1>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[14px] font-semibold relative flex items-center space-x-3 group  "
                  >
                    <span>
                      <MdLocationOn className="text-[16px] group-hover:text-gray-700 " />
                    </span>
                    <span className="px-4 py-1  border border-gray-400 group-hover:text-[#ed1c24]">
                      Find our Stores
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white fontStyle px-10 py-4 flex items-center justify-between">
        <div className="flex items-center text-[18px] space-x-1">
          <span>
            <MdOutlineCopyright className="text-[22px]"/>
          </span>
          <span >UNIWORTH DRESS CO. All Rights Reserved.</span>
        </div>
        <div className="flex items-center justify-center space-x-6 ">
            <p className="text-[18px]">100% Safe Checkout</p>
            <div className="">
                <img className="w-[60%]" src="https://uniworthshop.com/ui/images/icons/15.png" alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
