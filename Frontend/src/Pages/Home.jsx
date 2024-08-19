import React from "react";
import HomeSlider from "../Components/Home/HomeSlider";
import TopCategories from "../Components/Home/TopCategories";
import NewArrivels from "../Components/Home/NewArrivels";
import Accessories from "../Components/Home/Accessories";
import Exclusiveproducts from "../Components/Home/Exclusiveproducts";
import Services from "../Components/Home/Services";

const Home = () => {
  return (
   <div className="w-full h-full " >
     <div className="z-0 relative -mt-[135px] w-full h-full ">
      <div>
        <HomeSlider />
      </div>
      <div>
        <TopCategories />
      </div>
      <div>
        <NewArrivels/>
      </div>
      <div>
        <Accessories/>
      </div>
      <div>
        <Exclusiveproducts/>
      </div>
      <div>
        <Services/>
      </div>
    </div>
   </div>
  );
};

export default Home;
