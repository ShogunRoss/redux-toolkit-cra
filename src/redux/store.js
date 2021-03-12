import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from './reducers';

const store = configureStore({
  reducer: createReducer(),
  devTools: process.env.NODE_ENV !== 'production',
});

export function configureAppStore() {
  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // // Make reducers hot reloadable
  // if (process.env.NODE_ENV === 'development' && module.hot) {
  //   module.hot.accept('./reducers', () =>
  //     store.replaceReducer(createReducer(store.asyncReducers)),
  //   );
  // }

  // Return the modified store
  return store;
}

export function getStore() {
  return store;
}
