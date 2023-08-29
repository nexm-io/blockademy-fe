import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./type";
import api from "@/services/axios";

export const loginAuth = createAsyncThunk(
  "auth/login",
  async (userLogin: Pick<User, "email" | "password">) => {
    const response = await api.post("/api/v10/login", userLogin);
    return response.data;
  }
);
