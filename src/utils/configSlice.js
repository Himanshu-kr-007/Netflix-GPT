import { createSlice } from "@reduxjs/toolkit";

// Config slice to manage application configuration, such as language settings
const configSlice = createSlice({
  // Name of the slice, used for identifying this slice in the Redux store
  name: "config",
  
  // Initial state of the slice
  initialState: {
    // Default language setting for the application
    lang: "en",
  },
  
  // Reducers define how the state can be updated
  reducers: {
    // Reducer to change the language setting
    changeLanguage: (state, action) => {
      // Updates the 'lang' property in the state with the payload from the dispatched action
      state.lang = action.payload;
    },
  },
});

// Exporting the action creators generated by Redux Toolkit
export const { changeLanguage } = configSlice.actions;

// Exporting the reducer to be used in the Redux store
export default configSlice.reducer;
