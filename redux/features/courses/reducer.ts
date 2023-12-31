import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  claimReward,
  getAnswerQuiz,
  getDetailCourse,
  getListCourse,
  resetFinish,
  saveAnswerQuiz,
  getDetailCourseWithoutLoading,
  getDetailLesson,
  setPrevSubCourseSlug,
  getNextLesson,
  getCompleteRate,
  getNextPrevLesson,
  getMenuData,
  getDetailLessonWithoutLoading,
  getMenuDataWithoutLoading,
} from "./action";
import { CourseResponse } from "./type";
import { RootState } from "@/redux/store";

const initialState: CourseResponse = {
  success: false,
  isLoading: false,
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
  nextLesson: {
    main_is_specialization: "",
    main_course_data: "",
    course_id: "",
    course_slug: "",
    course_title: "",
    is_registered: 0,
    is_claimed: 0,
    title: "",
    link: null,
    duration: 0,
    assignment_detail: {},
    type_upload: "",
    type_format: 0,
    description: null,
  },
  completeRate: {
    total_completed: 0,
  },
  nextPrevLesson: {
    previous_data: {
      sub_course_id: "",
      sub_course_slug: "",
      module_id: 0,
      module_slug: "",
      lesson_id: 0,
      lesson_slug: "",
      is_complete_lesson: 0,
    },
    current_data: {
      sub_course_id: "",
      sub_course_slug: "",
      module_id: 0,
      module_slug: "",
      lesson_id: 0,
      lesson_slug: "",
      is_complete_lesson: 0,
    },
    next_data: {
      sub_course_id: "",
      sub_course_slug: "",
      module_id: 0,
      module_slug: "",
      lesson_id: 0,
      lesson_slug: "",
      is_complete_lesson: 0,
    },
  },
  menuData: {
    sub_course_data: [],
    module_data: [],
  },
  menuDataLoading: false,
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
    .addCase(getListCourse.rejected, (state) => {
      state.isLoading = false;
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
    .addCase(getDetailCourseWithoutLoading.pending, (state) => {
      state.isLoading = false;
    })
    .addCase(getDetailCourseWithoutLoading.fulfilled, (state, action) => {
      state.isLoading = false;
      if (!action.payload) return;
      state.details = action.payload.data;
    })
    .addCase(getDetailCourseWithoutLoading.rejected, (state) => {
      state.isLoading = false;
    });

  builder
    .addCase(getMenuData.pending, (state) => {
      state.menuDataLoading = true;
    })
    .addCase(getMenuData.fulfilled, (state, action) => {
      state.menuDataLoading = false;
      if (!action.payload) return;
      state.menuData = action.payload.data;
    })
    .addCase(getMenuData.rejected, (state) => {
      state.menuDataLoading = false;
    });

  builder
    .addCase(getMenuDataWithoutLoading.pending, (state) => {
      state.menuDataLoading = false;
    })
    .addCase(getMenuDataWithoutLoading.fulfilled, (state, action) => {
      state.menuDataLoading = false;
      if (!action.payload) return;
      state.menuData = action.payload.data;
    })
    .addCase(getMenuDataWithoutLoading.rejected, (state) => {
      state.menuDataLoading = false;
    });

  builder.addCase(getNextLesson.fulfilled, (state, action) => {
    if (!action.payload) return;
    state.nextLesson = action.payload.data;
  });

  builder.addCase(getNextPrevLesson.fulfilled, (state, action) => {
    if (!action.payload) return;
    state.nextPrevLesson = action.payload.data;
  });

  builder.addCase(setPrevSubCourseSlug, (state, action) => {
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

  builder
    .addCase(getDetailLessonWithoutLoading.pending, (state) => {
      state.lessonLoading = false;
    })
    .addCase(getDetailLessonWithoutLoading.fulfilled, (state, action) => {
      state.lessonLoading = false;
      if (!action.payload) return;
      state.lesson = action.payload.data;
    })
    .addCase(getDetailLessonWithoutLoading.rejected, (state) => {
      state.lessonLoading = false;
    });

  builder.addCase(getCompleteRate.fulfilled, (state, action) => {
    if (!action.payload) return;
    state.completeRate = action.payload.data;
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

export const selectCourses = (state: RootState) => state.courses;

export { courseReducer };
