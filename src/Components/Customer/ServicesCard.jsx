import React, { useState } from "react";
import services from "../../mock/service.json";
import AppointmentModal from "./AppointmentModal";
 

const ServicesCard = () => {
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({});


  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className=" flex flex-col w-1/2 max-sm:w-full gap-4 ">
      {services.map((service, id) => (
        <div key={service.id} className=" flex flex-row w-[500px] max-sm:w-full  max-sm:h-14 h-16 justify-between items-center p-2 gap-3 border border-secondary rounded-lg "> 
        
        <label htmlFor="" className="text-xl text-secondary hover:bg-opacity-75 max-sm:text-base ">{service.service}</label>
        <div className=" flex flex-row gap-4 justify-center items-center">
        <p className="text-xl font-bold ">150 ₺</p>
        <button onClick={() => handleOpenModal(service)} className="h-10 w-32 max-sm:h-11 max-sm:w-28 bg-secondary rounded-md text-white hover:opacity-95 ">Randevu Al</button>
        </div>
        
        </div>
      ))}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} service={selectedService.service} barberName="Berber Adı" />
      
    </div>
  );
};

export default ServicesCard;
