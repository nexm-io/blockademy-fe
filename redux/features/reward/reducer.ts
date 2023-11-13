import { createReducer } from "@reduxjs/toolkit";
import { defaultRewardReducer } from "./type";
import { RootState } from "@/redux/store";
import { getRewardDetail } from "./action";

const rewardReducer = createReducer(defaultRewardReducer, (builder: any) => {
  builder
    .addCase(getRewardDetail.pending, (state: any) => {
      state.rewardDetailLoading = true;
    })
    .addCase(getRewardDetail.fulfilled, (state: any, action: any) => {
      if (!action.payload) return;
      state.rewardDetails = action.payload.data;
      state.rewardDetailLoading = false;
    })
    .addCase(getRewardDetail.rejected, (state: any) => {
      state.rewardDetailLoading = false;
    });
});

export const selectReward = (state: RootState) => state.reward;

export default rewardReducer;
