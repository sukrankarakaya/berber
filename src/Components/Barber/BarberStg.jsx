import React, { useState } from "react";
import { CiEdit, CiMail } from 'react-icons/ci';
import { CiPhone } from "react-icons/ci";
import { PiMapPinLineThin } from "react-icons/pi";
import { useSelector } from 'react-redux';
// import BarberStgModal from '../Barber/BarberStgModal';

const BarberDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-light">
      <div className="flex flex-col pt-24">
        <div className="w-full sm:px-6 lg:px-2 max-w-screen-xl mx-auto bg-white border-slate-200 rounded-top-lg p-3">
         <div className="flex flex-row justify-between px-6">
           <h1 className="text-2xl font-bold">
            Barberman - Haircut styling & massage
          </h1>
          <button onClick={openModal}>
              <CiEdit size={20} />
            </button>
         </div>
          <div className="flex flex-crow p-3 gap-4">
            <div className="flex flex-col p-3">
              <img
                src="../../../public/Image/barber4.jpg"
                alt=""
                className="w-full sm:w-96 h-[470px] border border-secondary rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col p-3 w-full sm:w-[590px] gap-4">
                <label className="text-xl w-full font-bold border-b border-secondary">
                  Telefon
                 
                </label>
                <div className="flex flex-row items-center gap-2">
                  <CiPhone fontSize={25} />
                  <p className="text-xl"> (0850) 308 30 93 </p>
                </div>

                <label className="text-xl w-full font-bold border-b border-secondary">
                  Mail
                 
                </label>
                <div className="flex flex-row items-center gap-2">
                  <CiMail fontSize={25} />
                  <p className="text-xl"> Example@gmail.com </p>
                </div>

                <label className="text-xl w-full font-bold border-b border-secondary">
                  Adres
                 
               
                </label>
                <div className="flex flex-row items-center gap-2">
                  <PiMapPinLineThin fontSize={32} />
                  <p className="text-sm">
                    Suadiye Mah Kazım Özalp sokak Alp Yalman Plaza No:60/1-2 Kadıköy İstanbul
                  </p>
                </div>

                <div>
                  <label className="text-xl w-full font-bold border-b border-secondary flex flex-row">
                    Çalışma Saatleri
                  
                  </label>
                  <div className="flex flex-row items-center gap-2">
                    <table className="w-full sm:w-[590px]">
                      <tbody>
                        <tr>
                          <td className="w-44 p-1 border-b border-secondary">
                            Pazartesi
                          </td>
                          <td className="w-44  border-b border-secondary">
                            08:30 - 20:00
                          </td>
                          
                        </tr>
                        <tr>
                          <td className="w-44 p-1 border-b border-secondary">
                            Salı
                          </td>
                          <td className="w-44  border-b border-secondary">
                            08:30 - 20:00
                          </td>
                          
                        </tr>
                        {/* Diğer günler buraya gelecek */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberDetails;
