import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadBlogs = createAsyncThunk(
  "blogs/load-blogs",
  async (params: { page: number; limit?: number }) => {
    const { page, limit } = params;

    const url = `/api/v10/list-post?page=${page}&limit=${limit}`;

    try {
      const { data: blogs } = await api.get(url);
      return blogs.data;
    } catch (error) {
      return null;
    }
  }
);
