import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionsSlice.reducers;
