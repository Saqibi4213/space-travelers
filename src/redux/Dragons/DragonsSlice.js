import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragonData: [],
  loading: false,
  error: null,
};

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/dragons');
  return response.data;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const dragon = state.dragonData.find((dragon) => dragon.id === action.payload);
      if (dragon) {
        dragon.reserved = !dragon.reserved;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.loading = false;
        state.dragonData = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reserveDragon, clearError } = dragonsSlice.actions;
export default dragonsSlice.reducer;
