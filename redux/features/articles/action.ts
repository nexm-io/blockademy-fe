import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getArticleCourse = createAsyncThunk(
  "courses/all-courses",
  async () => {
    const response = await api.get("/api/v10/list-post?limit=10&page=1");
    return response.data;
  }
);
