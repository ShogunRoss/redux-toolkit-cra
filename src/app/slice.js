/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

export const initialState = {
  foo: 'bar',
};

const appSlice = createSlice({
  name: 'app',
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
