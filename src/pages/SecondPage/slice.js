/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foo: 'bar',
};

const appSlice = createSlice({
  name: 'second',
  initialState,
  reducers: {
    changeFoo(state, action) {
      state.foo = action.payload;
    },
  },
});

export const {
  name: sliceKey,
  actions: { changeFoo },
} = appSlice;

export default appSlice.reducer;
