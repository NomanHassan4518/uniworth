import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaPinterestSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import SimilarProducts from "../../Components/Products/SimilarProducts";

const ProductDetail = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [detail, setDetail] = useState("block");
  const [shiping, setShiping] = useState("hidden");
  const [productSize, setSize] = useState("");
  const uri = useParams();
  const location = useLocation();
  const productData = location.state;
  const price = productData.totalPrice
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const discountedPrice = productData.discountedPrice
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const categoryCode = productData.category.substring(0, 3).toUpperCase();
  const subCategoryCode = productData.subCategory.substring(0, 3).toUpperCase();
  const uniqueId = String(productData.id).padStart(4, "0");
  const sku = `${categoryCode}${subCategoryCode}${uniqueId}`;

  const keys = productData.productedDetail.flatMap((item) => Object.keys(item));
  const convertKey = (key) => key.replace(/([a-z])([A-Z])/g, "$1 $2");
  const convertedKeys = [...new Set(keys.map(convertKey))];


  return (
    <div className="mt-14 fontStyle">
      <div className="flex items-center space-x-4 px-10 py-1 fontStyle  bg-[#f8f8f8]">
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to={`/${productData.brand}`}>{productData.brand}</Link>
        <span>|</span>
        <p>{uri.name}</p>
      </div>
      <div className="grid grid-cols-3 gap-x-5 px-10 mt-12">
        <div className="flex flex-col self-start min-h-0">
          <div className="w-full h-full">
            <img src={productData.images[imgIndex]} alt="" />
          </div>
          <div className="mt-4 flex items-center space-x-2">
            {productData.images.map((img, index) => (
              <div key={index} className="w-[90px]">
                <img
                  className={`${
                    index === imgIndex
                      ? "border-2 border-black"
                      : "hover:border-2 border-black"
                  }`}
                  src={img}
                  alt=""
                  onClick={() => setImgIndex(index)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col  h-full">
          <div>
            <h1 className="text-[20px] font-bold mb-2">{productData.name}</h1>
            <p className="text-[16px] font-semibold">SKU: {sku}</p>
            <div className="flex items-center space-x-4 my-6">
              <FaFacebookF className="text-xl hover:text-[#ed1c24] cursor-pointer" />
              <FaTwitter className="text-xl hover:text-[#ed1c24] cursor-pointer" />
              <FaPinterestSquare className="text-xl hover:text-[#ed1c24] cursor-pointer" />
              <IoMdMail className="text-xl hover:text-[#ed1c24] cursor-pointer" />
            </div>
          </div>
          <div className="border flex flex-col self-start w-full min-h-0 rounded-lg mt-2 ">
            <h1
              className="uppercase pl-9 text-[16px] hover:text-[#ed1c24] font-semibold py-2 bg-[#f7f7f7] border-b cursor-pointer"
              onClick={() => {
                setDetail(detail === "block" ? "hidden" : "block");
                setShiping("hidden");
              }}
            >
              Product Detail
            </h1>
            <div className={`py-4 px-4 ${detail}`}>
              <p className="text-[14px]">{productData.desc}</p>
              <div className="mt-7">
                {productData.productedDetail.map((item, index) => (
                  <div key={index} className="flex items-center mb-3">
                    <h1 className="font-semibold w-[150px]">
                      {convertedKeys[index]}:
                    </h1>
                    <p>{Object.values(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border rounded-lg mt-2">
            <h1
              className="uppercase pl-9 text-[16px] hover:text-[#ed1c24] font-semibold py-2 bg-[#f7f7f7] border-b cursor-pointer"
              onClick={() => {
                setShiping(shiping === "block" ? "hidden" : "block");
                setDetail("hidden") ;
                window.scrollTo({top:"120",behavior:"smooth"})
              }}
            >
              Shipping & Returns
            </h1>
            <div className={`py-4 px-4 ${shiping}`}>
              <p className="text-[16px] font-semibold mb-2">DELIVERIES</p>
              <p className="text-[14px] font-[500] mb-4">
                All domestic orders are delivered in 3-5 working days on regular
                days and 7-10 working days during sales. All international
                orders take 10-15 working days to deliver. Orders placed on
                Saturday and Sunday or any gazetted holidays will be sent for
                processing on the next working day.
              </p>
              <p className="text-[16px] font-semibold mb-2">RETURNS</p>
              <p className="text-[14px] font-[500]">
                You can exchange articles from any of Uniworth outlet within 14
                days of your purchase Sale items are non-returnable and
                non-exchangeable.
              </p>
              <div className="mt-3">
                <Link to="/" className="text-blue-600">
                  Click Here
                </Link>{" "}
                for further information regarding exchanges and returns
              </div>
            </div>
          </div>
        </div>

        <div className="self-start min-h-0 px-5 pt-5 pb-8 border">
          <div className="pb-3 border-dashed border-b text-center font-semibold">
            <h1 className="text-[21px]">Rs.{discountedPrice}</h1>
            <div className="flex items-center justify-center space-x-3 mt-1">
              <p className="text-[15px] text-gray-400 line-through">
                Rs.{price}
              </p>
              <p className="text-[16px] text-[#ed1c24]">
                {(
                  ((productData.totalPrice - productData.discountedPrice) /
                    productData.totalPrice) *
                  100
                ).toFixed(0)}
                % off
              </p>
            </div>
          </div>
          <div className="mt-4 mx-5  text-center">
            <div className="text-center font-semibold space-x-3 text-[17px]">
              <h1>Select Size: {productSize}</h1>
            </div>
            <div className="flex items-center flex-wrap justify-center justify-items-center   gap-4  mt-4 ">
              {productData.size_stock.map((size, index) => (
                <div>
                  <button
                    key={index}
                    onClick={()=>setSize(size.size)}
                    disabled={size.stock === 0}
                    style={{
                      backgroundImage: size.stock===0?`url("https://i.imgur.com/Kygs9gR.png")`:"",
                    }}
                    className={`text-[19px] flex ${productSize===size.size?"bg-[#e5e4e4]":"bg-white"}  items-center justify-center w-[50px] h-[50px] border rounded-full `}
                  >
                    {size.size}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="font-semibold text-center text-[17px]">
              <h1>Quantity:</h1>
            </div>
            <div className="flex items-center justify-center text-[15px] mt-4 font-bold">
              <p className="px-5 py-2 border">
                <FaLessThan />
              </p>
              <p className="px-8 py-1 border">1</p>
              <p className="px-5 py-2 border">
                <FaGreaterThan />
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="bg-[#cb9a51] text-white py-2 px-20 uppercase font-semibold flex items-center space-x-2">
              <MdOutlineShoppingCart className="text-[25px]" />
              <p>Add to cart</p>
            </button>
          </div>
          <div className="mt-10 py-3 mx-2 bg-[#f8f8f8] ">
            <div className="flex items-center justify-center space-x-2">
              <img
                className="w-[20px]"
                src="https://imgur.com/lb0hMAn.png"
                alt=""
              />
              <p className="text-[18px] font-semibold">Need Help?</p>
            </div>
            <div className="mt-2 flex   space-x-3">
              <p className="text-[18px] font-semibold pl-3  w-[250px]">
                {" "}
                +92 42 111 789 456{" "}
              </p>
              <p className="text-sm">Mon-Sat: (10:00 AM to 06:00 PM)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <SimilarProducts id={productData.id}/>
      </div>
    </div>
  );
};

export default ProductDetail;
