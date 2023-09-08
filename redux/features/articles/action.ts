import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ArticleDetailResponse, ArticleListResponse } from "./type";

export const getArticleCourse = createAsyncThunk<
  ArticleListResponse,
  {
    page: number;
  }
>("articles/all", async ({ page }: { page: number }) => {
  const response = await api.get(`/api/v10/list-post?limit=9&page=${page}`);
  return response.data;
});

export const getLatestArticle = createAsyncThunk<
  ArticleListResponse,
  {
    params?: string;
    page?: number;
  }
>("articles/latest", async ({ params = "carousel-post", page = 3 }) => {
  const response = await api.get(`/api/v10/${params}?limit=${page}`);
  return response.data;
});

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
