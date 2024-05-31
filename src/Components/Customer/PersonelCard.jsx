import React, { useEffect, useState } from "react";
import personals from "../../mock/barberPersonals.json";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBarberAndEmployeId } from "../../Store/Barber/BarberRegisterSlice";

const PersonelCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // Redux'daki `dispatch` fonksiyonunu al
 
  const [employee, setEmployee] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const employeeResponse = await dispatch(getBarberAndEmployeId(id)).unwrap();
          setEmployee(employeeResponse.employees)
          console.log('Employe and Barber:', employee);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [dispatch, id]); 
  const baseURL = "https://localhost:7022";
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 p-3 gap-11 items-center  ">
      {employee.map((person, id) => (
        <div
          key={person.id}
          className="flex flex-col gap-4  w-56 h-56  max-sm:w-80 bg-light-200 rounded-md items-center  hover:bg-slate-20  "
        >
          <img
            src={baseURL+person.employeeUrl}
            alt=""
            className="h-40 w-56  rounded-lg p-2"
          />
          <label htmlFor="" className="text-xl font-semibold">
            {person.name+ person.lastName}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PersonelCard;
