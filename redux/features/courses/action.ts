import api from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListCourse = createAsyncThunk(
    "courses/all-courses",
    async () => {
      const response = await api.get("/api/v10/campaign");
      return response.data;
    }
  );
  