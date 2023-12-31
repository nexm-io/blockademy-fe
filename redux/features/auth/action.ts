import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AuthResponse,
  ChangePasswordDetail,
  ResetDetail,
  User,
  VerifyDetail,
} from "./type";
import api from "@/services/axios";

export const loginWithGoogle = createAsyncThunk(
  "auth/login-with-google",
  async (access_token: string) => {
    try {
      const response = await api.post(
        `/api/v10/login/google?social_token=${access_token}`
      );
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  }
);

export const loginAuth = createAsyncThunk<
  AuthResponse,
  Pick<User, "email" | "password">
>("auth/login", async (userLogin: Pick<User, "email" | "password">) => {
  try {
    const response = await api.post("/api/v10/login", userLogin);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

export const logoutAuth = createAsyncThunk<AuthResponse>(
  "auth/logout",
  async () => {
    const response = await api.get("/api/v10/user/logout");
    return response.data;
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async (userRegister: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation?: string;
  }) => {
    try {
      const response = await api.post("/api/v10/signup", userRegister);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

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

export const forgotAuth = createAsyncThunk(
  "auth/forgot-password",
  async (userForgot: Pick<User, "email">) => {
    try {
      const response = await api.post("/api/v10/forgot-password", userForgot);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const resetPassword = createAsyncThunk<AuthResponse, ResetDetail>(
  "auth/reset-password",
  async (detail) => {
    try {
      const response = await api.post(
        `/api/v10/reset?email=${detail.email}&activation_code=${detail.code}`,
        detail.data
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const changePassword = createAsyncThunk<
  AuthResponse,
  ChangePasswordDetail
>("auth/change-password", async (detail) => {
  try {
    const response = await api.post(`/api/v10/user/change-password`, detail);
    if (response.status === 400) {
      console.error("API returned a 400 error:", response.data);
      return response.data;
    } else {
      return response.data;
    }
  } catch (error: any) {
    return error.response.data;
  }
});

export const setRefUrl = createAction<string>("auth/set-ref-url");
