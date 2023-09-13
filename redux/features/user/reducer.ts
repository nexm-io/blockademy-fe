import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { claimInWallet, fetchDetail, fetchRewardAvailable, fetchRewardClaimed } from "./action";
import { UserResponse } from "./type";



const initialState: UserResponse = {
  success: false,
  isLoading: false,
  message: "",
  data: [],
  error: null,
  detail: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchRewardAvailable.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchRewardAvailable.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(fetchRewardAvailable.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

    builder
    .addCase(fetchRewardClaimed.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchRewardClaimed.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(fetchRewardClaimed.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

    builder
    .addCase(fetchDetail.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detail = action.payload.data;
      state.error = null;
    })
    .addCase(fetchDetail.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

    builder
    .addCase(claimInWallet.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(claimInWallet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      state.error = null;
    })
    .addCase(claimInWallet.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });
});

export {userReducer}