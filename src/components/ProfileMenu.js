import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase"; // Import your Firebase auth object
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown visibility
  const navigate = useNavigate(); // Hook to programmatically navigate
  const user = useSelector((store) => store.user); // Subscribing to the Store
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch); // If GPT Search is selected then true else false
  const dispatch = useDispatch();
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

  const handleGptSearchClick = () => {
    // Toggle the visibility of the GPT Search view
    // Store the state of the view using Redux
    // Dispatch an action to update the GPT search view status
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    // Event handler for changing the language preference
    // console.log(e.target.value);

    // Dispatching the `changeLanguage` action with the selected language value
    // This updates the language state in the Redux store
    dispatch(changeLanguage(e.target.value));
  };

  return (
    user && (
      <div className="relative flex items-center">
        {showGptSearch && (
          <select
            className="p-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 mx-4 rounded-md my-2 bg-purple-800  text-white "
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "HomePage" : "GPT Search"}
        </button>
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
