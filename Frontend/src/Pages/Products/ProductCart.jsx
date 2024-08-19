import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, increaseQuantity, decreaseQuantity } from "../../Redux/Action/Action";

const ProductCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state);  
  const cartItems =cartData.cartData ;  
  let subtotal = cartData.totalDiscountedPrice;
const shipingFee=399

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  });

  const removeItem = (index) => {
    dispatch(removeProduct(index));
  };

  const increaseProductQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };

  const decreaseProductQuantity=(index)=>{
    dispatch(decreaseQuantity(index))
  }



  return (
    <div className="mt-14 fontStyle">
      <div className="flex items-center space-x-4 px-10 py-1 fontStyle  bg-[#f8f8f8]">
        <Link to="/">Home</Link>
        <span>|</span>
        <p>SHOPPING CART</p>
      </div>
      <div className="mt-3 bg-[#f8f8f8] py-2 mx-7 rounded-lg text-[25px] font-semibold text-center ">
        MY SHOPPING BAG
      </div>
      <div className="mx-6">
        <table className=" mt-2 w-full table-auto  text-center">
          <thead>
            <tr className="uppercase border-b ">
              <th>image</th>
              <th>Item name </th>
              <th>price</th>
              <th>quantity</th>
              <th>action</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, index) => (
              <tr key={index} className="border-b ">
                <td className=" flex justify-center py-2">
                  <img
                    className="w-[100px] h-[100px] object-contain"
                    src={item.product.images[0]}
                    alt=""
                  />
                </td>
                <td className=" text-center">
                  <p className="font-semibold">{item.product.name}</p>
                  <p>Size: {item.size} </p>
                </td>
                <td>
                  <p className="font-semibold">
                    Rs.
                    {item.product.discountedPrice
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <p className="text-gray-600 line-through">
                    Rs.
                    {item.product.totalPrice
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </td>
                <td>
                  <div className="flex items-center justify-center text-[15px] mt-4 font-bold">
                    <button className="px-5 py-1 border" onClick={()=>decreaseProductQuantity(index)}>-</button>
                    <p className="px-8 py-1 border">{item.quantity}</p>
                    <button
                      className="px-5 py-1 border"
                      onClick={() => increaseProductQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td
                  className="text-red-600 font-semibold cursor-pointer"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </td>
                <td className="text-green-600 text-xl font-semibold">
                  Rs.
                  {(item.product.discountedPrice * item.quantity)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" mt-4 space-y-3">
        <div className="flex items-center  justify-end w-full ">
          <p className="text-lg font-semibold w-[200px] ">Subtotal: </p>
          <p className="text-xl font-bold w-[220px] ">
            Rs.
            {subtotal
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <div className="flex items-center  justify-end w-full ">
          <p className="text-lg font-semibold w-[200px]  ">Shipping: </p>
          <p className="text-xl font-bold w-[220px] ">Rs.{shipingFee
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
        <div className="flex items-center  justify-end w-full ">
          <p className="text-lg font-semibold w-[200px] ">Total: </p>
          <p className="text-xl font-bold w-[220px] ">
            Rs.
            {(subtotal + shipingFee)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
      <div className="mt-8 mr-16 flex items-center justify-end space-x-4">
        <Link
          to="/"
          className="py-2 px-5 text-white bg-black font-semibold uppercase"
        >
          Continue Shopping
        </Link>
        <Link
          to="/checkout"
          className="px-8 py-2 text-white bg-[#ed1c24] font-semibold uppercase"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
