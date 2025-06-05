import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../../../online-learning-platform-Bahr-Academy-/src/API/ApiConfig";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ emailOrPhone, password }, thunkAPI) => {
    try {
      console.log("در حال ارسال درخواست ورود...");
      const response = await axios.post("/Sign/Login", {
        phoneOrGmail: emailOrPhone,
        password,
        rememberMe: true,
      });
      console.log("پاسخ از API:", response.data);
      toast.success("خوش آمدید !");
      return response.data;
    } catch (error) {
      console.error("خطا در درخواست API:", error.response?.data || error);
      toast.error(error.response?.data?.message || "LoginFailed");
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "LoginFailed"
      );
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setTokenFromStorage: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logOut, setTokenFromStorage } = authSlice.actions;
export default authSlice.reducer;
