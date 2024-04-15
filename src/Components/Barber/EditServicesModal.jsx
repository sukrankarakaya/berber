import React, { useState, useEffect } from "react";
import personal from "../../mock/services.json";

const EditProfileModal = ({
  isOpen,
  onClose,
  userDetails,
  updateUserDetails,
}) => {
  const [editedDetails, setEditedDetails] = useState(userDetails);
  const [serviceOptions, setServiceOptions] = useState([]);

  useEffect(() => {
    // Fetch service options from JSON file
    setServiceOptions(personal.map(person => person.name));
  }, []);

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedDetails({
          ...editedDetails,
          photo: reader.result,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setEditedDetails({
        ...editedDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedDetails || !editedDetails.serviceName || !editedDetails.price) {
      alert("Lütfen tüm alanları doldurun.");
    } else {
      updateUserDetails(editedDetails);
      onClose();
      alert("Bilgileriniz başarıyla güncellendi.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-65 overflow-y-auto h-full w-full">
      <div className="relative top-36 mx-auto p-5 border border-secondary w-[500px] shadow-2xl rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Bilgilerimi Düzenle
          </h3>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-3 p-3">
            <select
              name="serviceName"
              value={editedDetails?.serviceName || ""}
              onChange={handleInputChange}
              className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none"
            >
              <option value="">Hizmet Seçiniz</option>
              {serviceOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            <input
              type="text"
              name="price"
              placeholder="Fiyatı"
              value={editedDetails?.price || ""}
              onChange={handleInputChange}
              className="mt-2 p-2 border border-secondary rounded-md focus:border-pri focus:bg-slate-100 outline-none"
            />
            <div className="flex justify-between pt-10">
              <button
                type="submit"
                className="w-24 p-2 bg-secondary text-white rounded hover:bg-opacity-95"
              >
                Güncelle
              </button>
              <button
                onClick={onClose}
                className="w-24 p-2 bg-gray text-black rounded border-secondary hover:bg-opacity-75 hover:border-secondary"
              >
                İptal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
