import React from "react";
import Login from "./Login"; // Import the Login component
import Browse from "./Browse"; // Import the Browse component
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // Import router functions from react-router-dom

const Body = () => {
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

  return (
    <div>
      {/* Provide the router configuration to the application */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body; // Export the Body component for use in the app
