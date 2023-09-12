import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { fetchReward } from "./action";

interface Reward {
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
}

const initialState: UserResponse = {
  success: false,
  isLoading: false,
  data: [],
  error: null,
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
});

export {userReducer}