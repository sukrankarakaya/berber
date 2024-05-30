import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { IoCloseOutline } from "react-icons/io5";

const EditProfilePhotoModal = ({ show, onClose, updateUserDetails }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [customerDetails, setCustomerDetails] = useState({});
  const customerId = useSelector((state) => state.persistedReducer.userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7022/api/Customer/Get-Customer/${customerId}`
        );
        setCustomerDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [customerId]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(customerDetails).forEach(([key, value]) => {
        formData.append(key, value);  // Append existing customer details
      });

      if (selectedFile) {
        formData.append("CustomerFile", selectedFile);  // Append the new file if selected
      }

      await axios.put(
        `https://localhost:7022/api/Customer/Update-Customer/${customerId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Optionally, call the parent updateUserDetails function to refresh the parent component state
      if (updateUserDetails) {
        updateUserDetails();
      }

      onClose();  // Close the modal on successful submission
    } catch (error) {
      console.error("Error updating data:", error);
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
