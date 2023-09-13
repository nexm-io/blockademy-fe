import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRewardAvailable = createAsyncThunk("user/list-reward-available", async () => {
  const response = await api.get(
    `/api/v10/user/reward-list-available?limit=`
  );
  return response.data;
});

export const fetchRewardClaimed = createAsyncThunk("user/list-reward-claimed", async () => {
  const response = await api.get(
    `/api/v10/user/reward-list-claimed?limit`
  );
  return response.data;
});

export const fetchDetail = createAsyncThunk("user/detail-reward", async (id : number) => {
  const response = await api.get(
    `/api/v10/user/reward/${id}`
  );
  return response.data;
});

export const claimInWallet =  createAsyncThunk("user/claimed-reward", async (id : number) => {
  const response = await api.post(
    `/api/v10/user/claimed-reward/${id}`
  );
  return response.data;
});