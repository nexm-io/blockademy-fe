import api from "@/services/axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CourseResponse, QuizResponse } from "./type";

export const getListCourse = createAsyncThunk<
  CourseResponse,
  {
    limit?: number | undefined;
    page?: number | undefined;
    params?: string | undefined;
  }
>("courses/all-courses", async ({ limit, params = "", page = 1 }) => {
  let url = `/api/v10/campaign?process_status=${params}&limit=${limit}&page=${page}`;

  const response = await api.get(url);
  return response.data;
});

export const getDetailCourse = createAsyncThunk(
  "courses/detail-course",
  async (courseId: string) => {
    try {
      const { data: course } = await api.get(`/api/v10/course/${courseId}`);
      return course;
    } catch (error) {
      return error;
    }
  }
);

export const getDetailCourseWithoutLoading = createAsyncThunk(
  "courses/detail-course-without-loading",
  async (courseId: string) => {
    try {
      const { data: course } = await api.get(`/api/v10/course/${courseId}`);
      return course;
    } catch (error) {
      return null;
    }
  }
);

export const getAnswerQuiz = createAsyncThunk<
  QuizResponse,
  {
    lessonDetail: {
      campaign_id: string;
      course_id: string;
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
      campaign_id: string;
      course_id: string;
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

export const claimReward = createAsyncThunk<CourseResponse, string>(
  "courses/claim-reward",
  async (campaign_id) => {
    const response = await api.post(
      `/api/v10/campaign/${campaign_id}/reward/claimed-reward`
    );
    return response.data;
  }
);

export const getDetailSubCourse = createAsyncThunk(
  "courses/get-detail-sub-course",
  async ({
    subCourseSlug,
    lessonSlug,
  }: {
    subCourseSlug: string;
    lessonSlug: string;
  }) => {
    try {
      const { data: subCourse } = await api.get(
        `/api/v10/sub-course/${subCourseSlug}?lesson_id=${lessonSlug}`
      );
      return subCourse;
    } catch (error) {
      return error;
    }
  }
);

export const getDetailLesson = createAsyncThunk(
  "courses/get-detail-lesson",
  async (lessonIdOrSlug: string) => {
    try {
      const { data: lesson } = await api.get(
        `/api/v10/lesson/${lessonIdOrSlug}`
      );
      return lesson;
    } catch (error) {
      return error;
    }
  }
);

export const getNextLesson = createAsyncThunk(
  "courses/get-next-lesson",
  async (courseId: string) => {
    try {
      const { data: nextLesson } = await api.get(
        `api/v10/get-next-lesson?course_id=${courseId}`
      );
      return nextLesson;
    } catch (error) {
      return error;
    }
  }
);

export const setPrevSubCourseSlug = createAction<any>("courses/set-prev-sub-course-slug");

export const resetFinish = createAction<any>("courses/reset-finish");
