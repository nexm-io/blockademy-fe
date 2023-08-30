import { createReducer } from "@reduxjs/toolkit";
import { loginAuth, register, sendOtp } from "./action";
import { initialState } from "./type";

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAuth.pending, (state) => {
      state.isAuthenticated = false;
    })
    .addCase(loginAuth.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.data.token;
      state.user = action.payload.data;
    })
    .addCase(loginAuth.rejected, (state) => {
      state.isAuthenticated = false;
    });

  builder
    .addCase(register.pending, (state) => {
      state.success = false;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      // state.message = action.payload.message;
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
    .addCase(sendOtp.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.payload.error;
      // state.message = action.payload.message;
    });
});

export default authReducer;
