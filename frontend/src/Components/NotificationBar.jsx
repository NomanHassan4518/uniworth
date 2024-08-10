import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const fontStyle = {
  fontFamily: "Poppins, sans-serif",
  fontStyle: "normal",
};

const NotificationBar = () => {
  return (
    <div className="relative bg-[#1b4623] text-white ">
      <div className=" text-[13px] p-2 px-6 grid grid-cols-3 ">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <span>
              <MdLocalPhone className="text-[20px] font-bold" />
            </span>
            <span className="font-[600]" style={fontStyle}>
              +92 42 111 789 456
            </span>
          </Link>
          <Link to="/" className="flex items-center">
            <span>
              <ImWhatsapp className="text-[20px] mr-1" />
            </span>
            <span className="font-[600]" style={fontStyle}>
              +92-345-4037778
            </span>
          </Link>
        </div>

        <div>
          <Marquee
            speed={30}
            behavior="scroll"
            scrollamount="20"
            gradient={false}
            style={fontStyle}
            className="font-[500] text-[15px]"
          >
            FREE Delivery Available over Rs. 1500 order.
          </Marquee>
        </div>

        {/* <div className="flex items-center justify-end cursor-pointer group border py-2">
          <div className=" ">
          <div className="flex items-center ">
            <FaRegUser className="text-[20px] mr-1" />
            <span className="font-[600]" style={fontStyle}>
              My Account
            </span>
            </div>
            <div className="bg-white w-[180px] absolute right-0 border  p-[10px] shadow-lg  opacity-100 invisible group-hover:visible  z-50 ">
         <Link to="/" className="text-black text-[14px] block font-semibold">Login</Link>
         <Link to="/" className="text-black text-[14px] block font-semibold">Register</Link>
          </div>
        
          </div>
         
        </div> */}

<Menu as="div" className="relative inline-block text-end z-[1000]">
      <div>
        <MenuButton className="inline-flex items-center gap-x-1.5  ">
        <FaRegUser className="text-[20px] mr-1" />
        <span className="font-[600]" style={fontStyle}>My Account</span>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute text-left px-3 right-0 z-10 mt-2 w-48 origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
          <Link to="/" className="text-black text-[14px] block font-semibold">Login</Link>
          </MenuItem>
          <MenuItem>
          <Link to="/" className="text-black text-[14px] block font-semibold mt-1">Register</Link>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>

      </div>
    </div>
  );
};

export default NotificationBar;
