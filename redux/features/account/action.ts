import { createAsyncThunk } from "@reduxjs/toolkit";
import { AccountSettingResponse } from "./type";
import api from "@/services/axios";

export const getAccountDetail = createAsyncThunk<
  AccountSettingResponse,
  {
    userId: number;
  }
>("account/getAccountDetail", async ({ userId }: { userId?: number }) => {
  const response = await api.get(
    `/api/v10/user/user-details-by-id?id=${userId}`
  );
  return response.data;
});

export const updateAccountDetail = createAsyncThunk<
  AccountSettingResponse,
  any
>("account/updateAccountDetail", async (details) => {
  const response = await api.post(`/api/v10/user/update-profile`, details, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
});
