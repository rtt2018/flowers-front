import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://flowers-back-0xk7.onrender.com/";

export const getFlowers = createAsyncThunk(
  "flowers/getAllFlowers",
  async (searchParams, thunkAPI) => {
    try {
      const response = await axios.get("/", { params: searchParams });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
