import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import filterIcone from "/public/Icone/filter.png";
import FilterCard from "./FilterCard";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [showIcon, setShowIcon] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Filtreleme ekranının açık/kapalı durumu

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowIcon(event.target.value === "");
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="flex flex-col gap-3 relative items-center">
      <div className="relative flex gap-3 ">
        <input
          type="text"
          className="w-[450px] h-12 border border-secondary rounded-full pl-10 outline-none "
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowIcon(true)}
          onBlur={() => setShowIcon(inputValue === "")}
        />
        {showIcon && (
          <TfiSearch className="absolute top-0 left-0 mt-4 ml-3 text-gray-500" />
        )}
        <button
          className="w-11 h-11 bg-secondary  rounded-lg justify-center items-center"
          onClick={toggleFilter}
        >
          <img src={filterIcone} alt="" className="pl-3" />
        </button>
      </div>

      {isFilterOpen && <FilterCard />}
    </div>
  );
};

export default Search;
