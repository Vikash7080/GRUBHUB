import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [], // Array to hold items added to the cart
};

// Create a slice for cart with reducers
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // If item exists in cart, just increment the quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item to the cart with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // Action to update the quantity of an item
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    // Action to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Action to clear the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export the actions
export const { addItem, updateItemQuantity, removeItem, clearCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
