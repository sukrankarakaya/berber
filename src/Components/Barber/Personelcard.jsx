import React, { useState, useEffect } from "react";
import EditModal from "../Barber/EditModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { getEmploy } from "../../Store/Barber/EmployeRegisterSlice";

const Personelcard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const employees = useSelector((state) => state.employ.employees);
  const dispatch = useDispatch();
  console.log(employees);
  useEffect(() => {
    dispatch(getEmploy());
  }, [dispatch]);

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
          dots: true,
        },
      },
    ],
  };

  // Redux store'dan verileri alındığını doğrula
  if (!Array.isArray(employees) || employees.length === 0) {
    return null; // veya başka bir uygun durum
  }
  console.log(employees[0].employeeUrl)

  return (
    <div className="h-fit ">
      <div className="flex flex-row justify-between pt-2 bg-slate-50 rounded-t-xl">
        <h1 className="pl-4 text-4xl ">Personeller</h1>
        <button
          onClick={toggleModal}
          className="px-3 py-3 bg-secondary text-white rounded-full mr-2 "
        >
          <CiEdit />
        </button>
      </div>
      {isModalOpen && <EditModal isOpen={isModalOpen} onClose={toggleModal} />}
      {employees.length > 0 && (
        <div>
          <Slider
            {...settings}
            className=" h-auto flex flex-row pt-4 bg-slate-50 border-2 border-slate-50 rounded-b-xl "
          >
            {employees.map((employee, index) => (
              <div
                key={index}
                className="flex flex-row h-[450px] text-gray-700 rounded-xl items-center"
              >
                <div className="flex flex-col p-4">
                  <img
                    src={employee.employeeUrl}
                    alt=""
                    className="w-24 h-24 rounded-full"
                  />
                  <h1 className="text-xl font-bold mt-2">
                    {employee.name} {employee.surname}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Personelcard;
