import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice.jsx";

const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
  },
});

export default store;
