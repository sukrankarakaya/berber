// FormikInput.js

import React from 'react';
import { IoMdArrowDropup } from 'react-icons/io';

const FormikInput = ({ field, form: { touched, errors }, placeholder, ...props }) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <input
        {...field}
        {...props}
        className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
        placeholder={placeholder}
      />
      {touched[field.name] && errors[field.name] ? (
        <div className="flex flex-col absolute w-72 ml-3 mt-8">
          <IoMdArrowDropup className="text-red-600" />
          <div className="absolute h-6 mt-[10px] bg-light border border-red-500 px-3 text-red-500 rounded-md text-sm">
            {errors[field.name]}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FormikInput;
