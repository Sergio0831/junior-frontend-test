import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartTotalQuantity: 0
  },
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const productToAdd = state.cart.find((item) => item.id === id);

      if (productToAdd) {
        productToAdd.quantity++;
        state.cartTotalQuantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.cartTotalQuantity++;
      }
    },
    increaseQty(state, action) {
      const product = state.cart.find((item) => item.id === action.payload);
      product.quantity++;
      state.cartTotalQuantity++;
    },
    decreaseQty(state, action) {
      const product = state.cart.find((item) => item.id === action.payload);
      product.quantity--;
      if (product.quantity < 1) {
        const newCart = state.cart.filter((item) => product.id !== item.id);
        state.cart = newCart;
      }
      state.cartTotalQuantity--;
    }
  }
});

export const { addToCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
