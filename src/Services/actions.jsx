
export const registerBarberSuccess = (data) => ({
  type: 'REGISTER_BARBER_SUCCESS',
  payload: data,
});

// ...

export const registerBarberFailure = (error) => ({
  type: 'REGISTER_BARBER_FAILURE',
  payload: error.message, 
});

// ...

