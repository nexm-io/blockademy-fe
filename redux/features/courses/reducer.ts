import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getDetailCourse, getListCourse } from "./action";
import { error } from "console";
import { CourseResponse, CourseTypes } from "./type";

const initialState: CourseResponse = {
  isLoading: false,
  data: [],
  error: null,
  details: undefined,
};

const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getListCourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getListCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(getListCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

  builder
    .addCase(getDetailCourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getDetailCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.details = action.payload.data;
      state.error = null;
    })
    .addCase(getDetailCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload.data;
    });
});

export { courseReducer };
