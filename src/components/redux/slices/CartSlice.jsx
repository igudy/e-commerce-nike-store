import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

// setAddItemToCart(Add one item for one product)
// setRemoveItemFromCart(Remove all items of one product)
// setIncreaseItemQTY(Increase cart quantity)
// setDecreaseItemQTY(Decrease the quantity)
// setClearItems(Clear all items from cart)
// setGetTotals(Total for all price)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY Increased`);
      } else {
        // Declaring cartquantity for the first time
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Removed From Cart`);
    },
    
    setIncreaseItemQuantity: (state, action) => {},
    setDecreaseItemQuantity: (state, action) => {},
    setClearItems: (state, action) => {},
    setGetTotalAmount: (state, action) => {},
  },
});

export const {
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQuantity,
  setDecreaseItemQuantity,
  setClearItems,
  setGetTotalAmount,
} = cartSlice.actions;

// this cart below is not the name, its the cart in the store
export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
