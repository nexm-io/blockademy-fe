import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReward = createAsyncThunk("user/list-reward", async () => {
  const response = await api.get(
    `/api/v10/user/reward-list?limit=`,
    {
      headers: {
        apiKey: "",
      },
    }
  );
  return response.data;
});