import React, { useState } from "react";
import CancellationModal from "./CancellationModal";

const AppointmentCard = ({ appointment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { barberName, service, date, time, status=false,id } = appointment;

  return (
    <div className="">
      <div key={id}
        className="flex flex-row p-3 h-80 max-sm:h-52 bg-light-300 border-0 shadow-xl rounded-md hover:bg-light-200 "
      >
        <div className="w-1/2 h-full p-1 rounded-md">
          <img
            src="../../../public/Image/barber2.jpg"
            alt=""
            className="w-full h-full rounded-md"
          />
        </div>

        <div className="flex flex-col w-1/2 px-3 gap-4 max-sm:gap-1 text-lg max-sm:text-sm ">
          <div className="flex flex-row gap-2-">
            <label className="flex flex-row text-nowrap  font-bold gap-2 ">
              Berber Adı: 
            </label>
            <p className=" font-extralight">  {barberName}</p>
          </div>
          <label className="flex flex-row  font-bold gap-2 ">
            Hizmet: <p className="font-extralight">{service}</p>
          </label>
          <label className="flex flex-row  font-bold gap-2 ">
            Tarih: <p className="font-extralight">{date}</p>
          </label>
   
          <label className="flex flex-row font-bold gap-2 ">
            Saat: <p className=" font-extralight">{time}</p>
          </label>

          <label className="flex flex-row  font-bold gap-2 ">
            Durum: <p className=" font-extralight">{status}</p>
          </label>

          <div className="flex justify-end">
            <button
              className="flex w-32 h-12 max-sm:h-9 max-sm:w-24 max-sm:text-sm max-sm:mt-2   justify-center  text-xl items-center   bg-secondary text-white rounded-md hover:bg-opacity-95"
              onClick={() => setIsModalOpen(true)}
            >
              İptal Et
            </button>
          </div>
        </div>
        <CancellationModal
          isOpen={isModalOpen}
          onCancel={handleCancel}
          onClose={() => setIsModalOpen(false)}
          id={id}
        />
      </div>
     
    </div>
  );
};

export default AppointmentCard;
