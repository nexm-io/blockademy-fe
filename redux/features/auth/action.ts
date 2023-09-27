import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, ChangePasswordDetail, ResetDetail, User, VerifyDetail } from "./type";
import api from "@/services/axios";

export const loginAuth = createAsyncThunk<
  AuthResponse,
  Pick<User, "email" | "password">
>("auth/login", async (userLogin: Pick<User, "email" | "password">) => {
  const response = await api.post("/api/v10/login", userLogin);
  return response.data;
});
export const logoutAuth = createAsyncThunk<AuthResponse>(
  "auth/logout",
  async () => {
    const response = await api.get("/api/v10/user/logout");
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

export const forgotAuth = createAsyncThunk<AuthResponse, Pick<User, "email">>(
  "auth/forgot-password",
  async (userForgot: Pick<User, "email">) => {
    const response = await api.post("/api/v10/forgot-password", userForgot);
    return response.data;
  }
);

export const resetPassword = createAsyncThunk<AuthResponse, ResetDetail>(
  "auth/reset-password",
  async (detail) => {
    const response = await api.post(
      `/api/v10/reset?email=${detail.email}&activation_code=${detail.code}`,
      detail.data
    );
    return response.data;
  }
);

export const changePassword = createAsyncThunk<AuthResponse, ChangePasswordDetail>(
  "auth/change-password",
  async (detail) => {
    const response = await api.post(
      `/api/v10/user/change-password`,
      detail
    );
    return response.data;
  }
);
