import React from 'react'
import cities from "../mock/city.json"
const CitySelect = () => {
  return (
    <div>
        
        <select
        id="small"
        className="block w-full p-2  text-sm border border-secondary rounded-lg outline-none "
      >
        <option className="">Seçiniz</option>
        {cities.map((city) => (
          <option className="" value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CitySelect