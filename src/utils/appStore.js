import { configureStore } from "@reduxjs/toolkit"; 
// Import the 'configureStore' function from Redux Toolkit. 
// This function simplifies creating the Redux store by combining reducers, 
// setting up middleware, and enabling the Redux DevTools extension by default.

import userReducer from "./userSlice"; 
// Import the user reducer (created in 'userSlice.js'). 
// This reducer manages the 'user' state slice in the Redux store.

import moviesReducer from "./moviesSlice"; 
// Import the movies reducer (created in 'moviesSlice.js').
// This reducer manages the 'movies' state slice, specifically for storing the list of "Now Playing" movies.

import gptReducer from "./gptSlice"
// Import the GPT reducer (created in 'gptSlice.js').
// This reducer manages the 'gpt' state slice, specifically controlling the visibility of the GPT search feature.

import configReducer from "./configSlice"
// Import the Config reducer (created in 'configSlice.js').
// This reducer manages the 'language' state slice, specifically controlling the language feature.


const appStore = configureStore({
  reducer: {
    user: userReducer, 
    // The 'reducer' object defines slices of state for the store. 
    // Here, we're registering the 'user' slice, which is managed by 'userReducer'.

    movies: moviesReducer, 
    // Registering the 'movies' slice, which is managed by 'moviesReducer'.
    // This slice will handle movie-related data, such as "Now Playing" movies,
    // and is responsible for updating and retrieving that part of the application state.

    gpt: gptReducer,
    // Registering the 'gpt' slice, which is managed by 'gptReducer'.
    // This slice manages the state related to GPT functionality,
    // such as toggling the display of the GPT search feature in the UI.

    config: configReducer,
    // Registering the 'config' slice, which is managed by 'configReducer'.
    // This slice manages the state related to language functionality,
  },
  // The store can accept more slices in the 'reducer' object, each managing a different part of the app's state.
});

// Export the store so it can be used throughout the application.
export default appStore;
