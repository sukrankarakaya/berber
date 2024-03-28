import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import bestBarbers from "../../mock/bestbarbers.json";
import barber2 from "/public/Image/barber2.jpg";

const BestBarbers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
  
    <div className="w-full h-full overflow-hidden relative ">
    <style>
      {`
        /* Sol ok */
        .slick-prev {
          left: 25px; 
          z-index: 1; 
          background-color: transparent; 
          border: none; 
          font-size: 100px; 
          color: blac; 
          height: 400px;
          width: 100px;

        }
        .slick-prev::after {
          content: ""; /* İçeriği boş bir string olarak ayarlayarak gizler */
        }


        

        /* Sağ ok */
        .slick-next {
          right: 25px; 
          z-index: 1; 
          background-color: transparent; 
          border: none; 
          font-size: 100px; 
          color: blac; 
          height: 400px;
          width: 100px;
        }
        .slick-next::after {
          content: ""; /* İçeriği boş bir string olarak ayarlayarak gizler */
        }
       

      `}
    </style>
  <Slider {...settings} className="w-[1000px] h-auto flex flex-row p-5  bg-slate-50  rounded-xl">

      {bestBarbers.map((barber) => (
        <div key={barber.id} className="flex  flex-row p-6 h-[400px]    text-gray-700 rounded-xl">
          <div className="flex flex-col gap-4 ">
            <img src={barber2} alt={barber.name} className="h-64 rounded-xl" />
            <div className="flex flex-col gap-3 px-3">
              <h1 className="font-bold text-xl">{barber.name}</h1>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt />
                <span>{barber.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <BsFillStarFill className="text-yellow-600" />
                <span>{barber.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default BestBarbers;
