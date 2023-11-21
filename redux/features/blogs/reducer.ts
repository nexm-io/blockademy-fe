import { RootState } from "@/redux/store";
import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { defaultBlogsReducer } from "./type";
import { loadBlogs } from "./action";

const blogsReducer = createReducer(defaultBlogsReducer, (builder) => {
  builder
    .addCase(loadBlogs.pending, (state) => {
      state.blogsLoading = true;
    })
    .addCase(loadBlogs.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.data = action.payload;
      state.blogsLoading = false;
    })
    .addCase(loadBlogs.rejected, (state) => {
      state.blogsLoading = false;
    });
});

export const selectBlogs = (state: RootState) => state.blogs;

export default blogsReducer;
