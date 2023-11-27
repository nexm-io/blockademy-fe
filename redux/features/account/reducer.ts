import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  getAccountDetail,
  getAccountDetailWithoutLoading,
  updateAccountDetail,
  updateImageAccount,
} from "./action";
import { AccountSettingResponse } from "./type";

export const initialState: AccountSettingResponse = {
  error: null,
  success: false,
  isLoading: false,
  message: "",
  data: null,
};

const accountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAccountDetail.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAccountDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    })
    .addCase(getAccountDetail.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(getAccountDetailWithoutLoading.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.isLoading = false;
      state.data = action.payload.data;
    });
});

export default accountReducer;
