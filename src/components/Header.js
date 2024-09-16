import React from "react";
import ProfileMenu from "./ProfileMenu";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { NetflixLOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up Firebase Auth state listener
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is authenticated
        const { uid, email, displayName, photoURL } = user;
        // Update the Redux store with user information
        dispatch(addUser({ uid, email, displayName, photoURL }));
        // Redirect User to Browse Page using useNavigate hook
        navigate("/browse");
      } else {
        // If user is not authenticated (signed out)
        dispatch(removeUser()); // Clear user data from Redux store
        // Redirect user to Main Page
        navigate("/");
      }
    });
    // Unsubscribe when Component Unmount
    return () => unsubscirbe();
  }, []); // Adding navigate as a dependency

  return (
    // Container for the header, positioned at the top with full width and padding
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
      {/* Netflix Logo on the left */}
      <img className="w-32 md:w-44" src={NetflixLOGO} alt="Netflix Logo" />
      <ProfileMenu />
    </div>
  );
};

export default Header;
