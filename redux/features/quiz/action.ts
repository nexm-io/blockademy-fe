import { createAction } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  DataSendQuiz,
  DetailQuestion,
  ItemListViewType,
  ParamsListQuiz,
  UserAnswerType,
} from "./type";
import api from "@/services/axios";
import { QUIZ_COMPLETED } from "@/utils/constants";

export const loadQuizs = createAsyncThunk(
  "quiz/load-quizs",
  async (params: ParamsListQuiz, { dispatch }) => {
    try {
      const { data: quizs } = await api.get(`/api/v10/quiz`, {
        params,
      });
      dispatch(getTotalQuiz(quizs?.meta?.total));
      return quizs.data;
    } catch (error) {
      return null;
    }
  }
);

export const getListStatusQuiz = createAsyncThunk(
  "quiz/get-list-status",
  async () => {
    try {
      const { data: listStatusRes } = await api.get(
        "/api/v10/list-status-quiz"
      );
      if (!listStatusRes) return;
      return listStatusRes;
    } catch (error) {
      return null;
    }
  }
);

export const getTotalQuiz = createAction("quiz/total-quiz");

export const getListQuesOfQuiz = createAsyncThunk(
  "quiz/get-list-question",
  async (id: string, { dispatch }) => {
    //   const { id } = data;
    try {
      const { data: listQuesRes } = await api.get(
        `/api/v10/quiz/${id}/list-question`
      );
      if (!listQuesRes) return;
      const initListView = listQuesRes?.data.map((v: DetailQuestion) => {
        return {
          ...v,
          complete: false,
          value: "",
        };
      });

      dispatch(setListViewInit(initListView));

      return listQuesRes;
    } catch (error) {
      return null;
    }
  }
);

export const setListView =
  createAction<ItemListViewType[]>("quiz/set-list-view");

export const setListViewInit = createAction<ItemListViewType[]>(
  "quiz/set-list-view-init"
);

export const setQuizAnswer = createAction<UserAnswerType>(
  "quiz/set-quiz-answer"
);

export const setQuesDetail = createAction<DetailQuestion>(
  "quiz/set-ques-detail"
);

export const setShowResult = createAction<boolean>("quiz/set-show-result");

export const getListResult = createAsyncThunk(
  "quiz/get-quiz-result",
  async (payload: string) => {
    try {
      const { data: getResultQuizRes } = await api.get(
        `/api/v10/quiz/${payload}/list-result`
      );
      if (!getResultQuizRes) return;
      return getResultQuizRes.data;
    } catch (error) {
      return error;
    }
  }
);

export const getListHighestResult = createAsyncThunk(
  "quiz/get-quiz-highest-result",
  async (payload: string) => {
    try {
      const { data: getResultQuizRes } = await api.get(
        `/api/v10/quiz/${payload}/list-result-greatest-score`
      );
      if (!getResultQuizRes) return;
      return getResultQuizRes.data;
    } catch (error) {
      return error;
    }
  }
);

export const sendMultiQuizResult = createAsyncThunk<any, DataSendQuiz>(
  "quiz/send-quiz-result",
  async (payloads) => {
    const { post_id, lesson_id, module_id } = payloads;
    try {
      let query: string = "";
      if (lesson_id) query += `lesson_id=${lesson_id}`;
      if (module_id)
        query += query ? `&module_id=${module_id}` : `module_id=${module_id}`;
      const finalQuery = query ? `?${query}` : "";
      const { data: sendQuizRes } = await api.post(
        `/api/v10/quiz/${post_id}/store-quiz-result${finalQuery}`,
        payloads
      );
      if (!sendQuizRes) return;
      return sendQuizRes.data;
    } catch (error) {
      return null;
    }
  }
);

export const resetBeginTest = createAction("quiz/reset-quiz");

export const setTimeStart = createAction<any>("quiz/set-time-start");

export const setSubmitInBtn = createAction<boolean>("quiz/set-submit-btn");

export const checkShowFeedback = createAction<boolean>(
  "quiz/check-show-feedback"
);

export const checkShowResult = createAsyncThunk(
  "quiz/check-show-result",
  async (data: string, { dispatch }) => {
    try {
      const { data: checkShowResultRes } = await api.get(
        `/api/v10/quiz/${data}/check-quiz-is-completed`
      );
      if (!checkShowResultRes) return false;
      //   dispatch(setDurationQuiz(checkShowResultRes?.data?.time));
      if (typeof checkShowResultRes?.data?.is_completed !== "number")
        return false;

      if (checkShowResultRes?.data?.is_completed === QUIZ_COMPLETED)
        return true;
      // if (
      //   checkShowResultRes?.data?.is_completed === QUIZ_COMPLETED &&
      //   checkShowResultRes?.data?.isPossibleToRejoin === 0
      // )
      //   return true;
      // if (
      //   checkShowResultRes?.data?.is_completed === QUIZ_COMPLETED &&
      //   checkShowResultRes?.data?.isPossibleToRejoin === 1
      // )
      //   return false;
      return false;
    } catch (error) {
      return false;
    }
  }
);

export const saveStartTime = createAsyncThunk(
  "quiz/save-start-time",
  async (data: string) => {
    try {
      const { data: saveStartTimeRes } = await api.post(
        `/api/v10/quiz/${data}/store-start-time`
      );
      if (!saveStartTimeRes) return;
      return saveStartTimeRes.data;
    } catch (error) {
      return null;
    }
  }
);

export const getStartTime = createAsyncThunk(
  "quiz/get-start-time",
  async (data: string) => {
    try {
      const { data: getStartTimeRes } = await api.get(
        `/api/v10/quiz/${data}/get-start-time`
      );
      if (!getStartTimeRes) return;
      return getStartTimeRes.data;
    } catch (error) {
      return null;
    }
  }
);

export const setIsViewResultInCourse = createAction<boolean>(
  "quiz/set-view-result"
);
