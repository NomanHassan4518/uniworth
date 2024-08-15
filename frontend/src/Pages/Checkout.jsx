import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="fontStyle">
      <Link to="/" className="flex items-center space-x-4 px-5 border-b pt-1">
        <div className="w-[130px] ">
          <img src="https://uniworthshop.com/ui/images/icon/logo.svg" alt="" />
        </div>
        <p className="text-xl">SECURE CHECKOUT</p>
      </Link>

      <div className="grid grid-cols-2 gap-5 mt-7 mx-5">
        <div>
          <div className=" flex items-center space-x-5 px-3 bg-[#f8f8f8] rounded-lg py-3">
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
