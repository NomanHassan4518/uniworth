import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Filter = () => {
  const [min, setMin] = useState(1147);
  const [max, setMax] = useState(5580);
  return (
    <Menu as="div" className="relative mx-10 z-[10] bg-white">
      <div className="">
        <MenuButton className="text-[20px] w-full py-2 font-semibold text-center border mt-2 flex items-center justify-between  ">
          <div className="flex items-center justify-end  w-full">
            <button>Filter</button>
          </div>
          <div className="flex items-center justify-end  w-full px-4">
            <FaSortDown />
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute text-left px-3 left-0 right-0 z-10 mt-2 w-full origin-top-right bg-[#f9f9f9] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:translate-y-0 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-5 grid grid-cols-6 gap-5 ">
          <div className="">
            <h1 className="uppercase text-[20px] mb-5">brand</h1>
            <div className="space-x-3 text-[17px] ">
              <input type="checkbox" />
              <label htmlFor="">Uniworth</label>
            </div>
            <div className="space-x-3 text-[17px] mt-3 ">
              <input type="checkbox" />
              <label htmlFor="">Uniworth Black</label>
            </div>
          </div>

          <div className="">
            <h1 className="uppercase text-[20px] mb-5">Discount %</h1>
            <div className="ml-8">
              <div className="space-x-3 text-[17px] ">
                <input type="checkbox" />
                <label htmlFor="">50%</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">20%</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">35%</label>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="uppercase text-[20px] mb-5 text-center">Colour</h1>
            <div className="ml-2 h-[13rem]  overflow-y-scroll custom-scroll">
              <div className="space-x-3 text-[17px] ">
                <input type="checkbox" />
                <label htmlFor="">Navy/Khaki</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Moss</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">M Blue/White</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Apricot</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">T Green</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">British Green</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Black/Turqoise</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Oatmeal</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Navy/Mustard</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Heather Grey</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">E Blue</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Teal</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Black</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">White</label>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="uppercase text-[20px] mb-5">Size</h1>
            <div className="ml-2 h-[13rem]  overflow-y-scroll custom-scroll">
              <div className="space-x-3 text-[17px] ">
                <input type="checkbox" />
                <label htmlFor="">XS</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">S</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">M</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">L</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">XL</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">XXL</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">14½</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">15</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">15½</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">16</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">16½</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">17</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">17½</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">18</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">18½</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">30</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">32</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">34</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">36</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">38</label>
              </div>
            </div>
          </div>

          <div className="">
            <h1 className="uppercase text-[20px] mb-5 text-center">Fit</h1>
            <div className="ml-2 h-[13rem]  overflow-y-scroll custom-scroll">
              <div className="space-x-3 text-[17px] ">
                <input type="checkbox" />
                <label htmlFor="">Oversized Fit</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Crew Fit</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Premium Fit</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Polo Fit</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Smart Fit</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Regular Fit</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Classic Fit</label>
              </div>
              <div className="space-x-3 text-[17px] mt-3 ">
                <input type="checkbox" />
                <label htmlFor="">Standard Fit</label>
              </div>
            </div>
          </div>

          <div>
            <h1 className="uppercase text-[20px] mb-5">Price</h1>
            <div className="flex items-center justify-between mb-3">
              <p>Rs.{min}</p>
              <p>Rs.{max}</p>
            </div>
            <div className="">
              <RangeSlider
                min={1147}
                max={5580}
                step={2}
                defaultValue={[1147, 5579]}
                onInput={(value) => {
                  setMin(value[0]);
                  setMax(value[1]);
                }}
              />
            </div>
          </div>
        </div>

        <div className="mx-5 flex items-center text-white text-[16px] justify-end space-x-2 mb-2">
          <button className="bg-[#0d1c4b] py-2 px-16 uppercase">Apply</button>
          <button className="bg-black py-2 px-12 uppercase">Clear Filter</button>
          <MenuButton className="bg-[#ed1c24] py-2 px-8 ">Close Filter</MenuButton>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Filter;
