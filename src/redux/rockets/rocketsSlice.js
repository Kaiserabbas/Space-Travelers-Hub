import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketsSlice.reducers;
