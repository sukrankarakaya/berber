import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerEmploy, deleteEmploy, updateEmploy } from '../../Store/Barber/EmployeRegisterSlice';
import { CiEdit } from 'react-icons/ci';

const EditProfileModal = ({
  isOpen,
  onClose,
  userDetails,
  updateUserDetails,
}) => {
  const dispatch = useDispatch();
  const [editedDetails, setEditedDetails] = useState(userDetails || {
    Name: '',
  LastName: '',
  Picture: 'null',
  });
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    setFileName(file ? file.name : '');
  };

  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      
      const file = e.target.files[0];
      
      setEditedDetails({
        ...editedDetails,
        Picture: file,
      });
    } else {
      setEditedDetails({
        ...editedDetails,
        [e.target.name]: e.target.value,
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedDetails.Name || !editedDetails.LastName) {
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
  
  const handleDelete = () => {
    // Silme işlemi için gerekli action creator'ı tetikle
    dispatch(deleteEmploy(editedDetails.id))
      .then(() => {
        console.log("Kullanıcı başarıyla silindi.");
        onClose();
      })
      .catch((error) => {
        console.error("Kullanıcı silinirken bir hata oluştu:", error);
        alert("Kullanıcı silinirken bir hata oluştu.");
      });
  };

  const handleUpdate = () => {
    // Güncelleme işlemi için gerekli action creator'ı tetikle
    dispatch(updateEmploy(editedDetails))
      .then(() => {
        console.log("Kullanıcı detayları başarıyla güncellendi.");
        onClose();
        alert("Bilgileriniz başarıyla güncellendi.");
      })
      .catch((error) => {
        console.error("Kullanıcı detayları güncellenirken bir hata oluştu:", error);
        alert("Bilgileriniz güncellenirken bir hata oluştu.");
      });
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
            {/* Input alanları buraya gelecek */}
            <input
  type="text"
  name="Name" 
  value={editedDetails.Name} 
  onChange={handleInputChange}
  placeholder="İsim"
  className="border-black border-2 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
/>
<input
  type="text"
  name="LastName" 
  value={editedDetails.LastName} 
  onChange={handleInputChange}
  placeholder="Soyisim"
  className="border-black border-2 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
/>
<input
  type="file"
  name="Picture" 
  onChange={handleInputChange}
  placeholder="Resim"
  className="border-black border-2 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
/>
            <div className="flex justify-between pt-10">
              <button
                type="button"
                onClick={handleUpdate}
                className="w-24 p-2 bg-secondary text-white rounded hover:bg-opacity-95"
              >
                Güncelle
              </button>
              <button
  type="submit"
  className="w-24 p-2 bg-secondary text-white rounded hover:bg-opacity-95"
>
  Kaydet
</button>
              <button
                type="button"
                onClick={handleDelete}
                className="w-24 p-2 bg-rose-600 text-white rounded hover:bg-opacity-95"
              >
                Sil
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
