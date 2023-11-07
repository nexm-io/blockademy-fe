import { RootState } from "@/redux/store";
import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { defaultBlogsReducer } from "./type";

const blogsReducer = createReducer(defaultBlogsReducer, (builder) => {
 
});

export const selectBlogs = (state: RootState) => state.blogs;

export default blogsReducer;
