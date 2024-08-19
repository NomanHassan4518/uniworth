import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderSummery = () => {
  const cartData = useSelector((state) => state);
  const cartItems = cartData.cartData;
  let subtotal = cartData.totalPrice;
  const shipingFee = 399;
  let discount = 0;

  cartItems.map(
    (item) =>
      (discount +=
        (item.product.totalPrice - item.product.discountedPrice) *
        item.quantity)
  );
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[25px] font-bold">Order Summery</h1>
        <Link to="/shoping-cart" className="px-3 py-1 underline bg-[#f7f7f7]">
          Edit
        </Link>
      </div>
      <div className="mt-4 w-full bg-[#f8f8f8] p-4">
        <table className="table-auto w-full">
          <thead>
            <tr className="border-b">
              <th scope="col" colSpan="2" className="w-1/2">
                Product Name
              </th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr
                key={index}
                className="text-center border-b border-black p-4"
                style={{ padding: "34px" }}
              >
                <th scope="row" className="py-3">
                  <img
                    src={item.product.images[0]}
                    className="w-[100px] h-[100px] object-contain"
                    alt=""
                  />
                </th>
                <td className="text-start px-4">
                  {item.product.name}
                  <br />
                  L
                  <br />
                </td>
                <td className="">
                  Rs.
                  {item.product.totalPrice
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
                <td>{item.quantity}</td>
                <td>
                  Rs.
                  {(item.product.totalPrice * item.quantity)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" mt-4 space-y-3">
          <div className="flex items-center  justify-end w-full border-b pb-2">
            <p className="text-lg font-semibold w-[150px] ">Subtotal: </p>
            <p className="text-xl  w-[150px] ">
              Rs.
              {subtotal
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="flex items-center  justify-end w-full border-b pb-2">
            <p className="text-lg font-semibold w-[150px] ">Discount: </p>
            <p className="text-xl  w-[150px] ">
              - Rs.
              {discount
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="flex items-center  justify-end w-full border-b pb-2">
            <p className="text-lg font-semibold w-[150px]  ">Shipping: </p>
            <p className="text-xl  w-[150px] ">
              Rs.{" "}
              {shipingFee
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="flex items-center  justify-end w-full border-b pb-2">
            <p className="text-lg font-semibold w-[150px] ">Total: </p>
            <p className="text-xl  w-[150px]">
              Rs.
              {(subtotal - discount + shipingFee)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
        <div className="text-end mt-7">
          <button className="text-white bg-[#ed1c24] font-semibold  py-2 px-12 uppercase">
            place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
