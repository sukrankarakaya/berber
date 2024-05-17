import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import FilterCard from "./FilterCard";
import { IoClose, IoFilter } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue } from "../../Store/Barber/BarberRegisterSlice";

const Search = () => {
  const inputValue = useSelector((state) => state.barber.inputValue);
  const dispatch = useDispatch(); // Redux'tan dispatch fonksiyonunu al

  const [showIcon, setShowIcon] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Filtreleme ekranının açık/kapalı durumu

  const handleInputChange = (event) => {
    const newValue = event.target.value; // Input alanına girilen yeni değer
    dispatch(setInputValue(newValue)); // Redux'taki state'i güncellemek için dispatch kullanarak setInputValue action'ını çağır
    setShowIcon(newValue === ""); // Icon'un gösterilip gösterilmeyeceğini belirle
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    // Filtre kapatıldığında tüm berberleri göstermek için inputValue'yi temizle
    if (isFilterOpen) {
      dispatch(setInputValue("")); // Redux'taki inputValue'yi temizle
    }
  };

  return (
    <div className="flex flex-col gap-3 relative w-full">
      <div className="relative flex gap-3">
        <input
          type="text"
          className="w-[400px] h-12 border-0 rounded-full pl-10 outline-none"
          placeholder="Berber Ara..."
          value={inputValue} // Input değeri, Redux'taki inputValue'ye bağlı
          onChange={handleInputChange}
          onFocus={() => setShowIcon(true)}
          onBlur={() => setShowIcon(inputValue === "")}
        />
        {showIcon && (
          <TfiSearch className="absolute top-0 left-0 mt-4 ml-3 text-gray-500" />
        )}
        <button
          className="w-12 h-12 max-sm:w-10 max-sm:h-10 bg-secondary rounded-lg justify-center items-center "
          onClick={toggleFilter}
        >
          {!isFilterOpen ? (
            <IoFilter className="w-8 h-8 max-sm:w-9  max-sm:h-5  max-sm:px-1 max-sm:ml-0.5  ml-2 items-center text-white" />
          ) : (
            <IoClose className="w-8 h-8 max-sm:w-9  max-sm:h-5  max-sm:px-1 max-sm:ml-0.5  ml-2  items-center text-white" />
          )}
        </button>
      </div>

      {isFilterOpen && <FilterCard />}
    </div>
  );
};

export default Search;
