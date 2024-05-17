import React, { useState } from "react";
import ServicesSelect from "../../Utils/ServicesSelect";
import CitySelect from "../../Utils/CitySelect";
import barbers from "../../mock/allBarber.json";
import RatingBar from "../../Utils/RatingBar ";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../Store/Barber/BarberRegisterSlice";

const FilterCard = () => {
  const [selectedStars, setSelectedStars] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  const filterList = useSelector((state) => state.barber.filters);

  const dispatch = useDispatch();

  const handleApplyFilters = () => {
    // Filtreleme fonksiyonu
    //   const filteredBarbers = barbers.filter((barber) => {
    //   const matchesStars = selectedStars ? barber.rating === selectedStars : true;
    //   const matchesCity = selectedCity ? barber.city === selectedCity : true;
    //   const matchesService = selectedService ? barber.service === selectedService : true;
    //   const matchesPriceRange =
    //     (minPrice === '' && maxPrice === '') ||
    //     (barber.price >= parseFloat(minPrice) && barber.price <= parseFloat(maxPrice));

    //   return matchesStars && matchesCity && matchesService && matchesPriceRange;

    // });

    dispatch(
      setFilterValue({
        selectedCity,
        minPrice,
        maxPrice,
        selectedService,
        selectedStars,
      })
    );
  };

  // console.log(selectedCity, minPrice, maxPrice, selectedService, selectedStars);
  // console.log("filterList",filterList);
  return (
    <div className="h-56 max-sm:h-full w-auto bg-light-200 border-0 flex flex-col rounded-xl px-5 justify-center float-right max-sm:pt-5">

      <h1 className="text-2xl text-secondary font-bold pl-3">Filtrele</h1>
      <div className="flex flex-row  max-sm:flex-col  gap-2">
        <div className="flex flex-col  p-3 gap-1">
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
        <div className="flex flex-col  max-sm:p-3 max-sm:gap-4 ">
          <label htmlFor="" className="mt-3">
            Fiyat Aralığı
          </label>
          <div className="flex flex-row justify-center  max-sm:justify-start items-start ">
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-16 h-9 border border-secondary-200 bg-white rounded-md items-center justify-center text-xl p-1 outline-none"
              placeholder="Min"
            />

            <label className=" pb-2 text-2xl  text-secondary ">-</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-16 h-9 border border-secondary-200 bg-white rounded-md items-center justify-center text-xl p-1 outline-none"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center m-2">
        <button
          className="flex fex-row w-28 h-12  rounded-xl bg-secondary p-3 items-center justify-center text-white hover:bg-opacity-95"
          onClick={handleApplyFilters}
        >
          Uygula
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
