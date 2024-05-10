import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const FormInput = ({ name, label, formik }) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary-50 border-2 border-secondary bg-transparent"
        placeholder={label}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className=" flex flex-col absolute w-72 ml-3 mt-8  ">
          <IoMdArrowDropup className=" text-red-500  " />
          <div className="absolute h-7  mt-[10px] bg-light border border-red-500 px-3  text-red-500  rounded-md text-sm">
            {formik.errors[name]}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FormInput;
