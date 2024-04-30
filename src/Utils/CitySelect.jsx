import React from 'react';
import cities from '../mock/city.json';

const CitySelect = ({ onSelect }) => {
  const handleSelectChange = (event) => {
    const selectedCity = event.target.value;
    onSelect(selectedCity); // Call the onSelect callback with the selected city
  };

  return (
    <div>
      <select
        id="small"
        className="block w-full p-2 text-sm border border-secondary-200 rounded-lg outline-none"
        onChange={handleSelectChange}
      >
        <option value="">Seçiniz</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelect;
