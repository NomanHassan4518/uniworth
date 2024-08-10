import React, { useState } from 'react'
import ProductCard from '../ProductCard';

const Exclusiveproducts = () => {
    const [key,setKey]=useState("Shirts");
    const [activeIndex,setActiveIndex]=useState(0)

    const handleKey=(index)=>{
       setKey(productsContent[index].key) 
        setActiveIndex(index)
    }
    const productsContent=[
        {
            key:"Shirts",
            tittle:"Shirts",
            products:[
                {
                  img1: "https://uniworthdress.com/uploads/product//webp/FS2741-1RF.webp",
                  img2: "https://uniworthdress.com/uploads/product//webp/FS2741-1RF...webp",
                  desc: "White/Black Stripe Classic Fit Shirt",
                  discountedPrice: 6380.0,
                  price: 7975.0,
                  link: "/",
                },
                {
                  img1: "https://uniworthdress.com/uploads/product//webp/FS2719SF.webp",
                  img2: "https://uniworthdress.com/uploads/product//webp/FS2719SF...webp",
                  desc: "Stripe White/Sky Tailored Smart Fit Shirt",
                  discountedPrice: 7180.0,
                  price: 8975.0,
                  link: "/",
                },
                {
                  img1: "https://uniworthdress.com/uploads/product//webp/FS20344SF..webp",
                  img2: "https://uniworthdress.com/uploads/product//webp/FS20344SF...webp",
                  desc: "Camel Self Tailored Smart Fit Shirt",
                  discountedPrice: 4796.0,
                  price: 5995.0,
                  link: "/",
                },
                {
                  img1: "https://uniworthdress.com/uploads/product//webp/FS1320-1RF.....webp",
                  img2: "https://uniworthdress.com/uploads/product//webp/FS1320-1RF....webp",
                  desc: "Plain Navy Classic Fit Shirt",
                  discountedPrice: 3571.0,
                  price: 5495.0,
                  link: "/",
                },
                {
                  img1: "https://uniworthdress.com/uploads/product//webp/FS1330-4RF....webp",
                  img2: "https://uniworthdress.com/uploads/product//webp/FS1330-4RF...webp",
                  desc: "Plain L Grey Classic Fit Shirt",
                  discountedPrice: 3996.0,
                  price: 4895.0,
                  link: "/",
                },
                {
                  img1: "https://uniworthdress.com/uploads/product//webp/FS2785-1SF.webp",
                  img2: "https://uniworthdress.com/uploads/product//webp/FS2785-1SF...webp",
                  desc: "Sky Check Tailored Smart Fit Shirt",
                  discountedPrice: 6380.0,
                  price: 7975.0,
                  link: "/",
                },
                
              ]
        },{
            key:"Accessories",
            tittle:"Accessories",
            products:[
              {
                img1: "https://uniworthdress.com/uploads/product//webp/WT229B-2.webp",
                img2: "https://uniworthdress.com/uploads/product//webp/WT229B-2...webp",
                desc: "Brown 100% Leather Wallet",
                discountedPrice: 3036.0,
                price: 3795.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/SKF2423-3..webp",
                img2: "https://uniworthdress.com/uploads/product//webp/SKF2423-3...webp",
                desc: "Grey Plain No Show Socks",
                discountedPrice: 796.0,
                price: 995.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/GSCT2406-4..webp",
                img2: "https://uniworthdress.com/uploads/product//webp/GSCT2406-4...webp",
                desc: "Pink Self Cufflink Tie Set",
                discountedPrice: 3196.0,
                price: 3995.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/WT2229A-4.webp",
                img2: "https://uniworthdress.com/uploads/product//webp/WT2229A-4...webp",
                desc: "Black 100% Leather Wallet",
                discountedPrice: 3036.0,
                price: 3795.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/MALP2414..webp",
                img2: "https://uniworthdress.com/uploads/product//webp/MALP2414...webp",
                desc: "Green Floral Coat Lapel Pin",
                discountedPrice: 1196.0,
                price: 1495.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/UBS2774.webp",
                img2: "https://uniworthdress.com/uploads/product//webp/UBS2774.webp",
                desc: "Sky Check Tailored Smart Fit Shirt",
                discountedPrice: 6380.0,
                price: 7975.0,
                link: "/",
              },
              
            ]
        },{
            key:"Summer Collection",
            tittle:"Summer Collection",
            products:[
              {
                img1: "https://uniworthdress.com/uploads/product//webp/43faa8aa70d8cc70cd04f4edc851acf8.webp",
                img2: "https://uniworthdress.com/uploads/product//webp/TP2413.webp",
                desc: "T Green Plain Pique Polo Shirt",
                discountedPrice: 2796.0,
                price: 3495.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/TP2433..webp",
                img2: "https://uniworthdress.com/uploads/product//webp/TP2433...webp",
                desc: "Heather Grey Color Block Polo Shirt",
                discountedPrice: 3036.00,
                price: 3795.00,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/648ec919238611efd320e4d8a5e9060c.webp",
                img2: "https://uniworthdress.com/uploads/product//webp/82d4ef918a0fc1454966f2d0c1f7825d.webp",
                desc: "Navy Color Block Polo Shirt",
                discountedPrice: 3436.00,
                price: 4295.00,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/FS2709-1RF..webp",
                img2: "https://uniworthdress.com/uploads/product//webp/FS2709-1RF...webp",
                desc: "White/Green Check Classic Fit Linen Shirt",
                discountedPrice: 5580.0,
                price: 6975.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/TCN2419.webp",
                img2: "https://uniworthdress.com/uploads/product//webp/TCN2419...webp",
                desc: "Green Printed Crew Neck T-Shirt",
                discountedPrice: 1836.0,
                price: 2295.0,
                link: "/",
              },
              {
                img1: "https://uniworthdress.com/uploads/product//webp/CS2368S..webp",
                img2: "https://uniworthdress.com/uploads/product//webp/CS2368S...webp",
                desc: "Navy/Orange Check Smart Fit Casual Shirt",
                discountedPrice: 3836.0,
                price: 4795.0,
                link: "/",
              },
            ]
        }
    ]
  return (
    <div className='my-5'>
    <div className='text-center fontStyle'>
        <p className='text-[#ed1c24] text-[20px] font-semibold  '>Exclusive Products</p>
        <h1 className='text-[34px] font-extrabold uppercase mt-1 relative inline-block  after:w-[70px] after:h-[2px] after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-[#ed1c24] after:rounded-lg after:block after:mx-auto  '>browse more</h1>
    </div>
    <div className="mt-5 text-center flex items-center justify-center space-x-10">
        {
            productsContent.map((item,index)=>(
                <div key={index}>
                    <h1 className={`text-[19px] fontStyle cursor-pointer ${productsContent[index].key===key?" text-[#ed1c24]":"text-black"}`} onClick={()=>{handleKey(index)}}>{item.key}</h1>
                </div>
            ))
        }
    </div>
    <div className="mt-8 grid grid-cols-3 gap-8 px-12">
        {
            productsContent[activeIndex].products.map((item,index)=>(
                <div className='' key={index}>
                <ProductCard product={item} status={false}/>
            </div>
            ))
        }
    </div>
    </div>
  )
}

export default Exclusiveproducts
