import React, { useEffect, useState } from "react";
import { BsArrowRight, BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBarbers } from "../../Store/Customer/CustomerRegisterSlice";

const AllBarberCard = () => {
  const [visibleBarbers, setVisibleBarbers] = useState(6);
  const [showMore, setShowMore] = useState(true);
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.barber.inputValue);
  

  const [barbers, setBarbers] = useState([]);


useEffect(() => {
  dispatch(getBarbers()).then((action) => {
    const data = action.payload;
    setBarbers(data);
  });
}, [dispatch]);

const filteredBarbers = Array.isArray(barbers)
  ? barbers.filter((barber) => {
      const name = barber.workPlaceName || "";
      const city = barber.city || "";
      const lowerCaseName = name.toLowerCase();
      const lowerCaseCity = city.toLowerCase();
      const lowerCaseInput = inputValue ? inputValue.toLowerCase() : "";

      // Sadece inputValue dolu ise ve hem name hem de city kriterlerini karşılıyorsa filtrelemeyi uygula
      if (inputValue && lowerCaseInput.trim() !== "") {
        return lowerCaseName.includes(lowerCaseInput) || lowerCaseCity.includes(lowerCaseInput);
      } else {
        return true; // inputValue boş ise tüm verileri filtreleme
      }
    })
  : [];




  return (
    <div className="d-flex flex-col">
      {filteredBarbers.length > 0 ? (
         <div className="grid grid-cols-2 gap-6 gap-x-4 py-5">
         {filteredBarbers.slice(0, visibleBarbers).map((barber) => (
           <Link to={`/home/all/${barber.id}`} key={barber.id} className="bg-transparent">
             <div className="flex flex-row p-2 rounded-3xl w-[550px] h-36 bg-light-100 text-gray-700 hover:bg-light-300 shadow-lg">
               <div className="">
                 <img src="../../../public/Image/barber1.jpg" alt="" className="w-32 h-full rounded-xl" />
               </div>
               <div className="flex flex-col gap-2 pl-5">
                 <h1 className="font-bold text-xl">{barber.workPlaceName}</h1>
                 <div className="flex flex-row gap-1 items-center">
                   <FaMapMarkerAlt />
                   <p className=" "> {barber.city}</p>
                 </div>
                 <div className="flex flex-row gap-1 items-center">
                   <BsFillStarFill className="text-yellow-600" />
                   <p className=" "> {barber.rating}</p>
                 </div>
               </div>
             </div>
           </Link>
         ))}
       </div>
      ): 
      
      <div className="  flex flex-col items-center justify-center py-20">
        <img src="../../../public/Image/face5.png" alt="" className="w-40 h-40" />
         <p className="flex font-bold text-6xl text-secondary ">Maalesef Berber Bulunamadı!!!</p>
      </div>
      
      }
     

      <div className="flex justify-end">
        {filteredBarbers.length > visibleBarbers && showMore && (
          <button
            className="bg-transparent text-gray-700 hover:text-secondary hover:border-b-[1px] hover:border-secondary text-right flex items-center my-4 px-8"
            onClick={() => setVisibleBarbers(visibleBarbers + 6)}
          >
            Daha fazla göster
            <BsArrowRight className="pl-2 w-7 h-7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AllBarberCard;
