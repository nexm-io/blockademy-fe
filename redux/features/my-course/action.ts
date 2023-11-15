import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listMyCourse = createAsyncThunk("user/list-course-by-user", async ({ status }: {status: string}) => {
  try {
    const response = await api.get(
      `/api/v10/list-course-by-user?status_course=${status}`
    );
    if(!response.data) return []
    return response.data;
  } catch (error) {
    console.log('error', error)
  }
});
