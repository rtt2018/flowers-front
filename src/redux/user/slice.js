import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { name: null, email: null },
  // isLoggedIn: false,
  isLoading: false,
  error: null,
  // token: null,
  // isRefreshing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // extraReducers: (builder) => builder.addCase({}),
});

export const userReducer = userSlice.reducer;
