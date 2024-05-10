import React, { useEffect } from "react";
import Search from "./Search";
import AllBarberCard from "./AllBarberCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBarbers } from "../../Store/Barber/BarberRegisterSlice";

const AllBarber = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.barber // veya state.customerSlice, reducer'ınıza bağlı olarak
  );
  
  const inputValue = useSelector((state) => state.barber.inputValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const response = dispatch(getBarbers());

    response.then((action) => {
      const users = action.payload; // payload'daki kullanıcı verilerine erişmek
      // console.log(users); // Tüm kullanıcı verilerini konsola yazdır

      // console.log('Input value:', inputValue);
    });
  }, [inputValue]);

  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-8 py-28 min-h-screen bg-light ">
          <div className=" flex left-0">
            <Search />
          </div>
          <div className="">
            <AllBarberCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBarber;
