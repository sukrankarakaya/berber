import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBarberById } from '../../Store/Barber/BarberLoginSlice';
import { CiEdit, CiMail, CiPhone } from 'react-icons/ci';
import { PiMapPinLineThin } from 'react-icons/pi';

const BarberDetails = () => {
  const dispatch = useDispatch();
  const barber = useSelector(state => state.barberLogin.barber);
  const userId = useSelector(state => state.barberLogin.userId);
  useEffect(() => {
    if (userId) {
      dispatch(getBarberById(userId));
    }
  }, [dispatch, userId]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const baseURL = "https://localhost:7022";
  const barberPhoto = barber && barber.barberUrl ? baseURL + barber.barberUrl : "";
  console.log(barberPhoto)

  return (
    <div className="bg-light h-auto pt-24">
      <div className="w-full sm:px-6 max-w-screen-xl mx-auto bg-white border-slate-200 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold sm:mb-0">
            {barber ? `${barber.workPlaceName}` : "Yükleniyor..."}
          </h1>
          <button onClick={openModal} className="text-primary hover:text-secondary">
            <CiEdit size={20} />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 w-full sm:w-2/5">
            <img
              src={barberPhoto}
              alt="Barber"
              className="w-full h-auto border border-secondary rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-4 w-full sm:w-3/5">
            {barber && (
              <div className="space-y-4">
                <div>
                  <label className="text-xl font-bold border-b border-secondary w-full block mb-2">
                    Telefon
                  </label>
                  <div className="flex items-center gap-2">
                    <CiPhone fontSize={25} />
                    <p className="text-xl">{barber.phone}</p>
                  </div>
                </div>

                <div>
                  <label className="text-xl font-bold border-b border-secondary w-full block mb-2">
                    Mail
                  </label>
                  <div className="flex items-center gap-2">
                    <CiMail fontSize={25} />
                    <p className="text-xl">{barber.mail}</p>
                  </div>
                </div>

                <div>
                  <label className="text-xl font-bold border-b border-secondary w-full block mb-2">
                    Adres
                  </label>
                  <div className="flex items-center gap-2">
                    <PiMapPinLineThin fontSize={32} />
                    <p className="text-sm">
                      {`${barber.city} ${barber.district} ${barber.street} ${barber.buildingNo}/ ${barber.doorNumber}`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label className="text-xl font-bold border-b border-secondary w-full block mb-2">
                Çalışma Saatleri
              </label>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"].map((day, index) => (
                      <tr key={index}>
                        <td className="w-44 p-1 border-b border-secondary">{day}</td>
                        <td className="w-44 p-1 border-b border-secondary">08:30 - 20:00</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberDetails;
