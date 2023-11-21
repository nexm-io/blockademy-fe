import api from "@/services/axios";
import { LIMIT_COURSES } from "@/utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadCourses = createAsyncThunk(
  "courses/load-courses",
  async (params: { page: number; sortBy?: string, order?: number }) => {
    const { page, sortBy = "created_at", order = 0 } = params;
    const url = `/api/v10/course?limit=${LIMIT_COURSES}&page=${page}&sort_by=${sortBy}:desc&category_order=${order}`;

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
