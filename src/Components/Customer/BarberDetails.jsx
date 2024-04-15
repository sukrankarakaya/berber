import React from "react";
import Navbar from "../Barber/Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import BestBarbers from "./BestBarbers";
import { CiPhone } from "react-icons/ci";
import { PiMapPinLineThin } from "react-icons/pi";
import ServicesCard from "./ServicesCard";
import PersonelCard from "./PersonelCard";
import NavbarCustomer from "./NavbarCustomer";
const BarberDetails = () => {

  const workingHours = [
    { day: "Pazartesi", hours: "08:30 - 20:00" },
    { day: "Salı", hours: "08:30 - 20:00" },
    { day: "Çarşamba", hours: "08:30 - 20:00" },
    { day: "Perşembe", hours: "08:30 - 20:00" },
    { day: "Cuma", hours: "08:30 - 20:00" },
    { day: "Cumartesi", hours: "yokuz" },
    { day: "Pazar", hours: "Kapalı" },
  ];
  return (
    <div className="bg-light">
      <div className="flex flex-col pt-24 px-44  ">
        <div className="w-[1050px] bg-white border-2 border-slate-200 rounded-lg p-3">
          <h1 className=" text-2xl font-bold">
            Barberman - Haircut styling & massage
          </h1>

          <div className="flex flex-crow p-3 gap-4">
            <div className="flex flex-col p-3 ">
              <img
                src="../../../public/Image/barber4.jpg"
                alt=""
                className=" w-96 h-[470px] border border-secondary rounded-xl"
              />
            </div>

            <div className="flex flex-col  ">
              <div className="flex flex-col p-3 w-[590px] gap-4">
                <label
                  htmlFor=""
                  className="text-xl w-full font-bold  border-b border-secondary"
                >
                  Telefon
                </label>
                <div className="flex flex-row items-center gap-2 ">
                  <CiPhone fontSize={25} />
                  <p className="text-xl  "> (0850) 308 30 93 </p>
                </div>

                <label
                  htmlFor=""
                  className="text-xl w-full font-bold  border-b border-secondary"
                >
                  Adres
                </label>
                <div className="flex flex-row items-center gap-2 ">
                  <PiMapPinLineThin fontSize={32} />
                  <p className="text-sm  ">
                     Suadiye Mah Kazım Özalp sokak Alp Yalman Plaza No:60/1-2 Kadıköy
                    İstanbul{" "}
                  </p>
                </div>
                <label
                  htmlFor=""
                  className="text-xl w-full font-bold  border-b border-secondary"
                >
                  Çalışma Saatleri
                </label>
                <div className="flex flex-row items-center gap-2 ">
                  <table className="w-[590px]  ">
                    <tbody>
                      {workingHours.map(({ day, hours }, index) => (
                        <tr key={index} className="  ">
                          <td className=" w-44 p-1 border-b border-secondary ">
                            {day}
                          </td>
                          <td className=" w-44 p-1 border-b border-secondary ">
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

      <div className="flex flex-row">
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
          <div className="flex  ">

          <PersonelCard/>

          </div>
        </div>
      </div>

      </div>

    </div>
  );
};

export default BarberDetails;
