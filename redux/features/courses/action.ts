import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseDetailResponse, CourseResponse, CourseTypes } from "./type";

export const getListCourse = createAsyncThunk(
  "courses/all-courses",
  async () => {
    const response = await api.get("/api/v10/campaign", {
      headers: {
        apiKey: "",
      },
    });
    return response.data;
  }
);

export const getDetailCourse = createAsyncThunk<
CourseDetailResponse,
  { detail: { campaign_id: number; course_id: number } }
>("courses/detail-course", async ({ detail }) => {
  const response = await api.get(
    `/api/v10/campaign/${detail.campaign_id}/course/${detail.course_id}`,
    {
      headers: {
        apiKey: "",
      }
    }
  );
  return response.data;
});
