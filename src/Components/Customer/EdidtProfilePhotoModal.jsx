import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IoCloseOutline } from "react-icons/io5";

const EditProfilePhotoModal = ({ show, onClose, updateUserDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({});
  const customerId = useSelector((state) => state.persistedReducer.userId);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(`https://localhost:7022/api/Customer/get-customer/${customerId}`);
        setCustomerDetails(response.data);
        console.log('Fetched Customer Details:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCustomerDetails();
  }, [customerId]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('customerUrl', selectedFile);

    // Append other customer details unchanged
    for (const key in customerDetails) {
      if (customerDetails.hasOwnProperty(key)) {
        formData.append(key, customerDetails[key]);
      }
    }

    // Debugging: Check FormData contents
    for (let pair of formData.entries()) {
      console.log("FormData pair:", pair[0], pair[1]);
    }

    try {
      const response = await axios.put(`https://localhost:7022/api/Customer/Update-Customer/${customerId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response Data:', response.data);
      updateUserDetails(response.data);
      onClose();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-lg font-semibold">Fotoğraf Güncelle</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoCloseOutline className='w-7 h-7' />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Profil Fotoğrafı</label>
            <input type="file" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full" />
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="w-24 p-2 bg-gray-300 text-black rounded border-secondary hover:bg-opacity-75">Kapat</button>
            <button type="submit" className="w-24 p-2 bg-secondary text-white rounded hover:bg-opacity-95">Güncelle</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePhotoModal;