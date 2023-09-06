import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v4/rockets');
  const data = await response.json();
  return data.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.name,
    type: rocket.type,
    flickr_images: rocket.flickr_images,
    description: rocket.description,
  }));
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      });
  },
});

export { fetchRockets };
export default rocketsSlice.reducer;
