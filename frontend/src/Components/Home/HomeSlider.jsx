import React, { useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const HomeSlider = () => {
  const carousel = useRef();
  const homeCarouselData = [
    {
      img: "https://uniworthdress.com/uploads/slider/23598ff851a3347de53fe53a9f153a3e.jpg",
      link: "/",
    },
    {
      img: "https://uniworthdress.com/uploads/slider/39cf03c079d9b3aa40bd89a8a39a0095.jpg",
      link: "/",
    },
    {
      img: "https://uniworthdress.com/uploads/slider/6be23e22f95c26e32a3b3b3823c7757e.jpg",
      link: "/",
    },
    {
      img: "https://uniworthdress.com/uploads/slider/57ae0895cd4eea1c34ad11a503c3954b.jpg",
      link: "/",
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = homeCarouselData.map((item, index) => (
    <div key={index} className="">
      <img src={item.img} alt={`Slide ${index}`} className="carousel-image" />
    </div>
  ));

  useEffect(() => {
    const handleDragStart = (e) => e.preventDefault();
    document.querySelectorAll('.alice-carousel').forEach(carousel => {
      carousel.addEventListener('dragstart', handleDragStart);
    });

    return () => {
      document.querySelectorAll('.alice-carousel').forEach(carousel => {
        carousel.removeEventListener('dragstart', handleDragStart);
      });
    };
  }, []);


  return (
    <div className="relative group">
      <AliceCarousel
        mouseTracking={false}
        // touchTracking={false}
        autoPlay
        autoPlayInterval={3000}
        disableDotsControls
        disableButtonsControls
        items={items}
        responsive={responsive}
        infinite={true}
        ref={carousel}
        animationDuration={800}
      />
      <div>
        <button
          className="absolute top-[20rem] left-0 transition-transform translate-x-0 group-hover:translate-x-16 duration-300 h-[2rem] w-[2rem] bg-[#dddbdb] rounded-full flex items-center justify-center "
          onClick={(e) => carousel?.current?.slidePrev(e)}
        >
          <MdNavigateBefore className="text-[28px]" />
        </button>
        <button
          className="absolute top-[20rem] right-0 transition-transform translate-x-0 group-hover:-translate-x-16 duration-300 h-[2rem] w-[2rem] bg-[#dddbdb] rounded-full flex items-center justify-center "
          onClick={(e) => carousel?.current?.slideNext(e)}
        >
          <MdNavigateNext className="text-[28px]" />
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
