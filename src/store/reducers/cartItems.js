import { createSlice } from '@reduxjs/toolkit';
import fetchCarts from '../actions/cartItems';
const initialState = {
  items: [],
  istItemsloading: false,
  istItemsError: '',
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarts.pending, (state) => {
      state.istItemsError = '';
      state.istItemsloading = true;
    }),
      builder.addCase(fetchCarts.rejected, (state) => {
        state.istItemsError = action.payload;
        state.istItemsloading = false;
        state.items = [];
      }),
      builder.addCase(fetchCarts.fulfilled, (state) => {
        state.istItemsError = '';
        state.istItemsloading = false;
        state.items = action.payload;
      });
  },
});

const cartReducer = cartSlice.reducer;

export const { setIsOpen } = cartSlice.actions;
export default cartReducer;
