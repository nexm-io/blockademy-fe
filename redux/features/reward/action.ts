import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRewardDetail = createAsyncThunk(
  "reward/get-reward-detail",
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