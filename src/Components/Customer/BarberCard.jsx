import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBarbers, setBarbers } from "../../Store/Barber/BarberRegisterSlice";
import { BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllBarberCard from "./AllBarberCard";

const BarberCard = () => {
  const dispatch = useDispatch();
  const [filteredBarbers, setFilteredBarbers] = useState([]);
  const location = useSelector((state) => state.auth.location);

  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    dispatch(getBarbers()).then((action) => {
      const data = action.payload;
      setBarbers(data);
    });
  }, [dispatch]);
  // console.log("barbers:",barbers);

  useEffect(() => {
    if (location && barbers) {
      const filtered = barbers.filter(
        (barber) => barber.city.toLowerCase() === location.toLowerCase()
      );
      setFilteredBarbers(filtered);

      //console.log("filtrelenen:",filteredBarbers);
    }
  }, [barbers, location]);

  return (
    <div className="">
      {filteredBarbers.length > 0 ? (
        <div className="grid grid-cols-2   gap-8 gap-x-8  max-sm:grid max-sm:grid-cols-1  ">
          {filteredBarbers.map((barber) => (
            <Link
              to={`/home/${barber.id}`}
              key={barber.id}
              className="bg-transparent"
            >
              <div className="flex flex-row p-2 rounded-3xl w-full  max-sm:w-[98%] max-sm:h-28 max-sm:rounded-lg  h-36 bg-light-100 text-gray-700 hover:bg-light-300 shadow-lg">
                <div>
                  <img
                    src="../../../public/Image/barber1.jpg"
                    alt=""
                    className="w-32 h-full rounded-xl  max-sm:w-24 max-sm:h-24  max-sm:rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 pl-5">
                  <h1 className="font-bold text-xl max-sm:text-base">
                    {barber.workPlaceName}
                  </h1>
                  <div className="flex flex-row gap-1 items-center">
                    <FaMapMarkerAlt />
                    <p className="max-sm:text-sm"> {barber.city}</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center">
                    <BsFillStarFill className="text-yellow-600" />
                    <p> {barber.rating}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-1 gap-8 gap-x-0   ">
          <div className=" w-auto items-center justify-center py-2">
            {/* <img src="../../../public/Image/face5.png" alt="" className="w-40 h-40" /> */}
            <p className="flex font-bold text-xl text-secondary max-sm:text-sm ">
              Maalesef Bulundugunuz Konuma Yakın Berber Bulunamadık!!!
            </p>
          </div>

          <div className="  ">
            <AllBarberCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default BarberCard;
