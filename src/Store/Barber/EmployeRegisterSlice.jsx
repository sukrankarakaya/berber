import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const employInitialState = {
  employees: null,
  loading: false,
  error: null,
  success: false,
};

const employBaseURL = "https://localhost:7022/api/Employee";

export const registerEmploy = createAsyncThunk(
  "Employee/create-employees",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        `${employBaseURL}/create-employees`,
        userData,
        config
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getEmploy = createAsyncThunk(
  "Employee/Get-Employees",
  async (userId ,{ rejectWithValue }) => {
    try {
      const response = await axios.get(`${employBaseURL}/get-employees/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEmploy = createAsyncThunk(
  "Employee/delete-employee",
  async (employeeId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${employBaseURL}/delete-employee/${employeeId}`);
      return { id: employeeId }; // Silinen çalışan ID'sini döndür
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateEmploy = createAsyncThunk(
  "Employee/update-employee",
  async (editedDetails, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${employBaseURL}/update-employee/${editedDetails.id}`, editedDetails);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const employSlice = createSlice({
  name: "employ",
  initialState: employInitialState,
  reducers: {
    login(state, action) {
      state.loading = false;
      state.userId = action.payload.user;
      state.error = null;
      state.employees = action.payload;
    },
    logout(state) {
 
      state.isAuthenticated = false;

      state.loading = false;
      state.error = null;
      state.success = false;
      state.employees = null;
    },
    setEmployees(state, action) {
      state.employees = action.payload;
    },
  },
});

export const { setEmployees,  login, logout,} = employSlice.actions;

export default employSlice.reducer;

// Redux store'da bu işlemleri kullanmak için thunk'ları ve reducer'ları çağırabiliriz

// Örnek kullanımlar:

// Çalışan ekleme işlemi
// dispatch(registerEmploy(userData)).then((response) => {
//   if (response.meta.requestStatus === 'fulfilled') {
//     dispatch(addEmployee(response.payload));
//   } else {
//     dispatch(setError(response.payload));
//   }
// });

// // Çalışan silme işlemi
// dispatch(deleteEmploy(employeeId)).then((response) => {
//   if (response.meta.requestStatus === 'fulfilled') {
//     dispatch(removeEmployee(response.payload));
//   } else {
//     dispatch(setError(response.payload));
//   }
// });

// // Çalışan güncelleme işlemi
// dispatch(updateEmploy(editedDetails)).then((response) => {
//   if (response.meta.requestStatus === 'fulfilled') {
//     dispatch(updateEmployee(response.payload));
//   } else {
//     dispatch(setError(response.payload));
//   }
// });
