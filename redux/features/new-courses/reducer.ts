import { createReducer } from "@reduxjs/toolkit";
import { defaultNewCoursesReducer } from "./type";
import { RootState } from "@/redux/store";
import { loadCourses } from "./action";

const newCoursesReducer = createReducer(defaultNewCoursesReducer, (builder) => {
  builder
    .addCase(loadCourses.pending, (state) => {
      state.coursesLoading = true;
    })
    .addCase(loadCourses.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.data = action.payload.data;
      state.meta = action.payload.meta;
      state.coursesLoading = false;
    })
    .addCase(loadCourses.rejected, (state) => {
      state.coursesLoading = false;
    });
});

export const selectNewCourses = (state: RootState) => state.newCourses;
export default newCoursesReducer;
