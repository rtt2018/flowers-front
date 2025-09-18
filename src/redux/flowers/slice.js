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
  sortBy: null,
  sortOrder: null,
  isLoading: false,
  isError: false,
};

const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
    setPaginationParams(state, action) {
      state.page = action.payload.page;
      state.perPage = action.payload.perPage;
    },
    setSortingParams(state, action) {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlowers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getFlowers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getFlowers.fulfilled, (state, action) => {
        const {
          hits,
          page,
          perPage,
          totalPages,
          hasPreviousPage,
          hasNextPage,
          totalItems,
        } = action.payload;

        if (page > 1) {
          const map = new Map([
            ...(state.hits || []).map((item) => [item._id, item]),
            ...(hits || []).map((item) => [item._id, item]),
          ]);

          state.hits = Array.from(map.values());
        } else {
          state.hits = hits || [];
        }

        state.page = page;
        state.perPage = perPage;
        state.totalPages = totalPages;
        state.hasPreviousPage = hasPreviousPage;
        state.hasNextPage = hasNextPage;
        state.totalItems = totalItems;
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const flowersReducer = flowersSlice.reducer;
export const { setPaginationParams, setSortingParams } = flowersSlice.actions;
