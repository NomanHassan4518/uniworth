import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const ProductCard = ({ product, status }) => {
  if (!product) {
    // Return null or a loading indicator if product is undefined
    return null;
  }

  console.log(product, status);

  const item = product;
  const price = item.price
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const discountedPrice = item.discountedPrice
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="item -2  overflow-hidden w-full ">
      <Link to={item.link}>
        <div className="relative group">
          <div className="opacity-100 absolute top-0 left-0 group-hover:opacity-0 w-full">
            <img
              className={`w-full ${status ? "h-[350px]" : "h-[450px]"}`}
              src={item.img1}
              alt=""
            />
          </div>
          <div className="opacity-0 w-full -translate-x-5 transition-transform duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            <img
              className={`w-full ${status ? "h-[350px]" : "h-[450px]"}`}
              src={item.img2}
              alt=""
            />
          </div>
          <div className="mt-3 px-2 fontStyle space-y-1">
            <p className="text-[16px] w-[90%] h-[25px] overflow-hidden">
              {item.desc}
            </p>
            <p className="text-[18px] font-extrabold">Rs.{discountedPrice}</p>
            <p className="text-[#aaa] text-[15px] line-through font-semibold">
              Rs.{price}
            </p>
          </div>
          <div className="absolute top-0 left-0 w-[180px] h-[75px] borde-2">
            <p className="bg-[#ed1c24] w-[175px] text-white text-center transition-transform -rotate-45 text-[13px] font-semibold absolute -left-[60px] top-[13px]">
              {(
                ((item.price - item.discountedPrice) / item.price) *
                100
              ).toFixed(0)}
              %
            </p>
          </div>
          <div className="text-[#ed1c24] space-y-2 absolute right-2 top-52 opacity-0 group-hover:opacity-100">
            <p>
              <MdOutlineShoppingCart className="text-[25px]" />
            </p>
            <p>
              <IoIosSearch className="text-[25px] transition-transform translate-x-14 group-hover:translate-x-0 duration-700" />
            </p>
            <p>
              <MdFavoriteBorder className="text-[25px]" />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
