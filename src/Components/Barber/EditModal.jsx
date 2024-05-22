import React, { useState } from 'react';

const EditModal = ({ barber, onSave, onClose }) => {
  const [editedBarber, setEditedBarber] = useState({ ...barber });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBarber(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedBarber);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-4">Bilgileri Düzenle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">İsim</label>
            <input type="text" id="name" name="name" value={editedBarber.name} onChange={handleChange} className="w-full border-gray-300 rounded-md mt-1 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
          </div>
          {/* Diğer input alanları için aynı yapıyı tekrarlayın */}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md">İptal</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
