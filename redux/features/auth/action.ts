import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./type";
import api from "@/services/axios";

export const loginAuth = createAsyncThunk(
  "auth/login",
  async (userLogin: Pick<User, "email">) => {
    const response = await api.post("/api/login", userLogin);
    return response.data;
  }
);
