import React, { useState } from "react";
import ServicesSelect from "../Utilse/ServicesSelect";
import CitySelect from "../Utilse/CitySelect";
import RatingBar from "../Utilse/RatingBar ";

const FilterCard = () => {

    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (starCount) => {
      setSelectedStars(starCount);
    };
  return (
    <div className="w-[1000px] h-52 bg-white flex flex-col rounded-xl p-3  ">
      <h1 className="text-2xl text-secondary font-bold">Filtrele </h1>
      <div className="flex flex-row">
        <div className="flex flex-col p-3 gap-1">
          <label htmlFor="" className="">
            Hizmet
          </label>
          <ServicesSelect />
        </div>
        <div className="flex flex-col p-3 gap-1">
          <label htmlFor="" className="">
            Şehir
          </label>
          <CitySelect />
        </div>
        <div className="flex flex-col p-3 gap-1">
          <label htmlFor="" className="">
            Berber Puanı
          </label>
          
        <div className="flex flex-col">
          <RatingBar
        totalStars={5}
        selectedStars={selectedStars}
        onStarClick={handleStarClick}
      />
      <p>Seçilen Yıldız Sayısı: {selectedStars}</p>
        </div>
        </div>

      </div>
      <div className="flex flex-row-reverse items-center  ">
        {" "}
        <button className="flex fex-row w-28 h-12 rounded-xl bg-secondary p-3 items-center justify-center text-white ">
          Uygula{" "}
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
