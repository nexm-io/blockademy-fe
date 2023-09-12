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
    time?: number[];
    levelParam?: "beginner" | "intermediate" | "advance";
    tagParam?: string[];
  }
>("articles/all", async ({ page, time, levelParam, tagParam }) => {
  const readTimeParam = time ? `&read_time=${time}` : "";
  const readLevelParam = levelParam ? `&level=${levelParam}` : "";
  const readTagParam = tagParam ? `&tags=${tagParam}` : "";
  const response = await api.get(
    `/api/v10/list-post?limit=15&page=${page}${readTagParam}${readLevelParam}${readTimeParam}`
  );
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

export const getRecommendArticle = createAsyncThunk<
  ArticleListResponse,
  {
    page?: number;
    limit?: number;
  }
>("articles/recommended", async ({ limit = 6, page = 1 }) => {
  const response = await api.get(
    `/api/v10/list-post?limit=${limit}&page=${page}&recommended=1`
  );
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

export const getListTags = createAsyncThunk<
  TagsResponse,
  {
    limit: number;
  }
>("article/list-tags", async ({ limit }: { limit: number }) => {
  const response = await api.get(`/api/v10/list-tags?limit=${limit}`);
  return response.data;
});
