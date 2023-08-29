import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, User } from "./type";
import api from "@/services/axios";

export const loginAuth = createAsyncThunk(
  "auth/login",
  async (userLogin: Pick<User, "email" | "password">) => {
    const response = await api.post("/api/v10/login", userLogin);
    return response.data;
  }
);

export const register = createAsyncThunk<
  AuthResponse,
  Pick<User, "email" | "password" | "confirm_password">
>("auth/register", async (userRegister) => {
  const response = await api.post("/api/v10/signup", userRegister);
  return response.data;
});

export const sendOtp = createAsyncThunk<
  AuthResponse,
  Pick<User, "email">
>("auth/send-otp", async (email) => {
  try {
    const response = await api.post("/api/v10/send-verify-email", email);
    return response.data;
  } catch (error : any) {
    throw new Error(error);
  }
});


