import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getAuthorPost, getAuthorProfile, getListAuthor } from "./action";
import { AuthorResponse } from "./type";

const initialState: AuthorResponse = {
  success: false,
  data: null,
  message: "",
  isLoading: false,
  pagination: {
    total: 0,
    count: 0,
    per_page: 0,
    current_page: 0,
    total_pages: 0,
  },
  error: null,
  dataProfile: null,
  dataPost: null,
};

const authorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAuthorProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getAuthorProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataProfile = action.payload.data;
      state.error = null;
    })
    .addCase(getAuthorProfile.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      // state.error = action.payload.data;
    });

  builder
    .addCase(getAuthorPost.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getAuthorPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataPost = action.payload.data;
      state.pagination = action.payload.pagination;
      state.error = null;
    })

    .addCase(getListAuthor.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getListAuthor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.error = null;
    })
    .addCase(getListAuthor.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
      state.error = action.payload.data;
    });
});

export { authorReducer };
