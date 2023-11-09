import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadCourses = createAsyncThunk(
  "courses/load-courses",
  async (params: { limit: number; page: number; sortBy?: string }) => {
    const { page, limit, sortBy = "created_at" } = params;
    const url = `/api/v10/course?limit=${limit}&page=${page}&sort_by=${sortBy}:desc`;

    try {
      const { data: courses } = await api.get(url);
      return courses;
    } catch (error) {
      return null;
    }
  }
);

export const loadDetailsCourse = createAsyncThunk(
  "courses/load-details-course",
  async (courseId: string) => {
    try {
      const { data: course } = await api.get(`/api/v10/course/${courseId}`);
      return course.data;
    } catch (error) {
      return null;
    }
  }
);
