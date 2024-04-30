import React from "react";
import services from "../mock/service.json";

const ServicesSelect = ({ onSelect }) => {
  const handleSelectChange = (event) => {
    const selectedService = event.target.value;
    onSelect(selectedService); // Call the onSelect callback with the selected value
  };

  return (
    <div>
      <select
        id="small"
        className="block w-full p-2 text-sm border border-secondary-200 rounded-lg outline-none"
        onChange={handleSelectChange}
      >
        <option value="">Seçiniz</option>
        {services.map((service) => (
          <option key={service.service} value={service.service}>
            {service.service}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServicesSelect;
