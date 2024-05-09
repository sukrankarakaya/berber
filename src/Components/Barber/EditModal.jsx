// EditProfileModal.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getEmploy,registerEmploy} from '../../Store/Barber/EmployeRegisterSlice';
import { CiEdit } from 'react-icons/ci';


const EditProfileModal = ({
  isOpen,
  onClose,
  userDetails,
  updateUserDetails,
}) => {
  const dispatch = useDispatch();
  const [editedDetails, setEditedDetails] = useState(userDetails || {}); // Kullanıcı detayları tanımlı değilse boş bir nesneyle başlatın

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      // Dosya işleme mantığı
    } else {
      setEditedDetails({
        ...editedDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedDetails.name || !editedDetails.surname) { // İsim ve soyisim alanlarının boş veya tanımsız olup olmadığını kontrol edin
      alert("Lütfen isim ve soyisim alanlarını doldurun.");
    } else {
      dispatch(registerEmploy(editedDetails))
        .then((response) => {
          console.log("Kullanıcı detayları başarıyla kaydedildi:", response);
          onClose();
          alert("Bilgileriniz başarıyla güncellendi.");
        })
        .catch((error) => {
          console.error("Kullanıcı detayları kaydedilirken bir hata oluştu:", error);
          alert("Bilgileriniz güncellenirken bir hata oluştu.");
        });
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 overflow-y-auto h-full w-full z-20">
      <div className="relative top-36 mx-auto p-5 border border-secondary w-[500px] shadow-2xl rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Bilgilerimi Düzenle
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3">
            <input
              type="text"
              name="name"
              placeholder="İsim"
              value={editedDetails.name || ""}
              onChange={handleInputChange}
              className="mt-2  p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none"
            />
            <input
              type="text"
              name="surname"
              placeholder="Soyisim"
              value={editedDetails.surname || ""}
              onChange={handleInputChange}
              className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none"
            />
            {/* Dosya seçici alanı */}
            <input
              type="file"
              name="photo"
              accept="image/*" // Sadece resim dosyalarını kabul et
              onChange={handleInputChange}
              className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none"
            />
            <div className="flex justify-between pt-10">
             
              
              <button
                onClick={onClose}
                className="w-24 p-2 bg-gray text-black rounded border-secondary hover:bg-opacity-75 hover:border-secondary"
              >
                İptal
              </button>
              <button
                type="submit"
                className="w-24 p-2 bg-secondary text-white rounded hover:bg-opacity-95"
              >
                Kaydet
              </button>
              <button
                type="submit"
                className="w-24 p-2 bg-secondary text-white rounded hover:bg-opacity-95"
              >
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
