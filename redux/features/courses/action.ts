import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseDetailResponse, CourseResponse, QuizResponse } from "./type";

export const getListCourse = createAsyncThunk<CourseResponse, string | undefined>(
  "courses/all-courses",
  async (params) => {
    let url = `/api/v10/campaign?process_status=`
    if(params) {
      url = `${url}${params}`
    }
    const response = await api.get(url, {
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


export const saveAnswerQuiz = createAsyncThunk<
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
>("courses/save-quiz", async ({ lessonDetail }) => {
  const response = await api.post(
    `/api/v10/campaign/${lessonDetail.campaign_id}/course/${lessonDetail.course_id}/lesson/${lessonDetail.lesson_id}/quiz/${lessonDetail.quiz_id}/save-result?answer_id=${lessonDetail.answer_id}`
  );
  return response.data;
});


export const claimReward = createAsyncThunk<
CourseResponse,
  number
>("courses/claim-reward", async (campaign_id) => {
  const response = await api.post(
    `/api/v10/campaign/${campaign_id}/reward/claimed-reward`,
    {
      headers: {
        apiKey: "",
      },
    }
  );
  return response.data;
});