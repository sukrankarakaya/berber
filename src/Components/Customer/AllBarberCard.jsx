import React, { useEffect, useState } from "react";
import { BsArrowRight, BsFillStarFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBarbers } from "../../Store/Barber/BarberRegisterSlice";

const AllBarberCard = () => {
  const [visibleBarbers, setVisibleBarbers] = useState(6);
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.barber.inputValue);
  const filters = useSelector((state) => state.barber.filters);
  const [barbers, setBarbers] = useState([]);
  const [filteredBarbers, setFilteredBarbers] = useState([]);

  useEffect(() => {
    dispatch(getBarbers()).then((action) => {
      const data = action.payload;
      setBarbers(data);
      // Tüm berberler yüklendikten sonra filtrelemeyi uygula
      applyFilters(data, inputValue, filters);
    });
  }, [dispatch]);

  useEffect(() => {
    // Her inputValue veya filters değiştiğinde filtrelemeyi yeniden uygula
    applyFilters(barbers, inputValue, filters);
  }, [inputValue, filters, barbers]);

  const applyFilters = (data, inputValue, filters) => {
    let filtered = data;

    if (inputValue) {
      // Arama kriteri varsa filtrele
      filtered = filtered.filter((barber) => {
        const name = barber.workPlaceName || "";
        const city = barber.city || "";
        const lowerCaseName = name.toLowerCase();
        const lowerCaseCity = city.toLowerCase();
        const lowerCaseInput = inputValue.toLowerCase();

        return lowerCaseName.includes(lowerCaseInput) || lowerCaseCity.includes(lowerCaseInput);
      });
    }

    // Diğer filtreleri uygula sadece filtreleme aktifse
    if (Object.values(filters).some((value) => value !== null && value !== "")) {
      filtered = filtered.filter((barber) => {
        // Örnek: Yıldız sayısı filtresi
        if (filters.selectedStars) {
          return barber.rating === filters.selectedStars;
        }
        // Örnek: Şehir filtresi
        if (filters.selectedCity) {
          return barber.city === filters.selectedCity;
        }
        // Diğer filtreler buraya eklenebilir

        return true; // Varsayılan olarak tüm verileri geçir
      });
    }

    setFilteredBarbers(filtered);
  };

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
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          {/* <img src="../../../public/Image/face5.png" alt="" className="w-40 h-40" /> */}
          <p className="flex font-bold text-6xl text-secondary ">Maalesef Berber Bulunamadı!!!</p>
        </div>
      )}

      <div className="flex justify-end">
        {filteredBarbers.length > visibleBarbers && (
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
