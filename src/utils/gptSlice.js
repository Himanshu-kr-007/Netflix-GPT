import { createSlice } from "@reduxjs/toolkit";

// Define a Redux slice for GPT functionality
const gptSlice = createSlice({
  // Provide a name for the slice to identify it in the Redux store
  name: "gpt",
  
  // Initial state of the slice
  initialState: {
    showGptSearch: false, // Boolean flag to toggle the visibility of GPT search feature
  },
  
  // Define the reducers that will handle state changes
  reducers: {
    // Reducer to toggle the visibility of the GPT search component
    toggleGPTSearchView: (state) => {
      // Toggle the value of 'showGptSearch' between true and false
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

// Export the action creator for the toggleGPTSearchView reducer
export const { toggleGPTSearchView } = gptSlice.actions;

// Export the reducer to be included in the Redux store
export default gptSlice.reducer;
