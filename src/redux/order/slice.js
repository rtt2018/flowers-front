import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  status: "pending",
  creadetAt: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addPositionToCart(state, action) {
      const itemAvaible = state.cart.find((item) => item._id === action._id);

      if (itemAvaible) {
        itemAvaible.amount += 1;
      } else {
        state.cart.push(action.payload);
      }
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.amount,
        0
      );
      state.createdAt = new Date().toISOString();
    },
    deletePosition(state, action) {
      state.cart = state.cart.filter((pos) => pos._id !== action.payload);
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.amount,
        0
      );
      state.createdAt = new Date().toISOString();
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.creadetAt = null;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(addPositionToCart, (state, action) => {
      state.cart.push(action.payload);
    }),
});

export const orderReducer = orderSlice.reducer;

export const { addPositionToCart, clearCart } = orderSlice.actions;
