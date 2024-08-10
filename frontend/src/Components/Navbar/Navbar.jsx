import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import DrawerNavbar from "./DrawerNavbar";

const Navbar = () => {
  const [showNav2, setShowNav2] = useState(false);
  const [drawerOpen,setDrawerOpen]=useState(false)

  const handleDrawer=()=>{
    setDrawerOpen(true)
  }

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
  },[]);
  return (
    <div className="z-50 relative fontStyle -top-2 pt-7 px-7">
      <div className=" grid grid-cols-3 ">
        <div className="flex items-center text-white space-x-2" onClick={handleDrawer}>
          <FaBars className="text-[25px] font-extrabold "></FaBars>
          <p className="text-[13px] uppercase font-semibold">Menu</p>
        </div>
        <Link to='/' className="w-full h-full flex items-center justify-center">
          <img
            className="w-[35%] h-full"
            src="https://uniworthshop.com/ui/images/icon/logo_white.svg"
            alt=""
          />
        </Link>
        <div className="flex items-center justify-end text-white space-x-20">
          <div className="flex items-center text-white space-x-1">
            <IoSearchOutline className="text-[32px] font-extrabold "></IoSearchOutline>
            <p className="text-[13px] uppercase font-semibold">Search</p>
          </div>
          <div className="flex items-center text-white space-x-2 relative">
            <IoCartOutline className="text-[42px] font-extrabold "></IoCartOutline>
            <p className="text-[13px] uppercase font-semibold">bag</p>
            <p className="bg-[#cb9a51] flex items-center justify-center w-[20px] h-[20px] rounded-full absolute -top-3 right-11">
              0
            </p>
          </div>
        </div>
      </div>
      <div className={`grid grid-cols-3 py-3 px-12 bg-white ${showNav2?"translate-y-0":"-translate-y-full"} transition-transform duration-300 w-full fixed top-0 left-0 right-0 z-50`}>
        <div className="flex items-center text-black space-x-2">
          <FaBars className="text-[25px] font-extrabold "></FaBars>
          <p className="text-[13px] uppercase font-semibold">Menu</p>
        </div>
        <Link to='/' className="w-full h-full flex items-center justify-center">
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
          <div className="flex items-center text-black space-x-2 relative">
            <IoCartOutline className="text-[32px] font-extrabold "></IoCartOutline>
            <p className="text-[13px] uppercase font-semibold">bag</p>
            <p className="bg-[#cb9a51] text-white flex items-center justify-center w-[20px] h-[20px] rounded-full absolute -top-4 right-10">
              0
            </p>
          </div>
        </div>
      </div>

      <DrawerNavbar drawerStatus={drawerOpen}/>
    </div>
  );
};

export default Navbar;
