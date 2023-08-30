import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, User, VerifyDetail } from "./type";
import api from "@/services/axios";

export const loginAuth = createAsyncThunk(
  "auth/login",
  async (userLogin: Pick<User, "email" | "password">) => {
    const response = await api.post("/api/v10/login", userLogin);
    return response.data;
  }
);

export const userRegister = createAsyncThunk<
  AuthResponse,
  Pick<User, "email" | "password" | "password_confirmation">
>("auth/register", async (userRegister) => {
  const response = await api.post("/api/v10/signup", userRegister);
  return response.data;
});

export const sendOtp = createAsyncThunk<AuthResponse, Pick<User, "email">>(
  "auth/send-otp",
  async (email) => {
    const response = await api.post("/api/v10/send-verify-email", email);
    return response.data;
  }
);

export const verifyEmail = createAsyncThunk<AuthResponse, VerifyDetail>(
  "auth/verify-email",
  async (detail) => {
    const response = await api.post("/api/v10/verify-otp", detail);
    return response.data;
  }
);
