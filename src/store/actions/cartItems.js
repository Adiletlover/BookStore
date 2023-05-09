import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

const fetchCarts = createAsyncThunk('cart/fetchAll', async (payload, thunkApi) => {
  try {
    const response = await api.getCartItems(thunkApi.signal);
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});
export default fetchCarts;
