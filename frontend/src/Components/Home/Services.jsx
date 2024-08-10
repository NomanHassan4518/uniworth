import React from 'react'
import CategoryCard from '../CategoryCard'

const Services = () => {
    const categories=[
        {
            img: "https://uniworthshop.com/ui/images/banners/MTM.jpg",
            name: "made to measure",
          },
          {
            img: "https://uniworthshop.com/ui/images/banners/uniblack.jpg",
            name: "uniworth black",
          },
          {
            img: "https://uniworthshop.com/ui/images/banners/ceremonial.jpg",
            name: "geremonial",
          },
    ]
  return (
  <>
    <div className='my-10 mx-5 border-y '>
      <div className="grid grid-cols-3 fontStyle py-4">
        <div className="flex items-center justify-center space-x-2 py-6 border-r group">
            <img src="https://uniworthshop.com/ui/images/icons/11.png" alt="" />
            <h1 className='text-[18px] font-semibold group-hover:text-[#ed1c24] '>Free Shipping</h1>
        </div>
        <div className="flex items-center justify-center space-x-2  border-r group">
            <img src="https://uniworthshop.com/ui/images/icons/12.png" alt="" />
            <h1 className='text-[18px] font-semibold group-hover:text-[#ed1c24] '>Secure Payment</h1>
        </div>
        <div className="flex items-center justify-center space-x-2  group">
            <img src="https://uniworthshop.com/ui/images/icons/13.png" alt="" />
            <h1 className='text-[18px] font-semibold group-hover:text-[#ed1c24] '>Premuim Quality</h1>
        </div>
      </div>
     
    </div>
    <div className="px-12 mt-5 grid grid-cols-3 ">
    {categories.map((item) => (
     <CategoryCard item={item}/>
    ))}
  </div>
  </>
  )
}

export default Services
