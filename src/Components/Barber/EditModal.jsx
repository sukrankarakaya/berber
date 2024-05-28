import React, { useState } from 'react';
import axios from 'axios';
import { putBarberById, getBarberById } from '../../Store/Barber/BarberLoginSlice';
import { useDispatch } from 'react-redux';

const EditModal = ({ barber, userId, onSave, onClose }) => {
  const [editedBarber, setEditedBarber] = useState({ ...barber });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch=useDispatch()
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setEditedBarber(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('Id', barber.id);
      formData.append('taxNo', editedBarber.taxNo);
      formData.append('userName', editedBarber.userName);
      formData.append('City', editedBarber.city);
      formData.append('Mail', editedBarber.mail);
      formData.append('Name', editedBarber.name);
      formData.append('Phone', editedBarber.phone);
      formData.append('Street', editedBarber.street);
      formData.append('District', editedBarber.district);
      formData.append('LastName', editedBarber.lastName);
      formData.append('Password', editedBarber.password);
      formData.append('BuildingNo', editedBarber.buildingNo);
      formData.append('DoorNumber', editedBarber.doorNumber);
      formData.append('WorkPlaceName', editedBarber.workPlaceName);
      formData.append('BarberUrl', editedBarber.barberUrl);

      dispatch(putBarberById(formData))
      onClose();
      onSave();

    } catch (error) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">Bilgileri Düzenle</h2>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-row gap-10'>
            <div>
              <div className="mb-4">
                <label htmlFor="taxNo" className="block text-sm font-semibold text-gray-700">Vergi Numarası</label>
                <input type="text" id="taxNo" name="taxNo" value={editedBarber.taxNo} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="userName" className="block text-sm font-semibold text-gray-700">Kullanıcı Adı</label>
                <input type="text" id="userName" name="userName" value={editedBarber.userName} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="workPlaceName" className="block text-sm font-semibold text-gray-700">İşyeri Adı</label>
                <input type="text" id="workPlaceName" name="workPlaceName" value={editedBarber.workPlaceName} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">İsim</label>
                <input type="text" id="name" name="name" value={editedBarber.name} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />

              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Soyisim</label>
                <input type="text" id="lastName" name="lastName" value={editedBarber.lastName} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Telefon No</label>
                <input type="tel" id="phone" name="phone" value={editedBarber.phone} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Şifre</label>
                <input type="password" id="password" name="password" value={editedBarber.password} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="mail" className="block text-sm font-semibold text-gray-700">E-mail</label>
                <input type="email" id="mail" name="mail" value={editedBarber.mail} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700">Şehir</label>
                <input type="text" id="city" name="city" value={editedBarber.city} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="district" className="block text-sm font-semibold text-gray-700">İlçe</label>
                <input type="text" id="district" name="district" value={editedBarber.district} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="street" className="block text-sm font-semibold text-gray-700">Sokak</label>
                <input type="text" id="street" name="street" value={editedBarber.street} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="buildingNo" className="block text-sm font-semibold text-gray-700">Bina No</label>
                <input type="text" id="buildingNo" name="buildingNo" value={editedBarber.buildingNo} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label htmlFor="doorNumber" className="block text-sm font-semibold text-gray-700">Kapı No</label>
                <input type="text" id="doorNumber" name="doorNumber" value={editedBarber.doorNumber} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
              </div>
              <div className='mb-4'>
                <label htmlFor="barberUrl" className='block text-sm font-semibold text-gray-700'>Dükkan İsmi</label>
                <input type="file" id='barberUrl' name='barberUrl'value={editedBarber.barber} onChange={handleChange} className='w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50'/>

              </div>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md">İptal</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md" disabled={loading}>
              {loading ? 'Güncelleniyor...' : 'Güncelle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
