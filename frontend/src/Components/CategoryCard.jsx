import React from 'react'

const CategoryCard = (props) => {
    const item=props.item
  return (
    <div  className="relative w-full h-[600px] overflow-hidden group">
    {/* Background Image */}
    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 fontStyle"
         style={{
           backgroundImage: `url(${item.img})`,
           backgroundSize: "cover",
           backgroundPosition: "center center",
           backgroundRepeat: "no-repeat",
           width: "100%",
           height: "100%",
         }}
    />
    {/* Content */}
    <div className="absolute bottom-9 w-full flex justify-center">
      <div className="text-center">
        <p className="text-[25px] font-[700] uppercase text-white border border-white w-[330px] py-[5px] px-[40px]">
          {item.name}
        </p>
        <p className="text-white text-center font-bold text-[18px]  mt-3">
          Shop Now
        </p>
      </div>
    </div>
  </div>
  )
}

export default CategoryCard
