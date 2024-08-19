import React from "react";
import CategoryCard from "../CategoryCard";

const TopCategories = () => {
  const categories = [
    {
      img: "https://uniworthshop.com/ui/images/banners/01.jpg",
      name: "polos",
    },
    {
      img: "https://uniworthshop.com/ui/images/banners/02.jpg",
      name: "formal shirts",
    },
    {
      img: "https://uniworthshop.com/ui/images/banners/03.jpg",
      name: "gym wear",
    },
    {
      img: "https://uniworthshop.com/ui/images/banners/04.jpg",
      name: "tees",
    },
    {
      img: "https://uniworthshop.com/ui/images/banners/05.jpg",
      name: "fragrances",
    },
    {
      img: "https://uniworthshop.com/ui/images/banners/06.jpg",
      name: "denim",
    },
  ];
  return (
    <div className="px-[45px] py-[20px] grid grid-cols-3 ">
    {categories.map((item,index) => (
     <div key={index}>
      <CategoryCard item={item} />
     </div>
    ))}
  </div>
  
  );
};

export default TopCategories;
