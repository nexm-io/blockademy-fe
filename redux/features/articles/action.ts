import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ArticleDetailResponse,
  ArticleListResponse,
  TagsResponse,
} from "./type";

export const getArticleCourse = createAsyncThunk<
  ArticleListResponse,
  {
    page: number;
  }
>("articles/all", async ({ page }: { page: number }) => {
  const response = await api.get(`/api/v10/list-post?limit=15&page=${page}`);
  return response.data;
});

export const getLatestArticle = createAsyncThunk<
  ArticleListResponse,
  {
    params?: string;
    page?: number;
    limit?: number;
  }
>("articles/latest", async ({ limit = 3, page = 1, params = "created_at" }) => {
  const response = await api.get(
    `/api/v10/list-post?limit=${limit}&page=${page}&sort_field=${params}`
  );
  return response.data;
});

export const getTrendingArticle = createAsyncThunk<
  ArticleListResponse,
  {
    params?: string;
    page?: number;
    limit?: number;
  }
>(
  "articles/trending",
  async ({ limit = 3, page = 1, params = "total_hit" }) => {
    const response = await api.get(
      `/api/v10/list-post?limit=${limit}&page=${page}&sort_field=${params}`
    );
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

export const getListTags = createAsyncThunk<
  TagsResponse,
  {
    limit: number;
  }
>("article/list-tags", async ({ limit }: { limit: number }) => {
  const response = await api.get(`/api/v10/list-tags?limit=${limit}`);
  return response.data;
});
