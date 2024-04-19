import axios from "axios";
import { registerBarberSuccess, registerBarberFailure } from "../Services/actions";

const barberRegisterService = axios.create({
  baseURL: "https://localhost:7022/api/Barber/create-barber",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerBarber = (data) => async (dispatch) => {
  try {
    const response = await barberRegisterService.post("", data);
    dispatch(registerBarberSuccess(response.data));
  } catch (error) {
    dispatch(registerBarberFailure(error));
  }
};

export default barberRegisterService;
