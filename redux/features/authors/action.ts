import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthorResponse, ProfileResponse } from "./type";

export const getAuthorProfile = createAsyncThunk<ProfileResponse, string>(
  "article/author-profile",
  async (slug) => {
    const response = await api.get(`/api/v10/author-profile?author_id=${slug}`);
    return response.data;
  }
);

export const getAuthorPost = createAsyncThunk<AuthorResponse, string>(
  "article/author-post",
  async (slug) => {
    const response = await api.get(`/api/v10/author-post?author_id=${slug}`);
    return response.data;
  }
);
