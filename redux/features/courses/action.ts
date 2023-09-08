import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseDetailResponse, QuizResponse } from "./type";

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
      },
    }
  );
  return response.data;
});

export const getAnswerQuiz = createAsyncThunk<
  QuizResponse,
  {
    lessonDetail: {
      campaign_id: number;
      course_id: number;
      lesson_id: number;
      quiz_id: number;
      answer_id: number[];
    };
  }
>("courses/quiz", async ({ lessonDetail }) => {
  const response = await api.get(
    `/api/v10/campaign/${lessonDetail.campaign_id}/course/${lessonDetail.course_id}/lesson/${lessonDetail.lesson_id}/quiz/${lessonDetail.quiz_id}/check-correct-answer?answer_id=${lessonDetail.answer_id}`
  );
  return response.data;
});
