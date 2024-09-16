import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase"; // Import your Firebase auth object
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown visibility
  const navigate = useNavigate(); // Hook to programmatically navigate
  const user = useSelector((store) => store.user); // Subscribing to the Store
  // Function to handle user sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Remove this line also
        // navigate("/"); // Navigate to the home page on successful sign-out
      })
      .catch((error) => {
        navigate("/error"); // Navigate to an error page on sign-out failure
      });
  };

  return (
    user && (
      <div className="relative flex items-center">
        {/* Profile Icon */}
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          // Accessing the Picture From the Photo URL
          src={user?.photoURL}
          alt="Profile"
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown menu on click
        />
        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-24 w-48 bg-white text-black rounded shadow-lg">
            <button
              onClick={handleSignOut} // Trigger sign-out on button click
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    )
  );
};

export default ProfileMenu;
