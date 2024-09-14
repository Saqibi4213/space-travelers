import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v4/dragons';

export const fetchDragons = createAsyncThunk('Dragons/fetchDragons', async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    image: dragon.flickr_images[0],
    description: dragon.description,
    reserved: false,
  }));
});

const initialState = {
  dragonData: [],
  loading: false,
  error: '',
};

const DragonsSlice = createSlice({
  name: 'Dragons',
  initialState,
  reducers: {
    reserveDragon: (state, action) => {
      const dragon = state.dragonData.find((d) => d.id === action.payload);
      if (dragon) {
        dragon.reserved = !dragon.reserved;
      }
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

export default DragonsSlice.reducer;
export const { reserveDragon } = DragonsSlice.actions;
