import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://flowers-back-0xk7.onrender.com/";

export const getShopsNames = createAsyncThunk(
  "shops/getShopsNames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/shops", {});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
