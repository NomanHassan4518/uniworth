import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const ProductCard = ({ product, height }) => {
  const item = product;

  const navigate = useNavigate();
  const handleNaigate = (item) => {
    navigate(`/${item.brand}/${item.name}`, { state: item });
  };

  const price = item.totalPrice
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const discountedPrice = item.discountedPrice
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const discount=(
  ((item.totalPrice - item.discountedPrice) / item.totalPrice) *
  100
).toFixed(0)

  return (
    <div
      className={`overflow-hidden group relative w-full border`}
      onClick={() => {
        handleNaigate(item);
      }}
       style={{height:height.boxHeight}}
    >
        <div className=" transition-all duration-500 group-hover:scale-95  w-full">
          <img
            className={`w-full object-fill `}
            src={item?.images[0]}
            alt=""
            style={{height:height.imgHeight}}
          />
        </div>
        <div className="absolute top-0 left-0 -translate-x-full w-full opacity-0 ease-in-out transition-all  duration-700 group-hover:translate-x-0 group-hover:opacity-100 group-hover:w-full">
          <img
            className={`w-full`}
            src={item?.images[1]}
            alt=""
            style={{height:height.imgHeight}}
          />
        </div>
        <div className="mt-3 px-2 fontStyle space-y-1">
          <p className="text-[16px] w-[90%] h-[25px] overflow-hidden">
            {item.name}
          </p>
          <p className="text-[18px] font-extrabold">Rs.{discountedPrice}</p>
         {discount>0 &&  <p className="text-[#aaa] text-[15px] line-through font-semibold">
            Rs.{price}
          </p>}
        </div>
       {discount>0 &&  <div className="absolute top-0 left-0 w-[180px] h-[75px] borde-2">
          <p className="bg-[#ed1c24] w-[175px] text-white text-center transition-transform -rotate-45 text-[13px] font-semibold absolute -left-[60px] top-[13px]">
            {discount}
            %
          </p>
        </div>}
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
  );
};

export default ProductCard;
