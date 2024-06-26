import React, { useEffect } from "react";
import { CiPhone } from "react-icons/ci";
import { PiMapPinLineThin } from "react-icons/pi";
import ServicesCard from "./ServicesCard";
import PersonelCard from "./PersonelCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBarberAndEmployeId, getBarberById } from "../../Store/Barber/BarberRegisterSlice";

const BarberDetails = () => {
  const { id } = useParams(); // URL'den gelen `id` parametresini al
  const dispatch = useDispatch(); // Redux'daki `dispatch` fonksiyonunu al
  const barber = useSelector((state) => state.barber.userInfo); // Redux store'daki barber bilgisini seç

  const workingHours = [
    { day: "Pazartesi", hours: "08:30 - 20:00" },
    { day: "Salı", hours: "08:30 - 20:00" },
    { day: "Çarşamba", hours: "08:30 - 20:00" },
    { day: "Perşembe", hours: "08:30 - 20:00" },
    { day: "Cuma", hours: "08:30 - 20:00" },
    { day: "Cumartesi", hours: "Yok" },
    { day: "Pazar", hours: "Kapalı" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          // const employeeResponse = await dispatch(getBarberAndEmployeId(id)).unwrap();
          // const employeeList=employeeResponse.employees
          // console.log('Employe and Barber:', employeeList);

          const barberResponse = await dispatch(getBarberById(id)).unwrap();
          console.log('Barber:', barberResponse
          );
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [dispatch, id]); // `dispatch` veya `id` değiştiğinde useEffect'i çalıştır


  if (!barber) {
    return <div>Yükleniyor...</div>;
    
  }

  return (
    <div className="bg-light">
      <div className="flex flex-col pt-24">
        <div className="w-[1050px] max-sm:w-full bg-white border-2 border-slate-200 rounded-lg p-3">
          <h1 className="text-2xl font-bold">{barber.workPlaceName}</h1>

          <div className="flex flex-row max-sm:flex-col p-3 gap-4">
            <div className="flex flex-col p-3 ">
              <img
                src="../../../public/Image/barber4.jpg"
                alt=""
                className="w-96 h-[470px]  max-sm:h-96  border border-secondary rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col p-3 w-[590px] max-sm:w-full gap-4">
                <label className="text-xl w-full font-bold border-b border-secondary">
                  Telefon
                </label>
                <div className="flex flex-row items-center gap-2">
                  <CiPhone fontSize={25} />
                  <p className="text-xl">{barber.phone}</p>
                </div>

                <label className="text-xl w-full font-bold border-b border-secondary">
                  Adres
                </label>
                <div className="flex flex-row items-center gap-2">
                  <PiMapPinLineThin fontSize={32} />
                  <p className="text-sm">
                    {barber.city}, {barber.district} {barber.street} Bina No:{" "}
                    {barber.buildingNo}/{barber.doorNumber}
                  </p>
                </div>
                <label className="text-xl w-full font-bold border-b border-secondary">
                  Çalışma Saatleri
                </label>
                <div className="flex flex-row items-center gap-2">
                  <table className="w-[590px]">
                    <tbody>
                      {workingHours.map(({ day, hours }, index) => (
                        <tr key={index}>
                          <td className="w-44 p-1 border-b border-secondary">
                            {day}
                          </td>
                          <td className="w-44 p-1 border-b border-secondary">
                            {hours}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row  max-sm:flex-col">
          <div className="flex flex-col p-3">
            <label htmlFor="" className="text-2xl font-bold">
              Hizmetler
            </label>
            <ServicesCard />
          </div>

          <div className="flex flex-col p-3">
            <label htmlFor="" className="text-2xl font-bold">
              Personel Listesi
            </label>
            <div className="flex">
              <PersonelCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberDetails;
