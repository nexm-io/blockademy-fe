import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getListCourse } from "./action";
import { error } from "console";
import { CourseTypes } from "./type";



interface CourseResponse {
  isLoading: boolean;
  data: Array<CourseTypes>;
  error: any;
}

const initialState: CourseResponse = {
  isLoading: false,
  data: [],
  error: null,
};

const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getListCourse.pending, (state) => {
        state.isLoading = true;
        state.error= null;
    })
    .addCase(getListCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.error= null;
    })
    .addCase(getListCourse.rejected, (state, action : PayloadAction<any>) => {
        state.isLoading = false;
        state.error= action.payload.data;
    });
});


export {courseReducer}