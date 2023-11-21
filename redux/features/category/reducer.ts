import { RootState } from "@/redux/store";
import { createReducer } from "@reduxjs/toolkit";
import { defaultCategoryReducer } from "./type";
import { loadCategory, setCurrCategory } from "./action";

const categoryReducer = createReducer(defaultCategoryReducer, (builder) => {
  builder
    .addCase(loadCategory.pending, (state) => {
      state.categoryLoading = true;
    })
    .addCase(loadCategory.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.data = action.payload;
      state.categoryLoading = false;
    })
    .addCase(loadCategory.rejected, (state) => {
      state.categoryLoading = false;
    })
    .addCase(setCurrCategory, (state, action) => {
      state.currCategory = action.payload;
    });
});

export const selectCategory = (state: RootState) => state.category;

export default categoryReducer;
