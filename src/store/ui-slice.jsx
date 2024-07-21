import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const uiSlide = createSlice({
  name: "ui",
  initialState: {
    cartIsvisible: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsvisible = !state.cartIsvisible;
    },
  },
});

export const uiAction = uiSlide.actions;
export default uiSlide;
