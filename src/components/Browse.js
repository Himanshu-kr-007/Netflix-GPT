import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GPTSearchpage";
import { useSelector } from "react-redux";
import GptSearchPage from "./GPTSearchpage";

const Browse = () => {
  // Access the 'showGptSearch' value from the Redux store using the useSelector hook
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Automatically fetch and store the 'Now Playing' movies data using a custom hook
  useNowPlayingMovies();

  // Fetch and store 'Popular' movies using a custom hook
  usePopularMovies();

  // Fetch and store 'Top Rated' movies using a custom hook
  useTopRatedMovies();

  // Fetch and store 'Upcoming' movies using a custom hook
  useUpcomingMovies();

  return (
    <div>
      <Header />

      {/* Conditionally render the GPT Search component if showGptSearch is true */}
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          {/* If GPT Search is not visible, render Main and Secondary containers */}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;