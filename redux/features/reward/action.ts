import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRewardDetail = createAsyncThunk(
  "reward/get-reward-detail-by-user",
  async (courseId: string) => {
    try {
      const { data: reward } = await api.get(
        `/api/v10/detail-reward-by-user/${courseId}`
      );
      return reward;
    } catch (error) {
      return null;
    }
  }
);

export const getListRewards = createAsyncThunk(
  "reward/get-list-reward",
  async () => {
    try {
      const { data: rewards } = await api.get(`/api/v10/list-reward-by-user`);
      return rewards;
    } catch (error) {
      return null;
    }
  }
);
