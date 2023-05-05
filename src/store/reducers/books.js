import { createSlice } from '@reduxjs/toolkit';
import fetchBooks from '../actions/books';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: '',
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.booksLoading = false;
      state.booksError = '';
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.booksLoading = true;
      state.booksError = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.booksLoading = false;
      state.booksError = action.payload;
    });
  },
});

const booksReducer = bookSlice.reducer;

export const { setBooks, setBooksError, setBooksLoading } = bookSlice.actions;
export default booksReducer;
