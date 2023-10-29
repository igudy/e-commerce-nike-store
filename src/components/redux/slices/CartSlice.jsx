import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { setAddItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
