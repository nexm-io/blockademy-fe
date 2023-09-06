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
    lesson: {
      campaign_id: number;
      course_id: number;
      lesson_id: number;
      quiz_id: number;
      answer_id: number[];
    };
  }
>("courses/quiz", async ({ lesson }) => {
  const response = await api.get(
    `/api/v10/campaign/${lesson.campaign_id}/course/${lesson.course_id}/lesson/${lesson.lesson_id}/quiz/${lesson.quiz_id}/check-correct-answer?answer_id[0]=${lesson.answer_id}`
  );
  return response.data;
});
