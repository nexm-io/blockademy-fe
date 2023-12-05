import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  claimReward,
  getAnswerQuiz,
  getDetailCourse,
  getListCourse,
  resetFinish,
  saveAnswerQuiz,
  getDetailCourseWithoutLoading,
  getDetailSubCourse,
  getDetailLesson,
  setPrevSubCourseSlug,
} from "./action";
import { CourseResponse } from "./type";

const initialState: CourseResponse = {
  success: false,
  isLoading: true,
  data: [],
  error: null,
  details: null,
  subCourseLoading: true,
  subCourse: null,
  lessonLoading: true,
  lesson: null,
  quiz: {
    is_correct: false,
    is_finished: 0,
  },
  pagination: {
    total: 0,
    count: 0,
    per_page: 0,
    current_page: 0,
    total_pages: 0,
  },
  previousSubCourseSlug: "",
};

const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getListCourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getListCourse.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.error = null;
    })
    .addCase(getListCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

  builder
    .addCase(getDetailCourse.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getDetailCourse.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
      state.details = action.payload.data;
      state.error = null;
    })
    .addCase(getDetailCourse.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload.data;
    });

  builder
    .addCase(getDetailSubCourse.pending, (state) => {
      state.subCourseLoading = true;
    })
    .addCase(getDetailSubCourse.fulfilled, (state, action) => {
      state.subCourseLoading = false;
      if (!action.payload) return;
      state.subCourse = action.payload.data;
    })
    .addCase(getDetailSubCourse.rejected, (state) => {
      state.subCourseLoading = false;
    });

  builder
    .addCase(setPrevSubCourseSlug, (state, action) => {
      state.previousSubCourseSlug = action.payload;
    });

  builder
    .addCase(getDetailLesson.pending, (state) => {
      state.lessonLoading = true;
    })
    .addCase(getDetailLesson.fulfilled, (state, action) => {
      state.lessonLoading = false;
      if (!action.payload) return;
      state.lesson = action.payload.data;
    })
    .addCase(getDetailLesson.rejected, (state) => {
      state.lessonLoading = false;
    });

  builder.addCase(getDetailCourseWithoutLoading.fulfilled, (state, action) => {
    if (!action.payload) return;
    state.isLoading = false;
    state.details = action.payload.data;
    state.error = null;
  });

  builder
    .addCase(getAnswerQuiz.pending, (state) => {
      state.error = null;
    })
    .addCase(getAnswerQuiz.fulfilled, (state, action) => {
      state.error = null;
      state.quiz = action.payload.data;
    })
    .addCase(getAnswerQuiz.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.data;
    });

  builder
    .addCase(saveAnswerQuiz.pending, (state) => {
      state.error = null;
    })
    .addCase(saveAnswerQuiz.fulfilled, (state, action) => {
      state.error = null;
      state.quiz = action.payload.data;
    })

    .addCase(saveAnswerQuiz.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.data;
    });

  builder
    .addCase(claimReward.pending, (state) => {
      state.error = null;
    })
    .addCase(claimReward.fulfilled, (state, action) => {
      state.error = null;
      state.success = action.payload.success;
    })
    .addCase(claimReward.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.data;
    });

  builder.addCase(resetFinish, (state, action) => {
    state.quiz = { ...state.quiz, is_finished: action.payload };
  });
});

export { courseReducer };
