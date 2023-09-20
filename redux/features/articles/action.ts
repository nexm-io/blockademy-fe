import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ArticleDetail,
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

export const getFeaturedArticle = createAsyncThunk<
  ArticleListResponse,
  {
    params?: string;
    page?: number;
    limit?: number;
    featured?: number;
  }
>(
  "articles/featured",
  async ({ limit = 1, page = 1, params = "created_at", featured = 1 }) => {
    const response = await api.get(
      `/api/v10/list-post?limit=${limit}&page=${page}&featured=${featured}&sort_field=${params}`
    );
    return response.data;
  }
);

export const getTrendingArticle = createAsyncThunk<
  ArticleListResponse,
  {
    params?: string;
    page?: number;
    limit?: number;
    trending?: number;
  }
>(
  "articles/trending",
  async ({ limit = 3, page = 1, params = "created_at", trending = 1 }) => {
    const response = await api.get(
      `/api/v10/list-post?limit=${limit}&page=${page}&trending=${trending}&sort_field=${params}`
    );
    return response.data;
  }
);

export const getRecommendArticle = createAsyncThunk<
  ArticleListResponse,
  {
    page?: number;
    limit?: number;
    recommend?: number;
  }
>("articles/recommended", async ({ limit = 6, page = 1, recommend = 1 }) => {
  const response = await api.get(
    `/api/v10/list-post?limit=${limit}&page=${page}&recommended=${recommend}`
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
