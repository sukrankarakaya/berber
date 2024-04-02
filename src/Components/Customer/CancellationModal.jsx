import React, { useState } from "react";

const CancellationModal = ({ isOpen, onCancel, onClose }) => {
  if (!isOpen) return null;

  const handleCancel = () => {
    // İptal işlemi gerçekleştirildiğinde yapılacak işlemle
    
    onCancel();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0  bottom-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="w-96 bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Randevuyu İptal Etmek İstiyor musunuz?</h2>
        <div className="flex justify-between">
          <button className="w-20 h-10 bg-secondary text-white rounded-md mr-4 hover:bg-opacity-95 " onClick={handleCancel}>
            İptal Et
          </button>
          <button className="w-20 h-10 bg-gray-300 text-black bg-gray border border-secondary hover:bg-opacity-75 hover:border-2 rounded-md" onClick={handleClose}>
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
};
export default CancellationModal