import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReward = createAsyncThunk("user/list-reward", async () => {
  const response = await api.get(
    `/api/v10/user/reward-list?limit=`
  );
  return response.data;
});

export const fetchDetail = createAsyncThunk("user/detail-reward", async (id : number) => {
  const response = await api.get(
    `/api/v10/user/reward/${id}`
  );
  return response.data;
});
