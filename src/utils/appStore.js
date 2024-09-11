import { configureStore } from "@reduxjs/toolkit"; 
// Import the 'configureStore' function from Redux Toolkit. 
// This function simplifies creating the Redux store by combining reducers, 
// setting up middleware, and enabling the Redux DevTools extension by default.

import userReducer from "./userSlice"; 
// Import the user reducer (created in 'userSlice.js'). 
// This reducer manages the 'user' state slice in the Redux store.

const appStore = configureStore({
  reducer: {
    user: userReducer, 
    // The 'reducer' object defines slices of state for the store. 
    // Here, we're registering the 'user' slice, which is managed by 'userReducer'.
  },
  // The store can accept more slices in the 'reducer' object, each managing a different part of the app's state.
});

// Export the store so it can be used throughout the application.
export default appStore;
