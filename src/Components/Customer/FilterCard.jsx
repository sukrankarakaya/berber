import React, { useState } from "react";
import ServicesSelect from "../../Utils/ServicesSelect";
import CitySelect from "../../Utils/CitySelect";
import RatingBar from "../../Utils/RatingBar ";
import PriceRange from "../../Utils/PriceRange";

const FilterCard = () => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starCount) => {
    setSelectedStars(starCount);
  };
  return (
    <div className="w-[1200px] h-56 bg-white border-2 flex flex-col rounded-xl px-5 py-5 justify-center float-right">
      <h1 className="text-2xl text-secondary font-bold pl-3 ">Filtrele </h1>
      <div className="flex flex-row gap-2">
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
            {/* <p>Seçilen Yıldız Sayısı: {selectedStars}</p> */}
          </div>
        </div>

        <div className="flex flex-col  ">
          <label htmlFor="" className=" mt-3">
            Fiyat Aralıgı
          </label>

          <div className="flex flex-col -mt-4">
            <PriceRange />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center p-3 gap-3 ">
          <label class="inline-flex items-center me-5 cursor-pointer gap-4 w-56">
            <input type="checkbox" value="" class="sr-only peer  "  />
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0   dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-secondary"></div>
            Konuma Göre Filtrele
          </label>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center   ">
        <button className="flex fex-row w-28 h-12 rounded-xl bg-secondary p-3 items-center justify-center text-white hover:bg-opacity-95 ">
          Uygula
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
