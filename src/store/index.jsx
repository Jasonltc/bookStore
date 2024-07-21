import { configureStore } from "@reduxjs/toolkit";
import uiSlide from "./ui-slice";
import cartSlice from "./cart-slice";

export const store = configureStore({
  reducer: {
    ui: uiSlide.reducer,
    cart: cartSlice.reducer,
  },
});
