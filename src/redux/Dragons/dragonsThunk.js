import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await axios.get('https://api.example.com/dragons');
    return response.data;
  }
);
