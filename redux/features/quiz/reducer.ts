import { createReducer } from "@reduxjs/toolkit";
import { defaultQuizReducer } from "./type";
import { RootState } from "@/redux/store";
import {
  checkShowFeedback,
  checkShowResult,
  getListHighestResult,
  getListQuesOfQuiz,
  getListResult,
  getListStatusQuiz,
  getStartTime,
  getTotalQuiz,
  loadQuizs,
  resetBeginTest,
  sendMultiQuizResult,
  setIsViewResultInCourse,
  setListView,
  setQuesDetail,
  setQuizAnswer,
  setShowResult,
  setSubmitInBtn,
  setTimeStart,
} from "./action";
import { formatTimestamp } from "@/services/formatDate";

const quizReducer = createReducer(defaultQuizReducer, (builder) => {
  builder
    .addCase(getTotalQuiz, (state, action) => {
      state.totalQuiz = action.payload;
    })
    .addCase(loadQuizs.pending, (state) => {
      state.loadingListQuiz = true;
    })
    .addCase(loadQuizs.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.listQuiz = action.payload;
      state.loadingListQuiz = false;
    })
    // get list status
    .addCase(getListStatusQuiz.pending, (state) => {
      state.loadingQuizStatus = true;
    })
    .addCase(getListStatusQuiz.fulfilled, (state, action) => {
      state.loadingQuizStatus = false;
      state.listStatusQuiz = action.payload;
    })
    .addCase(getListStatusQuiz.rejected, (state) => {
      state.loadingQuizStatus = false;
    })
    .addCase(loadQuizs.rejected, (state) => {
      state.loadingListQuiz = false;
    })
    .addCase(getListQuesOfQuiz.pending, (state) => {
      state.loadingListQues = true;
    })
    .addCase(getListQuesOfQuiz.fulfilled, (state, action) => {
      if (!state.titleQuiz) {
        state.titleQuiz = action.payload?.data[0]?.quiz_title;
      }
      state.duration = action.payload?.data[0]?.time;
      state.listQues = action.payload?.data;
      state.quesDetail = action.payload?.data[0];
      state.loadingListQues = false;
    })
    .addCase(getListQuesOfQuiz.rejected, (state) => {
      state.loadingListQues = false;
    })
    .addCase(setQuizAnswer, (state, action) => {
      const findItem = state.userAnswer?.find(
        (i) => i.order === action.payload.order
      );
      if (findItem) {
        state.userAnswer = state.userAnswer?.map((i) =>
          i.order !== findItem.order ? i : action.payload
        );
      } else {
        state.userAnswer = [...state.userAnswer, action.payload];
      }
    })
    .addCase(setListView, (state, action) => {
      if (action.payload?.length > 0) {
        state.listView = action.payload;
      } else {
        state.listView = state.listView?.map((item) =>
          item.order !== action.payload[0]?.order ? item : action.payload[0]
        );
      }
    })
    .addCase(setQuesDetail, (state, action) => {
      state.quesDetail = action.payload;
    })
    .addCase(setShowResult, (state, action) => {
      state.isCheckShowResult = action.payload;
    })
    // get list result
    .addCase(getListResult.pending, (state) => {
      state.loadingListResult = true;
    })
    .addCase(getListResult.fulfilled, (state, action) => {
      state.loadingListResult = false;
      state.listResultData = action.payload;
    })
    .addCase(getListResult.rejected, (state) => {
      state.loadingListResult = false;
    })
    // get list highest result
    .addCase(getListHighestResult.pending, (state) => {
      state.loadingListResult = true;
    })
    .addCase(getListHighestResult.fulfilled, (state, action) => {
      state.loadingListResult = false;
      state.listResultData = action.payload;
    })
    .addCase(getListHighestResult.rejected, (state) => {
      state.loadingListResult = false;
    })
    // send quiz result
    .addCase(sendMultiQuizResult.pending, (state) => {
      state.loadingSendQuiz = true;
    })
    .addCase(sendMultiQuizResult.fulfilled, (state, action) => {
      state.loadingSendQuiz = false;
    })
    .addCase(sendMultiQuizResult.rejected, (state) => {
      state.loadingSendQuiz = false;
    })

    .addCase(resetBeginTest, (state) => {
      state.listResultData = null;
      state.listQues = [];
      state.dataStartTime = null;
      state.userAnswer = [];
      state.listView = [];
      state.isSubmitInButton = false;
    })
    .addCase(setTimeStart, (state, action) => {
      state.dataStartTime = action.payload;
    })
    .addCase(setSubmitInBtn, (state, action) => {
      state.isSubmitInButton = action.payload;
    })
    .addCase(checkShowFeedback, (state, action) => {
      state.iShowFeedBack = action.payload;
    })
    //check show result
    .addCase(checkShowResult.pending, (state) => {
      state.loadingCheckShowResult = true;
    })
    .addCase(checkShowResult.fulfilled, (state, action) => {
      state.loadingCheckShowResult = false;
      state.isCheckShowResult = action.payload;
    })
    .addCase(checkShowResult.rejected, (state) => {
      state.loadingCheckShowResult = false;
    })
    // get start time
    .addCase(getStartTime.pending, (state) => {
      state.loadingGetStartTime = true;
    })
    .addCase(getStartTime.fulfilled, (state, action) => {
      state.loadingGetStartTime = false;
      state.dataStartTime = formatTimestamp(action.payload?.start_time);
    })
    .addCase(getStartTime.rejected, (state) => {
      state.loadingGetStartTime = false;
    })
    .addCase(setIsViewResultInCourse, (state, action) => {
      state.isViewResultInCourse = action.payload;
    });
});

export const selectQuiz = (state: RootState) => state.quiz;

export default quizReducer;
