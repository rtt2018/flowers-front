import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  status: "creating",
  creadetAt: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addPositionToCart(state, action) {
      const { flower, amount } = action.payload;

      const existingItem = state.cart.find(
        (item) => item.flower._id === flower._id
      );

      if (existingItem) {
        existingItem.amount += amount;
      } else {
        state.cart.push({ flower, amount });
      }
      state.totalPrice = state.cart.reduce((sum, item) => {
        return sum + Number(item.flower.price) * Number(item.amount);
      }, 0);

      state.createdAt = new Date().toISOString();
    },
    deletePosition(state, action) {
      state.cart = state.cart.filter(
        (pos) => pos.flower._id !== action.payload.flower._id
      );
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + Number(item.flower.price) * Number(item.amount),
        0
      );
      state.createdAt = new Date().toISOString();
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.creadetAt = null;
    },
    upPositionCount(state, action) {
      state.cart = state.cart.map((item) =>
        item.flower._id === action.payload.flower._id
          ? { ...item, amount: Number(item.amount) + 1 }
          : item
      );
      state.totalPrice = state.cart.reduce((sum, item) => {
        return sum + Number(item.flower.price) * Number(item.amount);
      }, 0);
    },
    downPositionCount(state, action) {
      state.cart = state.cart.map((item) =>
        item.flower._id === action.payload.flower._id
          ? {
              ...item,
              amount:
                Number(item.amount) > 1 ? Number(item.amount) - 1 : item.amount,
            }
          : item
      );
      state.totalPrice = state.cart.reduce((sum, item) => {
        return sum + Number(item.flower.price) * Number(item.amount);
      }, 0);
    },
  },
});

export const orderReducer = orderSlice.reducer;

export const {
  addPositionToCart,
  clearCart,
  upPositionCount,
  downPositionCount,
  deletePosition,
} = orderSlice.actions;
