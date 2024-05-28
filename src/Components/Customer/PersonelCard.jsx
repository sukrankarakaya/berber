import React from "react";
import personals from "../../mock/barberPersonals.json";

const PersonelCard = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 p-3 gap-11 items-center  ">
      {personals.map((person, id) => (
        <div
          key={person.id}
          className="flex flex-col gap-4  w-56 h-56  max-sm:w-80 bg-light-200 rounded-md items-center  hover:bg-slate-20  "
        >
          <img
            src={person.photo}
            alt=""
            className="h-40 w-56  rounded-lg p-2"
          />
          <label htmlFor="" className="text-xl font-semibold">
            {person.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PersonelCard;
