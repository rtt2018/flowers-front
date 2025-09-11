import { createSlice } from "@reduxjs/toolkit";
import { getFlowers } from "./operations";

const initialState = {
  hits: [],
  page: 1,
  perPage: 12,
  totalPages: 0,
  hasPreviousPage: false,
  hasNextPage: false,
  totalItems: 0,
  isLoading: false,
};

const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlowers.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const flowersReducer = flowersSlice.reducer;
