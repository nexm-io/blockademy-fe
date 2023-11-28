import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import {
  forgotAuth,
  loginAuth,
  userRegister,
  verifyEmail,
  sendOtp,
  logoutAuth,
  changePassword,
  setRefUrl,
  loginWithGoogle,
} from "./action";
import { initialState } from "./type";
import { RootState } from "@/redux/store";

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginWithGoogle.pending, (state) => {
      state.isAuthenticated = false;
    })
    .addCase(loginWithGoogle.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      if (!action.payload) return;
      state.token = action.payload.data.token;
      state.user = action.payload.data;
    })
    .addCase(loginWithGoogle.rejected, (state) => {
      state.isAuthenticated = false;
    });

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
    .addCase(userRegister.pending, (state) => {
      state.success = false;
      state.isLoading = true;
    })
    .addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.message = action.payload.message;
    })
    .addCase(userRegister.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.payload.message;
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
    .addCase(verifyEmail.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = true;
      state.message = action.payload.message;
    });
  builder
    .addCase(forgotAuth.pending, (state) => {
      state.success = false;
      state.isLoading = true;
    })
    .addCase(forgotAuth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.message = action.payload.message;
      state.data = action.payload.data;
    })
    .addCase(forgotAuth.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
      state.error = action.payload.error;
    });

  builder
    .addCase(logoutAuth.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logoutAuth.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    })
    .addCase(logoutAuth.rejected, (state) => {
      state.isAuthenticated = false;
      state.isLoading = false;
    });

  builder
    .addCase(changePassword.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(changePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    })
    .addCase(changePassword.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
      state.error = action.payload.error;
      state.message = action.payload.message;
    });

  builder.addCase(setRefUrl, (state, action) => {
    state.urlRef = action.payload;
  });
});

export const selectAuth = (state: RootState) => state.auth;

export default authReducer;
