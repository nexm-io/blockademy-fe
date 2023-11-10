import api from "@/services/axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCategory = createAsyncThunk(
  "category/load-category",
  async () => {
    try {
      const { data: blogs } = await api.get("/api/v10/category");
      return blogs.data;
    } catch (error) {
      return null;
    }
  }
);

export const setCurrCategory = createAction<number>("category/set-curr-category");
