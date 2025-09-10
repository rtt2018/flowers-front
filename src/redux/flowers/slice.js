import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {},
  // extraReducers: (builder) => builder.addCase({}),
});

export const flowersReducer = flowersSlice.reducer;
