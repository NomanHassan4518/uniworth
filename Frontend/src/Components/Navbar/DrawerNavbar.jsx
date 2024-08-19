import React, { useState } from "react";
import { Drawer } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DrawerNavbar = ({ drawerStatus, onClose }) => {
  const [clickLink, setClickLink] = useState(null);
  const navigate=useNavigate();

  const handleNavigate=(link)=>{
    navigate(`/${link}`)
    onClose()
    setClickLink(null);
  }

  const handleLink = (index) => {
    setClickLink(index);
    if (clickLink === index) {
      setClickLink(null);
    }
  };

  const links = [
    {
      name: "Summer Collection",
      subMenu: [
        "T Shirts",
        "Premium Tee",
        "Polo",
        "Graphic Tees",
        "Basic Tees",
        "Casual Shirts",
        "Mens Chinos",
        "Denim Jeans",
        "600 Traveler",
        "700 Smart Fit",
        "800 Straight Fit",
      ],
    },
    {
      name: "Shirts",
      subMenu: [
        "Business Casual",
        "The White Club",
        "Double Cuff",
        "Formal Shirts",
        "Plain Shirts",
        "Check Shirts",
        "Stripe Shirts",
        "Be Bright",
        "Printed Shirts",
        "Textured Shirts",
        "Designer Shirts",
        "",
      ],
    },
    {
      name: "Trousers",
      subMenu: ["Formal Trousers", "Cotton Trousers", "Casual Trousers"],
    },
    {
      name: "Suiting",
      subMenu: [
        "Suit",
        "Lapel Pin",
        "Coat Button",
        "Safari Suit",
        "Wedding Edits",
        "Western Waistcoat",
        "Tie & Cufflink Set",
        "Gift Box",
        "Pocket ",
        "Bow Tie",
      ],
    },
    {
      name: "Ethnic Wear",
      subMenu: [
        "Kameez Shalwar",
        "Kurta Pajama",
        "Ethnic Combo",
        "Kurtas",
        "Shalwar",
        "Ethnic Pajama",
        "Waistcoats",
        "Saleem Sheikh",
        "SS Shalwar Suit",
        "SS WAISTCOATS",
        "SS KURTAS",
      ],
    },
    {
      name: "Active Wear",
      subMenu: [
        "Gym Short",
        "Gym Tee",
        "Gym Trouser",
        "Track Suit",
        "Tank Shop",
      ],
    },
    { name: "Casual Pajama", subMenu: [] },
    { name: "Loungewear", subMenu: ["T-Shirt & Pajama"] },
    {
      name: "Accessories ",
      subMenu: [
        "Ties",
        "Tie Pin",
        "Cufflinks",
        "Belt",
        "Wallets",
        "Fragrance",
        "Socks",
        "Undergarments",
        "Boxer Shorts",
        "Vest",
      ],
    },
    {
      name: "Ceremonial Collection ",
      subMenu: [
        " Prince Coats",
        " Sherwani",
        " Designer Waistcoats",
        " Fancy Stole",
      ],
    },
    { name: "Green Spirited", subMenu: [] },
    { name: "Sale", subMenu: [] },
  ];

  return (
    <div>
      <Drawer
        title="UNIWORTH"
        open={drawerStatus}
        onClose={onClose}
        placement="left"
        className="bla bla bla"
      >
        <div className="relative  px-2  pb-6 border-b-2">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index} className=" group">
                <div
                  className={`flex items-center justify-between text-[28px] ${
                    clickLink === index ? "text-[#ed1c24]" : "text-black"
                  }`}
                >
                  <p
                  
                    className=" text-[18px] cursor-pointer font-[600] uppercase hover:text-blue-600" onClick={()=>{handleNavigate(link.name)}}
                  >
                    {link.name}
                  </p>

                  {link.subMenu.length !== 0 ? (
                    clickLink === index ? (
                      <span
                        className="group-hover:text-[#ed1c24] cursor-pointer"
                        onClick={() => {
                          setClickLink(null);
                        }}
                      >
                        <IoIosArrowUp />
                      </span>
                    ) : (
                      <span
                        className="group-hover:text-[#ed1c24] cursor-pointer"
                        onClick={() => {
                          handleLink(index);
                        }}
                      >
                        <IoIosArrowDown />
                      </span>
                    )
                  ) : (
                    <span></span>
                  )}
                </div>
                {clickLink === index && (
                  <div className="2">
                    {link.subMenu.map((path, index) => (
                      <div className="space-y-3 mt-4 ml-4" key={index} onClick={()=>handleNavigate(path)}>
                        <Link
                          to="/"
                          className="text-[18px] relative hover:!text-black after:w-0 after:h-[2px] after:bg-[#ed1c24] after:top-7 hover:after:w-full after:duration-500 after:inline-block after:absolute after:left-0"
                        >
                          {path}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 space-y-3">
          <Link
            to="/"
            className=" text-[16px] font-[600] block hover:text-blue-600"
          >
            Made To Measure
          </Link>
          <Link
            to="/"
            className=" text-[16px] font-[600] block hover:text-blue-600"
          >
            Uniworth Black
          </Link>
          <Link
            to="/"
            className=" text-[16px] font-[600] block hover:text-blue-600"
          >
            Order Tracking
          </Link>
          <Link
            to="/"
            className=" text-[16px] font-[600] block hover:text-blue-600"
          >
            Shipping Policy
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerNavbar;
