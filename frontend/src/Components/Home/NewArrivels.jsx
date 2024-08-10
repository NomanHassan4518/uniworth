import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCard from "../ProductCard";

const NewArrivels = () => {
  const newArrivels = [
    {
      img1: "https://uniworthdress.com/uploads/product//webp/69d21a52b951cf0120b4d519e63350c8.webp",
      img2: "https://uniworthdress.com/uploads/product//webp/7e9c613948b0b5eb27b94e2b80ba3ad6.webp",
      desc: "Green Classic Gold Star Polo Shirt",
      discountedPrice: 3036.0,
      price: 3795.0,
      link: "/",
    },
    {
      img1: "https://uniworthdress.com/uploads/product//webp/TP2485..webp",
      img2: "https://uniworthdress.com/uploads/product//webp/TP2485...webp",
      desc: "British Green Plain Pique Polo Shirt",
      discountedPrice: 3580.0,
      price: 4495.0,
      link: "/",
    },
    {
      img1: "https://uniworthdress.com/uploads/product//webp/b12b0d66a7f573853b914380e94981f1.webp",
      img2: "https://uniworthdress.com/uploads/product//webp/d638175faf8e97bd47a1806a9ff6d116.webp",
      desc: "1947 Grey Crew Neck T-Shirt",
      discountedPrice: 1836.0,
      price: 2295.0,
      link: "/",
    },
    {
      img1: "https://uniworthdress.com/uploads/product//webp/b80a2411383315e781cc974931ab1eaf.webp",
      img2: "https://uniworthdress.com/uploads/product//webp/1f8ec003036934bdbe61204f9cf0e860.webp",
      desc: "Black Color Block Unity Polo Shirt",
      discountedPrice: 3036.0,
      price: 3795.0,
      link: "/",
    },
    {
      img1: "https://uniworthdress.com/uploads/product//webp/GSMA2345.webp",
      img2: "https://uniworthdress.com/uploads/product//webp/GSMA2345..webp",
      desc: "Green Geometric Men Accessories Box",
      discountedPrice: 6380.0,
      price: 7975.0,
      link: "/",
    },
    {
      img1: "https://uniworthdress.com/uploads/product//webp/28e17bcd5b64dc143137b17642ba5eb8.webp",
      img2: "https://uniworthdress.com/uploads/product//webp/f5002a5955cee3042b4ee09c81e7d609.webp",
      desc: "D Green Texture Tank Top",
      discountedPrice: 2236.0,
      price: 2795.0,
      link: "/",
    },
    {
      img1: "https://uniworthdress.com/uploads/product//webp/MAPS2332-1...webp",
      img2: "https://uniworthdress.com/uploads/product//webp/MAPS2332-1..webp",
      desc: "Green 100% Polyester Pocket Square",
      discountedPrice: 1365.0,
      price: 1695.0,
      link: "/",
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4,  itemGap: 30,    },
  };

  const items = newArrivels.map((item,index) => (
  <div className="mx-2" key={index}>
    <ProductCard product={item} status={true}/>
  </div>
  ));
  return (
    <div className="w-full px-[60px] py-[20px] overflow-hidden">
      <div className="text-center">
        <h1 className="text-[32px] font-[700] fontStyle text-center  uppercase inline-block  relative after:absolute after:left-0 after:right-0 after:bottom-0 after:block after:w-[70px] after:h-[2px] after:m-auto rounded-lg after:bg-[#ed1c24] ">
          new arrivels
        </h1>
      </div>

      <div className="mt-10">
        <AliceCarousel
          mouseTracking
          autoPlay
          itemGap={20} 
          autoPlayInterval={3000}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          infinite={true}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default NewArrivels;
