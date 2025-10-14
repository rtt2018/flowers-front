import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const getOrders = createAsyncThunk(
  "orders/getAllOrders",
  async (reqParams, thunkAPI) => {
    const { patch, params } = reqParams;
    try {
      const response = await api.post(patch, params);
      console.log("🚀 ~ response:", response);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
