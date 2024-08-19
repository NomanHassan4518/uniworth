import React, { useState } from "react";
import ProductCard from "../Products/ProductCard";
import { data } from "../data";

const Exclusiveproducts = () => {
  const [key, setKey] = useState("Shirts");
  const [activeIndex, setActiveIndex] = useState(0);
  const products = data.filter((item) => item.category === key);
  const handleKey = (key, index) => {
    setKey(key);
    setActiveIndex(index);
  };

  const keys = ["Shirts", "Accessories", "Summer Collection"];
  return (
    <div className="my-5">
      <div className="text-center fontStyle">
        <p className="text-[#ed1c24] text-[20px] font-semibold  ">
          Exclusive Products
        </p>
        <h1 className="text-[34px] font-extrabold uppercase mt-1 relative inline-block  after:w-[70px] after:h-[2px] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-[#ed1c24] after:rounded-lg after:block after:mx-auto  ">
          browse more
        </h1>
      </div>
      <div className="mt-5 text-center flex items-center justify-center space-x-10">
        {keys.map((key, index) => (
          <div key={index}>
            <h1
              className={`text-[19px] fontStyle cursor-pointer ${
                keys[activeIndex] === key ? " text-[#ed1c24]" : "text-black"
              }`}
              onClick={() => {
                handleKey(key, index);
              }}
            >
              {key}
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-8 px-12">
        {products.slice(0,6).map((item, index) => (
          <div className="" key={index}>
            <ProductCard product={item} height={{boxHeight:"500px",imgHeight:"400px"}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exclusiveproducts;
