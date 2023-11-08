import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadCourses = createAsyncThunk(
  "courses/load-courses",
  async (params: { limit: number; page: number; sortDate?: string }) => {
    const { page, limit, sortDate = "desc" } = params;
    const url = `/api/v10/course?limit=${limit}&page=${page}&sort_by=created_at:${sortDate}`;

    try {
      const { data: courses } = await api.get(url);
      return courses;
    } catch (error) {
      return null;
    }
  }
);
