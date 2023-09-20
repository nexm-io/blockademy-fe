import api from "@/services/axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthorResponse,
  ListAuthorPostResponse,
  ProfileResponse,
} from "./type";

export const getAuthorProfile = createAsyncThunk<ProfileResponse, string>(
  "article/author-profile",
  async (slug) => {
    const response = await api.get(`/api/v10/author-profile?author_id=${slug}`);
    return response.data;
  }
);

export const getAuthorPost = createAsyncThunk<ListAuthorPostResponse, string>(
  "article/author-post",
  async (slug) => {
    const response = await api.get(`/api/v10/author-post?author_id=${slug}`);
    return response.data;
  }
);

export const getListAuthor = createAsyncThunk<
  AuthorResponse,
  { limit?: number; page?: number }
>("article/list-author", async ({ page = 1, limit = "" }) => {
  const response = await api.get(
    `/api/v10/list-author?page=${page}&limit=${limit}`
  );
  return response.data;
});
