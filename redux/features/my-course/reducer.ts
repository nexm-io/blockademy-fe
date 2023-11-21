import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  listMyCourse,
} from "./action";
import { MyCourseResponse } from "./type";
import { RootState } from "@/redux/store";

const initialState: MyCourseResponse = {
  success: false,
  isLoading: true,
  data: [],
  error: null,
  quiz: {
    is_correct: false,
    is_finished: 0,
  },
  pagination: {
    total: 0,
    count: 0,
    per_page: 0,
    current_page: 0,
    total_pages: 0,
  },
};

const myCourseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(listMyCourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(listMyCourse.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.error = null;
    })
    .addCase(listMyCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
    });
});

export const selectMyCourses = (state: RootState) => state.myCourse;

export default myCourseReducer;
