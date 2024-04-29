import React, { useState } from 'react';
import personal from "../../mock/personal.json";
import EditModal from "../Barber/EditModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import barber2 from "/public/Image/barber2.jpg";
import { CiEdit } from 'react-icons/ci';


const Personelcard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
    <div className='w-auto h-auto border-2 rounded-xl border-black z-0 '>
      <div className='flex flex-row justify-between pt-2 bg-slate-50 rounded-t-xl'>
        <h1 className='pl-4 text-4xl '>
          personeller
        </h1>
        <button onClick={toggleModal} className='px-3 py-3 bg-secondary text-white rounded-full mr-2 '><CiEdit/></button>
      </div>
      {isModalOpen && <EditModal isOpen={isModalOpen} onClose={toggleModal} />}
      <div>
          <Slider {...settings} className="w-[650px] h-auto flex flex-row pt-4 bg-slate-50 border-2 border-slate-50 rounded-b-xl ">  
      
      {/* Map over personal array to render each card */}
      {personal.map((person, index) => (
        <div key={index} className="flex flex-row h-[450px] text-gray-700 rounded-xl">
          <div className="flex flex-col  p-4">
            <img src={barber2} alt="Barber" className="h-72 w-[550px] rounded-xl" />
            <div className="flex flex-col px-3">
              <h1 className="font-bold text-xl">{person.name}</h1>

  
            </div>
          </div>
        </div>
      ))}
    </Slider>      
    </div></div>
    

  );
};

export default Personelcard;
