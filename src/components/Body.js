import React, { useEffect } from "react";
import Login from "./Login"; // Import the Login component
import Browse from "./Browse"; // Import the Browse component
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import router functions from react-router-dom
import { onAuthStateChanged } from "firebase/auth"; // Import Firebase Auth listener
import { auth } from "../utils/Firebase"; // Import Firebase Auth instance
import { useDispatch } from "react-redux"; // Import Redux dispatch hook
import { addUser, removeUser } from "../utils/userSlice"; // Import Redux actions for user management

const Body = () => {
  const dispatch = useDispatch(); // Get dispatch function from Redux
  // Define routes and their corresponding components
  const appRouter = createBrowserRouter([
    {
      path: "/", // Root path
      element: <Login />, // Render the Login component
    },
    {
      path: "/browse", // Browse path
      element: <Browse />, // Render the Browse component
    },
  ]);

  useEffect(() => {
    // Set up Firebase Auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is authenticated
        const { uid, email, displayName, photoURL } = user;
        // Update the Redux store with user information
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        // Redirect User to Browse Page using useNavigate hook
      } else {
        // If user is not authenticated (signed out)
        dispatch(removeUser()); // Clear user data from Redux store
        // Redirect user to Main Page
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      {/* Provide the router configuration to the application */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body; // Export the Body component for use in the app
