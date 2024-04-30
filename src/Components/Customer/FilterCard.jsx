import React, { useState } from "react";
import ServicesSelect from "../../Utils/ServicesSelect";
import CitySelect from "../../Utils/CitySelect";
import PriceRange from "../../Utils/PriceRange";
import barbers from "../../mock/allBarber.json";
import RatingBar from "../../Utils/RatingBar ";


const FilterCard = () => {
  const [selectedStars, setSelectedStars] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleApplyFilters = () => {
    // Filtreleme fonksiyonu
    const filteredBarbers = barbers.filter((barber) => {
      // İstek üzerine filtrelerin uygulanması
      const matchesStars = selectedStars ? barber.rating === selectedStars : true;
      const matchesCity = selectedCity ? barber.city === selectedCity : true;
      const matchesService = selectedService ? barber.service === selectedService : true;
      const matchesPriceRange = selectedPriceRange ? barber.priceRange === selectedPriceRange : true;

      return matchesStars && matchesCity && matchesService && matchesPriceRange;
    });

    // Filtrelenmiş berberleri kullanarak işlem yap
    // console.log(filteredBarbers);
    console.log(selectedCity,selectedPriceRange,selectedService,selectedStars );
  };

  return (
    <div className="h-56 w-auto bg-light-200 border-0 flex flex-col rounded-xl px-5 justify-center float-right">
      <h1 className="text-2xl text-secondary font-bold pl-3">Filtrele</h1>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col p-3 gap-1">
          <label htmlFor="" className="">
            Hizmet
          </label>
          <ServicesSelect onSelect={(service) => setSelectedService(service)} />
        </div>
        <div className="flex flex-col p-3 gap-1">
          <label htmlFor="" className="">
            Şehir
          </label>
          <CitySelect onSelect={(city) => setSelectedCity(city)} />
        </div>
        <div className="flex flex-col p-3 gap-1">
          <label htmlFor="" className="">
            Berber Puanı
          </label>
          <RatingBar
            totalStars={5}
            selectedStars={selectedStars}
            onStarClick={(stars) => setSelectedStars(stars)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mt-3">
            Fiyat Aralığı
          </label>
          <PriceRange onSelect={(range) => setSelectedPriceRange(range)} />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center">
        <button
          className="flex fex-row w-28 h-12 rounded-xl bg-secondary p-3 items-center justify-center text-white hover:bg-opacity-95"
          onClick={handleApplyFilters}
        >
          Uygula
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
