import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShopingDetail from "../Components/Checkout/ShopingDetail";
import OrderSummery from "../Components/Checkout/OrderSummery";

const Checkout = () => {
  const [login,setLogin]=useState("hidden")
  return (
    <div className="fontStyle">
      <Link to="/" className="flex items-center space-x-4 px-5 border-b pt-1">
        <div className="w-[130px] ">
          <img src="https://uniworthshop.com/ui/images/icon/logo.svg" alt="" />
        </div>
        <p className="text-xl">SECURE CHECKOUT</p>
      </Link>

      <div className="grid grid-cols-2 gap-7 mt-10 mx-5">
        <div>
          <div className=" flex items-center space-x-5 px-3 bg-[#f8f8f8] rounded-lg py-3 cursor-pointer" onClick={()=>setLogin(login==="hidden"?"block":"hidden")}>
            <img
              className="w-[18px] mr-[6px]"
              src="https://uniworthshop.com/public/images/check-tick.png"
              alt=""
            />
            <p className="text-[15px] font-semibold">
                <span>Returning Customer?</span>
                <span className="text-[#ED1C24]">Click here to login</span>
            </p>
          </div>
          <div className={`${login} mt-4 px-4`}>
            <div className="grid grid-cols-2 gap-x-6">
              <div>
                <label htmlFor="" className="block font-semibold">Email Address <span className="text-[#ed1c24]">*</span></label>
                <input type="email" className="border py-2 px-4 mt-2 w-full focus:outline-none"/>
              </div>
              <div>
                <label htmlFor="" className="block font-semibold">Password <span className="text-[#ed1c24]">*</span></label>
                <input type="password" className="border py-2 px-4 mt-2 w-full focus:outline-none"/>
              </div>
            </div>
            <button className="mt-7 text-white font-semibold bg-[#ed1c24] py-2 px-12">Login</button>
          </div>

          <div>
            <ShopingDetail/>
          </div>
        </div>
        <div>
          <OrderSummery/>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
