import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getArticleCourse, getArticleDetail, getRelateArticle } from "./action";
import { ArticleListResponse } from "./type";

const initialState: ArticleListResponse = {
  success:false,
  isLoading: false,
  data: [],
  error: null,
  detail: null,
};

const articleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getArticleCourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getArticleCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data.data;
      state.error = null;
    })
    .addCase(getArticleCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

    builder
    .addCase(getArticleDetail.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getArticleDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detail = action.payload.data;
      state.error = null;
    })
    .addCase(getArticleDetail.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

    builder
    .addCase(getRelateArticle.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getRelateArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(getRelateArticle.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });
});

export { articleReducer };
