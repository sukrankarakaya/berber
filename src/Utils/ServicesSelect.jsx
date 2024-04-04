import React from "react";
import services from "../mock/service.json";

const ServicesSelect = () => {
  return (
    <div>
      <select
        id="small"
        className="block w-full p-2  text-sm border border-secondary rounded-lg outline-none "
      >
        <option className="">Seçiniz</option>
        {services.map((service) => (
          <option className="" value={service.service}>
            {service.service}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServicesSelect;
