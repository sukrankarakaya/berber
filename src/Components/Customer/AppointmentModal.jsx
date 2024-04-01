// Modal.js
import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AppointmentModal = ({ isOpen, onClose, service, barberName }) => {
  if (!isOpen) return null;
  console.log(service);
  const handleOutsideClick = (event) => {
    onClose();
  };

  const handleInsideClick = (event) => {
    event.stopPropagation();
  };

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; // JavaScript'te ay endeksi 0'dan başlar, bu yüzden 1 ekliyoruz
    let day = today.getDate();

    // Ay ve gün tek haneli ise önlerine sıfır ekleyerek iki haneli olmasını sağlarız
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const watches = [
    { time: "08:00" },
    { time: "08:30" },
    { time: "09:00" },
    { time: "09:30" },
    { time: "10:00" },
    { time: "10:30" },
    { time: "11:00" },
    { time: "11:30" },
    { time: "12:00" },
    { time: "12:30" },
    { time: "13:00" },
    { time: "13:30" },
    { time: "14:00" },
    { time: "14:30" },
    { time: "15:00" },
    { time: "15:30" },
    { time: "16:00" },
    { time: "16:30" },
    { time: "17:00" },
    { time: "17:30" },
    { time: "18:00" },
    { time: "18:30" },
    { time: "19:00" },
    { time: "19:30" },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleReservation = () => {
    if (activeIndex !== null) {
      onClose();
    } else {
      alert("Lütfen bir saat seçin!");
    }
  };
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-55 flex justify-center items-center "
      onClick={handleOutsideClick}
    >
      <div
        className="flex flex-col gap-3 bg-white p-4 rounded w-[550px] "
        onClick={handleInsideClick}
      >
        <div className="flex flex-row justify-between items-center ">
          <h2 className="text-3xl font-bold">Randevu Detayları</h2>
          <button
            onClick={onClose}
            className="w-10 h-10  text-2xl text-red-600 rounded hover:bg-gray-200 hover:bg-opacity-40  hover:font-bold "
          >
            X
          </button>
        </div>
        <label className="flex flex-row text-xl font-bold gap-2 ">
          Berber: <p className="text-xl font-extralight">{barberName}</p>{" "}
        </label>
        <label className="flex flex-row text-xl font-bold gap-2 ">
          Servis: <p className="text-xl font-extralight">{service}</p>{" "}
        </label>

        <div className="flex flex-row w-60 ">
          <label htmlFor="" className="text-xl font-bold">
            Tarih:
          </label>

          <input
            type="date"
            name=""
            value={selectedDate}
            id=""
            onChange={handleDateChange}
            className="outline-none w-32 text-lg pl-2 font-extralight "
          />
        </div>

        <di className="flex flex-col ">
          <label htmlFor="" className="text-xl font-bold">
            Saatler:
          </label>
          <div className="grid grid-cols-4 gap-2 w-96 -mt-5 pl-24 ">
            {watches.map((watch, index) => (
              <button
                key={index}
                className={classNames(
                  "w-16 h-10 border rounded-md text-lg",
                  activeIndex === index && " text-white bg-secondary hover:",
                  !activeIndex &&
                    "border-secondary hover:bg-black hover:bg-opacity-55"
                )}
                onClick={() => handleButtonClick(index)}
              >
                {watch.time}
              </button>
            ))}
          </div>
        </di>

        <div className="flex items-center justify-end p-3 ">
          <Link to="/myappointment">
            <button
              className="w-32 h-12 bg-secondary rounded-md text-white hover:bg-opacity-95 "
              onClick={handleReservation}
            >
              Rendevu Al
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
