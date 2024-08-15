import React from "react";
import ProductCard from "../../Components/Products/ProductCard";
import { Link, useParams } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import Filter from "../../Components/Products/Filter";
import { data } from "../../Components/data";

const Products = () => {
  const uri = useParams();
  const products = data.filter(
    (item) =>
      item.category === uri.category || item.subCategory === uri.category || item.brand === uri.category
  );

  


  return (
    <div className="mt-14 fontStyle">
      <div className="flex items-center space-x-4 px-10 py-1 text-lg  fontStyle  bg-[#f8f8f8]">
        <Link to="/">Home</Link>
        <span>|</span>
        <p>{uri.category}</p>
      </div>
      <div className="text-[25px] mt-1 font-semibold text-center">
        <p>{uri.category}</p>
      </div>

      {/* Filter */}
      <div className="relative">
        <Filter />
      </div>

      {/* Sorting Items */}
      <div className="text-[20px]   border-y mx-10 mt-2 flex items-center justify-between">
        <div className="flex items-center justify-start px-12  w-full">
          <button>{products.length} items</button>
        </div>

        <div className="relative inline-block font-semibold text-[18px] w-[20rem] border-x ">
          <select className="appearance-none w-full py-4 px-4  bg-white focus:outline-none focus:ring-0">
            <option value="">Sorting items</option>
            <option value="">Price Low to High</option>
            <option value="">Price Hight to Low</option>
            <option value="">Newest Products</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <FaSortDown />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 px-10 mt-10 ">
        {products.map((item, index) => (
          <div key={index} className="w-full ">
            <ProductCard product={item} height={{boxHeight:"600px",imgHeight:"500px"}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
