import { createReducer } from "@reduxjs/toolkit";
import { defaultExampleReducer } from "./type";
import { RootState } from "@/redux/store";
import { update } from "./action";

const exampleReducer = createReducer(defaultExampleReducer, (builder: any) => {
  builder.addCase(update, (state: any, action: any) => {
    state.value = action.payload;
  });
});

export const selectExample = (state: RootState) => state;

export default exampleReducer;
