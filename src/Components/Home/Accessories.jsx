import React from "react";
import { Link } from "react-router-dom";

const Accessories = () => {
  return (
    <div
      className="my-5 w-full"
      style={{
        backgroundImage: `url("https://uniworthshop.com/ui/images/banners/7.jpg")`,
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        width:"100%",
        height:"410px"
      }}
    >
    <div className="
    w-[400px] block mx-auto text-center pt-16 fontStyle">
    <h1 className="text-[25px]  font-extrabold mb-4">Accessories</h1>
        <p className="text-[16px] leading-7">Uniworth Accessories - Elevating Style Beyond Expectations! Our Essential Collection Curates a Range of Accessory Must-Haves Catering to Every Occasion.</p>
        <Link to="/a" className="border border-black mt-8 inline-block px-12 py-2 text-[20px] font-semibold">Shop</Link>
    </div>
    </div>
  );
};

export default Accessories;
