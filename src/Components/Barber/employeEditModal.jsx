import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const EmployeeEditModal = ({ employee, onClose, refreshEmployeeList }) => {
  const [name, setName] = useState(employee ? employee.name || '' : '');
  const [lastName, setLastName] = useState(employee ? employee.lastName || '' : '');
  const [employeePhoto, setEmployeePhoto] = useState(null);
  const userId = useSelector(state => state.barberLogin.userId);

  const baseURL = "https://localhost:7022";
  const employeePhotoUrl = employee && employee.employeeUrl ? baseURL + employee.employeeUrl : "";
  
  const handleCreate = async () => {
    try {
      if (!employeePhoto) {
        throw new Error('Resim zorunludur.');
      }

      const formData = new FormData();
      formData.append('Name', name || '');
      formData.append('LastName', lastName || '');
      formData.append('BarberID', userId);
      formData.append('EmployeeFile', employeePhoto);

      await axios.post(`${baseURL}/API/Employee/Create-Employees`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      refreshEmployeeList();  // Üst bileşendeki çalışan listesini yenile
      onClose();
    } catch (error) {
      console.error("Çalışan oluşturulurken hata oluştu", error.message);
    }
  };

  const handleSave = async () => {
    try {
      if (!employeePhoto) {
        throw new Error('Resim zorunludur.');
      }

      const formData = new FormData();
      formData.append('Name', name || '');
      formData.append('LastName', lastName || '');
      formData.append('EmployeeFile', employeePhoto);
      if (employeePhotoUrl) {
        formData.append('EmployeeUrl', employeePhotoUrl);
      }

      await axios.put(`${baseURL}/API/Employee/Update-Employees/${employee.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      refreshEmployeeList();  // Üst bileşendeki çalışan listesini yenile
      onClose();
    } catch (error) {
      console.error("Çalışan güncellenirken hata oluştu", error.message);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${baseURL}/API/Employee/Delete-Employees/${employee.id}`);
      refreshEmployeeList();  // Üst bileşendeki çalışan listesini yenile
      onClose();
    } catch (error) {
      console.error("Çalışan silinirken hata oluştu", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">{employee && employee.id ? "Çalışanı Düzenle" : "Yeni Çalışan Oluştur"}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ad</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Soyad</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Fotoğraf</label>
          <input 
            type="file" 
            onChange={(e) => setEmployeePhoto(e.target.files[0])} 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end space-x-4">
          {employee && employee.id ? (
            <>
              <button 
                onClick={handleSave} 
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Güncelle
              </button>
              <button 
                onClick={handleDelete} 
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Sil
              </button>
            </>
          ) : (
            <button 
              onClick={handleCreate} 
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Oluştur
            </button>
          )}
          <button 
            onClick={onClose} 
            className="bg-gray-300 px-4 py-2 rounded-md"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeEditModal;
