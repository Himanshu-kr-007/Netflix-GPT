// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define a slice of the Redux store for managing movie-related state
const moviesSlice = createSlice({
  name: "movies", // Name of the slice, used in Redux actions and state
  initialState: {
    // The initial state of the slice
    nowPlayingMovies: null, // This will hold the "Now Playing" movies data once fetched
    trailerVideo: null // This will hold the trailer video data for a specific movie
  },
  reducers: {
    // Reducer functions to update the state
    addNowPlayingMovies: (state, action) => {
      // This reducer updates the state with the payload (movie data) from the dispatched action
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      // This reducer updates the state with the payload (movie data) from the dispatched action
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      // This reducer updates the state with the payload (movie data) from the dispatched action
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      // This reducer updates the state with the payload (movie data) from the dispatched action
      state.UpcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      // This reducer updates the 'trailerVideo' state with the payload from the dispatched action
      // The payload contains the trailer video data for a specific movie
      // It ensures that the 'trailerVideo' property holds the trailer's URL or related information after the API call
      state.trailerVideo = action.payload;
    },
  },
});

// Export the generated action creators for adding now-playing movies, Popular Movies, Upcoming Movies and trailer video
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;

// Export the reducer function to be used in the Redux store
export default moviesSlice.reducer;
