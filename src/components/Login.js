import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

  // State variable to toggle between sign-in and sign-up forms
  const [isSignInForm, setIsSignInForm] = useState(true);
  // State for managing error messages, initially set to null
  const [errorMessage, setErrorMessage] = useState(null);

  // Navigate Page if User is Login
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useRef hooks to store references to the email and password input fields.
  const name = useRef(null); // name reference, initialized to null
  const email = useRef(null); // email reference, initialized to null
  const password = useRef(null); // password reference, initialized to null

  // Function to toggle the form state
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); // Switches the state from true to false or vice versa
  };

  // Function for Form Validation
  const handleButtonClick = () => {
    // Retrieve the current values of the email and password inputs
    // console.log(email.current.value); // Logs the email input value
    // console.log(password.current.value); // Logs the password input value

    // Call the validation function to check if the email and password are valid.
    // The function returns an error message if validation fails, or null if validation passes.
    const message = checkValidData(
      name.current?.value,
      email.current.value,
      password.current.value
    );

    // Update the error message state with the validation result.
    // If validation fails, the error message will contain the error.
    // If validation succeeds, the message will be null (no errors).
    setErrorMessage(message);
    // If an error message is present, exit the function to prevent further execution
    if (message) return;

    // If no validation errors, proceed with authentication logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Successfully signed up the user
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value || "Unkown User",
            photoURL: "https://avatars.githubusercontent.com/u/69851575?v=4",
          })
            .then(() => {
              // Dispatch Action From Here and update the Store once again: means update the user
              // Here user is not having the updated value so we are taking the infomration from the getAuth which have the updated value
              const currentUser = auth.currentUser;
              if(currentUser) {
                const { uid, email, displayName, photoURL } = currentUser;
                // Update the Redux store with user information
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                navigate("/browse");
              } else{
                console.error("User Not Found after Profile")
              }
            })
            .catch((error) => {
              const errorDetails = error.message || "Unkown Error";
              setErrorMessage("Profile Update Failed: " + errorDetails);
            });
        })
        .catch((error) => {
          // Handle errors that occur during sign up
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // Optionally log or handle additional error details
        });
    } else {
      // Implement sign in functionality here
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log("Sign In Successful");
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen">
      {/* Header Component */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Optional overlay for better contrast */}
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 w-full max-w-md bg-black bg-opacity-65 text-white"
      >
        {/* Form Heading */}
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Conditional Rendering: Show Full Name input only if it's a sign-up form */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
          />
        )}

        {/* Email Address Input */}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
        />

        {/* Conditional Rendering: Show Phone Number input only if it's a sign-up form */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
          />
        )}

        {/* Password Input */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-gray-800 rounded text-white"
        />
        <p className="text-red-600 font-bold p-1">{errorMessage}</p>
        {/* Submit Button */}
        <button
          onClick={handleButtonClick}
          className="w-full p-3 bg-red-600 hover:bg-red-700 rounded text-white"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle Form Link */}
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
