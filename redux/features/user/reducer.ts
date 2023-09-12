import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { fetchDetail, fetchReward } from "./action";

interface Reward {
  is_claimed: number;
  id: number;
  title: string;
  name: string;
  description: string;
  owner: string;
  quantity: number;
  image: {
    original: string;
    thumbnail: string;
  };
}

interface UserResponse {
  success: boolean;
  isLoading: boolean;
  data: Array<Reward>;
  error: any;
  detail: Reward | null;
}

const initialState: UserResponse = {
  success: false,
  isLoading: false,
  data: [],
  error: null,
  detail: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchReward.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchReward.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.error = null;
    })
    .addCase(fetchReward.rejected, (state, action: PayloadAction<any>) => {
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
});

export {userReducer}