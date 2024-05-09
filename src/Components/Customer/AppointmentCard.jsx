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
        className="flex flex-row p-3 w-[540px] h-80  border border-secondary rounded-md hover:bg-gray "
      >
        <div className="w-1/2 h-full p-1 rounded-md">
          <img
            src="../../../public/Image/barber2.jpg"
            alt=""
            className="w-full h-full rounded-md"
          />
        </div>

        <div className="flex flex-col w-1/2 px-3 gap-4 ">
          <div className="flex flex-row gap-2">
            <label className="flex flex-row text-lg font-bold gap-2 ">
              Berber Adı:
            </label>
            <p className="text-lg font-extralight">{barberName}</p>
          </div>
          <label className="flex flex-row text-lg font-bold gap-2 ">
            Hizmet: <p className="text-lg font-extralight">{service}</p>
          </label>
          <label className="flex flex-row text-lg font-bold gap-2 ">
            Tarih: <p className="text-lg font-extralight">{date}</p>
          </label>

          <label className="flex flex-row text-lg font-bold gap-2 ">
            Saat: <p className="text-xl font-extralight">{time}</p>
          </label>

          <label className="flex flex-row text-lg font-bold gap-2 ">
            Durum: <p className="text-lg font-extralight">{status}</p>
          </label>

          <div className="flex justify-end">
            <button
              className="flex w-32 h-12 p-3 justify-center  text-xl items-center   bg-secondary text-white rounded-md hover:bg-opacity-95"
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
