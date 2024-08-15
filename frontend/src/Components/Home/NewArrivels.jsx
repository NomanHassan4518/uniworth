import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCard from "../Products/ProductCard";
import { data } from "../data";

const NewArrivels = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4,  itemGap: 30,    },
  };

  const items = data.map((item,index) => (
  <div className="mx-2" key={index}>
    <ProductCard product={item} height={{boxHeight:"450px",imgHeight:"350px"}}/>
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
