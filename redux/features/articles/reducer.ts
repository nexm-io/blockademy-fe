import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  getArticleCourse,
  getArticleDetail,
  getFeaturedArticle,
  getLatestArticle,
  getListTags,
  getRecommendArticle,
  getRelateArticle,
  getTrendingArticle,
} from "./action";
import { ArticleListResponse } from "./type";
import { JSX, ReactNode } from "react";

const initialState: ArticleListResponse = {
  success: false,
  data: null,
  dataTrending: null,
  dataRecommend: null,
  isLoading: false,
  isChange: false,
  pagination: {
    total: 0,
    count: 0,
    per_page: 0,
    current_page: 0,
    total_pages: 0,
  },
  detail: null,
  error: null,
  tags: null,
  featured: null,
  map: function (arg0: (item: any, index: any) => JSX.Element): ReactNode {
    throw new Error("Function not implemented.");
  },
  slice: function (arg0: number, arg1: number): unknown {
    throw new Error("Function not implemented.");
  }
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
      state.pagination = action.payload.pagination;
    })
    .addCase(getLatestArticle.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
    });

  builder
    .addCase(getFeaturedArticle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getFeaturedArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.featured = action.payload.data;
    })
    .addCase(
      getFeaturedArticle.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );

  builder
    .addCase(getTrendingArticle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTrendingArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataTrending = action.payload.data;
      state.pagination = action.payload.pagination;
    })
    .addCase(getTrendingArticle.rejected, (state) => {
      state.isLoading = false;
    });

  builder
    .addCase(getRecommendArticle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getRecommendArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataRecommend = action.payload.data;
      state.pagination = action.payload.pagination;
    })
    .addCase(getRecommendArticle.rejected, (state) => {
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
      state.isChange=true
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getArticleDetail.fulfilled, (state, action) => {
      state.isChange=false
      state.isLoading = false;
      state.detail = action.payload.data;
      state.error = null;
    })
    .addCase(getArticleDetail.rejected, (state, action: PayloadAction<any>) => {
      state.isChange=false
      state.isLoading = false;
      // state.error = action.payload.data;
    });

  builder
    .addCase(getListTags.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getListTags.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tags = action.payload.data;
      state.error = null;
    })
    .addCase(getListTags.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });
});

export { articleReducer };
