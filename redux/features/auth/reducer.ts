import { createReducer } from "@reduxjs/toolkit";
import { loginAuth } from "./action";

interface AuthState {
  isAuthenticated: boolean;
  user: "";
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: "",
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
});

export default authReducer;
