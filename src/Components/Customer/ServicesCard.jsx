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
    <div className=" flex flex-col w-1/2 gap-4 ">
      {services.map((service, id) => (
        <div key={service.id} className=" flex flex-row w-[500px] h-16 justify-between items-center p-3 gap-3 border border-secondary rounded-lg "> 
        
        <label htmlFor="" className="text-xl text-secondary hover:bg-opacity-75 ">{service.service}</label>
        <div className=" flex flex-row gap-4 justify-center items-center">
        <p className="text-xl font-bold ">150 ₺</p>
        <button onClick={() => handleOpenModal(service)} className="h-10 w-32 bg-secondary rounded-md text-white hover:opacity-95 ">Randevu Al</button>
        </div>
        
        </div>
      ))}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} service={selectedService.service} barberName="Berber Adı" />
      
    </div>
  );
};

export default ServicesCard;
