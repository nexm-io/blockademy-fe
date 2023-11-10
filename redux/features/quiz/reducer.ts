import { createReducer } from "@reduxjs/toolkit";
import { defaultQuizReducer } from "./type";
import { RootState } from "@/redux/store";
import { update } from "./action";

const quizReducer = createReducer(defaultQuizReducer, (builder: any) => {
  builder.addCase(update, (state: any, action: any) => {
    state.value = action.payload;
  });
});

export const selectQuiz = (state: RootState) => state.quiz;

export default quizReducer;
