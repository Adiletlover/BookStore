import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

const fetchBooks = createAsyncThunk('books/fetchAll', async (payload, thankApi) => {
  try {
    const response = await api.getBooks(thankApi.signal);
    return response.data;
  } catch (err) {
    return thankApi.rejectWithValue(err.message);
  }
});
// const fetchBooks = () => async (dispatch) => {
//     const controller = new AbortController()
//     try {
//         dispatch(setBooksLoading())
//         const response = await api.getBooks(controller.signal)
//         dispatch(setBooks(response.data))
//     }
//     catch (err) {
//         controller.abort()
//         dispatch(setBooks(err.message))
//     }
// }

export default fetchBooks;
