import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getAccountDetail, updateAccountDetail } from "./action";
import { AccountSettingResponse } from "./type";

export const initialState: AccountSettingResponse = {
  success: false,
  isLoading: false,
  message: "",
  data: null,
};

 

const accountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAccountDetail.pending, (state) => {
      state.isLoading = false;
    })

    .addCase(getAccountDetail.fulfilled, (state, action) => {
      state.isLoading = true;
      state.data = action.payload.data;
    })

    .addCase(getAccountDetail.rejected, (state) => {
      state.isLoading = false;
    });

    builder
    .addCase(updateAccountDetail.pending, (state) => {
      state.isLoading = false;
    })

    .addCase(updateAccountDetail.fulfilled, (state, action) => {
      state.isLoading = true
    })

    .addCase(updateAccountDetail.rejected, (state) => {
      state.isLoading = false;
    });

});

 

export default accountReducer;

 