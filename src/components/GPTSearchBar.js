import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_Options, GeminiAI_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGPTMovieResult } from "../utils/gptSlice";

// Initialize the Gemini AI model with the provided API key
const genAI = new GoogleGenerativeAI(GeminiAI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to search for a movie in TMDB API
const searchMovieTMDB = async (movie) => {
  // Send a request to the TMDB API to search for the movie
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    API_Options
  );

  // Parse the response from the TMDB API
  const json = await data.json();
  // Return the results of the movie search
  return json.results;
};

const GPTSearchBar = () => {
  const dispatch = useDispatch();

  // Retrieve the current language key from the Redux store
  const langKey = useSelector((store) => store.config.lang);

  // Reference to capture the value entered in the input box
  const SearchText = useRef(null);

  // Function to handle the search button click
  const handleGPTSearchClick = async () => {
    // Get the value entered by the user, and trim any leading/trailing whitespace
    const query = SearchText.current.value.trim();

    // If the input value is empty, exit the function and log an error
    if (!query) {
      console.error("Search query is empty!");
      return;
    }

    // Construct the prompt for the GPT model to generate movie recommendations
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      query +
      ". Only give me names of 5 Movies, make it as comma separated like the example results given ahead. Example Result: Badshah, Gadar, Don, Phir Hera Pheri, Golmaal";

    try {
      // Fetch the result from the Gemini model
      const GeminiResult = await model.generateContent(gptQuery);

      // Check if the response contains valid movie recommendations
      if (
        GeminiResult?.response?.candidates &&
        GeminiResult.response.candidates.length > 0 &&
        GeminiResult.response.candidates[0]?.content?.parts[0]?.text
      ) {
        // We get the movie names as a comma-separated string
        const movieList =
          GeminiResult.response.candidates[0]?.content?.parts[0]?.text.split(
            ","
          );
        // Log the movie recommendations (comma-separated list)
        console.log("Movie recommendations:", movieList);

        // For each movie in the list, search the TMDB API for details about the movie
        // It's an async operation, so it returns a list of promises
        const promiseArray = movieList.map((movie) => searchMovieTMDB(movie));
        // Use Promise.all to wait for all promises to resolve
        const tmdbResults = await Promise.all(promiseArray);
        // Once all promises are resolved, log the results from the TMDB API
        // console.log(tmdbResults);
        // Pushing data in GPT Movie Results
        dispatch(
          addGPTMovieResult({
            movieNames: movieList,
            movieResults: tmdbResults,
          })
        );
      } else {
        // If no movie recommendations are found, log an error
        console.error("No movie recommendations found.");
        // Optionally, display a message to the user indicating no results were found
      }
    } catch (error) {
      // If an error occurs during the content generation, log the error
      console.error("Error generating content:", error);
      // Optionally, you can display a friendly error message to the user
    }
  };

  return (
    <div className="flex justify-center pt-[10%] ">
      {/* Form for search bar with input box and button */}
      <form
        className="grid grid-cols-12 gap-0 w-full max-w-lg bg-white p-4 rounded-lg shadow-md"
        onSubmit={(e) => e.preventDefault()} // Prevent the default form submission behavior
      >
        {/* Input box for entering search text */}
        <input
          ref={SearchText}
          type="text"
          className="col-span-9 p-3 border border-gray-300 rounded-l-lg outline-none text-gray-700 placeholder-gray-400"
          placeholder={lang[langKey].gptSearchPlaceholder} // Dynamic placeholder based on language key
        />
        {/* Button to trigger GPT search */}
        <button
          type="submit"
          className="col-span-3 bg-red-700 text-white rounded-r-lg hover:bg-red-800 transition-colors py-3 font-medium"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}{" "}
          {/* Dynamic button text based on language key */}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
