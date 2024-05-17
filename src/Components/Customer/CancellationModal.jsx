import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeAppointment } from "../../Store/appointmentSlice ";

const CancellationModal = ({id, isOpen,  onClose}) => {

  if (!isOpen) return null;
  const dispatch = useDispatch();
  const handleCancel = () => {
    
    dispatch(removeAppointment(id));
   
    onClose()
    onCancel();
    
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0  bottom-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded-md">
        <h2 className="text-2xl max-sm:text-base font-bold mb-4">Randevuyu İptal Etmek İstiyor musunuz?</h2>
        <div className="flex justify-between">
            <button className="w-20 h-10 max-sm:w-16 max-sm:h-9 max-sm:text-sm bg-gray text-black  hover:bg-opacity-75  rounded-md" onClick={handleClose}>
            Vazgeç
          </button>
          <button className="w-20 h-10 max-sm:w-16 max-sm:h-9 max-sm:text-sm bg-secondary text-white rounded-md mr-4 hover:bg-opacity-95 " onClick={handleCancel}>
            İptal Et
          </button>
        
        </div>
      </div>
    </div>
  );
};
export default CancellationModal