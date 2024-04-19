// actions.jsx

// Berber kaydı başarılı olduğunda tetiklenecek eylem
export const registerBarberSuccess = (data) => ({
  type: 'REGISTER_BARBER_SUCCESS',
  payload: data,
});

// ...

// Berber kaydı başarısız olduğunda tetiklenecek eylem
export const registerBarberFailure = (error) => ({
  type: 'REGISTER_BARBER_FAILURE',
  payload: error.message, // Sadece hata mesajını kullanarak serileştirilebilir bir değer oluşturun
});

// ...

