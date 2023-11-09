import { createReducer } from "@reduxjs/toolkit";
import { defaultNewCoursesReducer } from "./type";
import { RootState } from "@/redux/store";
import { loadCourses, loadDetailsCourse } from "./action";

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
    })
    .addCase(loadDetailsCourse.pending, (state) => {
      state.courseDetailsLoading = true;
    })
    .addCase(loadDetailsCourse.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.courseDetails = action.payload;
      state.courseDetailsLoading = false;
    })
    .addCase(loadDetailsCourse.rejected, (state) => {
      state.courseDetailsLoading = false;
    });
});

export const selectNewCourses = (state: RootState) => state.newCourses;
export default newCoursesReducer;
