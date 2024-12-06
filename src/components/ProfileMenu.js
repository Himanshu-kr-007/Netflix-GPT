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
      <div className="relative flex flex-col md:flex-row items-center md:items-center md:justify-end space-y-4 md:space-y-0 md:space-x-6">
        {showGptSearch && (
          <select
            className="p-2 bg-gray-900 text-white rounded-md w-full md:w-auto"
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
          className="py-2 px-4 w-full md:w-auto bg-purple-800 text-white rounded-md hover:bg-purple-900 transition my-2 md:my-0"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "HomePage" : "GPT Search"}
        </button>
        <img
          className="w-12 h-12 rounded-full cursor-pointer border-2 border-purple-800"
          src={user?.photoURL}
          alt="Profile"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute right-0 mt-12 md:mt-16 w-48 bg-white text-black rounded-md shadow-lg">
            <button
              onClick={handleSignOut}
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
