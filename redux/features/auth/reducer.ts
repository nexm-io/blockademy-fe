import { createReducer } from "@reduxjs/toolkit";
import { loginAuth, userRegister, sendOtp, verifyEmail } from "./action";

interface AuthState {
  isAuthenticated: boolean;
  user: "";
  isLoading: boolean;
  success: boolean;
  message: string;
  error: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: "",
  success: false,
  isLoading: false,
  message: " ",
  error: false,
};
const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAuth.pending, (state) => {
      state.isAuthenticated = false;
    })
    .addCase(loginAuth.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(loginAuth.rejected, (state) => {
      state.isAuthenticated = false;
    });


    builder
    .addCase(userRegister.pending, (state) => {
      state.success = false;
    })
    .addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
    })
    .addCase(userRegister.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder
    .addCase(sendOtp.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    })
    .addCase(sendOtp.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.isLoading = false;

    })
    .addCase(sendOtp.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });


    builder
    .addCase(verifyEmail.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    })
    .addCase(verifyEmail.fulfilled, (state, action) => {
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.isLoading = false;
    })
    .addCase(verifyEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });
});

export default authReducer;
