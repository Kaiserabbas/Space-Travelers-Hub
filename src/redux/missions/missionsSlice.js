import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronous action to fetch missions
export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }));
  },
);

const initialState = {
  missions: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default missionsSlice.reducer;
