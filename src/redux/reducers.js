import { combineReducers } from '@reduxjs/toolkit';
import appReducer, { sliceKey as appKey } from 'app/slice';
export function createReducer(injectedReducers) {
  // if (!injectedReducers || Object.keys(injectedReducers).length === 0) {
  //   return (state) => state;
  // }
  return combineReducers({
    [appKey]: appReducer,
    ...injectedReducers,
  });
}
