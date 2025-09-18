import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "./operations";

const initialState = {
  orders: [],
  user: {},
  isLoading: false,
  isError: false,
};

const ordersListSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addCreatedOrder(state, action) {
      state.orders.push(action.payload.order);
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getOrders.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        console.log("🚀 ~ action:", action);
        state.isLoading = false;
        state.isError = false;
        state.orders = action.payload.orders;
        state.user = action.payload.user;
      });
  },
});

export const ordersListReducer = ordersListSlice.reducer;
