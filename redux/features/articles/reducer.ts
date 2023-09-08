import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  getArticleCourse,
  getArticleDetail,
  getLatestArticle,
  getRelateArticle,
} from "./action";
import { ArticleListResponse } from "./type";

const initialState: ArticleListResponse = {
  success: false,
  data: null,
  isLoading: false,
  pagination: {
    total: 0,
    count: 0,
    per_page: 0,
    current_page: 0,
    total_pages: 0,
  },
  detail: null,
  error: null,
};

const articleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getArticleCourse.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getArticleCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
    })
    .addCase(getArticleCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });
  builder
    .addCase(getLatestArticle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getLatestArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    })
    .addCase(getLatestArticle.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
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
});

export { articleReducer };
