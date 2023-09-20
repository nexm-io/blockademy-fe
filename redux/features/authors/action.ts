import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthorResponse } from "./type";


export const getListAuthor = createAsyncThunk<
  AuthorResponse,
  { limit?: number, page?: number}
>("courses/detail-course", async ({ page = 1, limit = ""}) => {
  const response = await api.get(
    `/api/v10/list-author?page=${page}&limit=${limit}`
  );
  return response.data;
});
