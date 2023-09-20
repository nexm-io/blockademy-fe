import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getListAuthor } from "./action";
import { AuthorResponse } from "./type";

const initialState: AuthorResponse = {
  isLoading: false,
  data: [],
  message: "",
  error: null,
};

const authorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getListAuthor.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getListAuthor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(getListAuthor.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload.data;
    });
});

export { authorReducer };
