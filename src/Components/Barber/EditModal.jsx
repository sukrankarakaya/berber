// EditProfileModal.js
import React, { useState } from "react";

const EditProfileModal = ({
  isOpen,
  onClose,
  userDetails,
  updateUserDetails,
}) => {
  const [editedDetails, setEditedDetails] = useState(userDetails);

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      // Dosya seçiciden gelen dosya bilgisini al
      const file = e.target.files[0];
      // Dosyayı okumak için FileReader kullan
      const reader = new FileReader();
      // Dosya okunduğunda yapılacak işlemi belirle
      reader.onloadend = () => {
        // FileReader'dan gelen veriyi state'e ayarla
        setEditedDetails({
          ...editedDetails,
          photo: reader.result,
        });
      };
      // Dosyayı oku
      reader.readAsDataURL(file);
    } else {
      // Dosya seçiciden başka bir inputtan gelen değerleri al
      setEditedDetails({
        ...editedDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Güncellenmiş detayları kontrol et
    if (editedDetails.name.trim() === "" || editedDetails.surname.trim() === "") {
      alert("Lütfen isim ve soyisim alanlarını doldurun.");
    } else {
      // Güncellenmiş detayları ana bileşene ileterek kullanıcı bilgilerini güncelle
      updateUserDetails(editedDetails);
      onClose();
      // Başarılı güncelleme mesajını göster
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
          <form onSubmit={handleSubmit} className=" p-3">
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
