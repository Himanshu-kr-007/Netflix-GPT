import { createSlice } from "@reduxjs/toolkit"; 
// Import the 'createSlice' function from Redux Toolkit, which simplifies creating a Redux slice. 
// A slice includes reducers, actions, and the initial state for a specific part of the Redux store.

const userSlice = createSlice({
    name: 'user', 
    // The name of the slice. It helps identify this slice in the Redux DevTools 
    // and is used to automatically generate action types like 'user/addUser' and 'user/removeUser'.

    initialState: null, 
    // The initial state for the user slice. It starts as 'null', meaning no user is logged in initially.

    reducers: {
        // The 'reducers' field defines the reducer functions to update the state in response to dispatched actions.

        // Reducer for adding a user to the Redux store after successful login or sign-up
        addUser: (state, action) => {
            return action.payload; 
            // This reducer sets the state to the action's payload (i.e., user data). 
            // The payload contains the user information returned from the authentication process.
        },

        // Reducer for removing the user from the Redux store, typically when logging out
        removeUser: (state, action) => {
            return null; 
            // This reducer resets the state to 'null', removing the user data from the store, 
            // indicating that no user is currently logged in.
        }
    }
});

// Export the actions (addUser, removeUser) created by 'createSlice'.
// These actions will be used to update the Redux store (e.g., when logging in or logging out).
export const { addUser, removeUser } = userSlice.actions;

// Export the reducer function. This reducer will handle the 'user' state slice in the Redux store.
export default userSlice.reducer;
