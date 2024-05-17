// EditProfileModal.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditProfileModal = ({
  isOpen,
  onClose,
  userDetails,
  updateUserDetails,
}) => {
  const [editedDetails, setEditedDetails] = useState();  
  const customerId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7022/api/Customer/get-customer/${customerId}`);
        setEditedDetails(response.data); // fetched data to editedDetails
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [customerId]);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setEditedDetails({
      ...editedDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserDetails(editedDetails);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 overflow-y-auto h-full w-full">
      <div className="relative top-36 max-sm:top-16 mx-auto p-5 border border-secondary w-[500px] max-sm:w-full shadow-2xl rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Bilgilerini Güncelle
          </h3>
          <form onSubmit={handleSubmit} className="p-3">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
              <input
                type="text"
                name="name"
                placeholder="Ad"
                value={editedDetails.name || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
              <input
                type="text"
                name="surname"
                placeholder="Soyad"
                value={editedDetails.lastName || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
              <input
                type="text"
                name="email"
                placeholder="E-posta"
                value={editedDetails.mail || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
              <input
                type="text"
                name="phone"
                placeholder="Telefon"
                value={editedDetails.phone || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
              <input
                type="password"
                name="password"
                placeholder="Şifre"
                value={editedDetails.password || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
              <input
                type="text"
                name="city"
                placeholder="Şehir"
                value={editedDetails.city || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
              <input
                type="text"
                name="district"
                placeholder="İlçe"
                value={editedDetails.district || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
              <input
                type="text"
                name="street"
                placeholder="Sokak"
                value={editedDetails.street || ""}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none focus:border-red-500 focus:border-1 focus:bg-transparent"
              />
            </div>
            <div className="flex items-center justify-between p-2">
              <button
                type="button"
                onClick={onClose}
                className="w-24 p-2 bg-gray text-black rounded border-secondary hover:bg-opacity-75 hover:border-secondary "
              >
                İptal
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
