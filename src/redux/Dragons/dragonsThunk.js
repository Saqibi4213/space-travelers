import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define fetchDragons using createAsyncThunk
export const fetchDragons = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await axios.get('https://api.example.com/dragons');
    return response.data;
  }
);
