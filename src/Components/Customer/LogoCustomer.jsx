// Logo.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiCut } from "react-icons/tfi";
import { BiCut } from "react-icons/bi";
const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="relative inline-flex items-center justify-center ">
      <span className="relative py-2.5  " onClick={handleClick}>
     
     <div className="d-flex flex items-center justify-center ">
     <BiCut className="text-white d-flex ml-8 text-2xl" />
        <h1
          className="text-white font-extraboldd font-mono d-flex  "
          style={{ fontSize: "20px", fontWeight: "900" }}
        >
          BERBERIM
        </h1>
     </div>
      </span>
    </div>
  );
};

export default Logo;
