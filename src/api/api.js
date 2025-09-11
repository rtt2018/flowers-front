import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://flowers-back-0xk7.onrender.com";

export const getFlowers = createAsyncThunk(
  "flowers/getAll",
  async (searchParams, thunkAPI) => {
    try {
      const response = axios.get("/", {
        params: searchParams,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// треба перевірку на бекові чи є такий магазин у списку
