import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getArticleCourse } from "./action";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

const articleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getArticleCourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getArticleCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(getArticleCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });
});

export { articleReducer };
