import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleDetailResponse, ArticleListResponse } from "./type";

export const getArticleCourse = createAsyncThunk(
  "article/all-courses",
  async () => {
    const response = await api.get("/api/v10/list-post?limit=10&page=1");
    return response.data;
  }
);

export const getArticleDetail = createAsyncThunk<ArticleDetailResponse, string>(
  "article/detail-article",
  async (slug) => {
    const response = await api.get(`/api/v10/detail/${slug}`);
    return response.data;
  }
);

export const getRelateArticle = createAsyncThunk<ArticleListResponse, number>(
  "article/relate-article",
  async (id) => {
    const response = await api.get(`/api/v10/relate-post/${id}`);
    return response.data;
  }
);


