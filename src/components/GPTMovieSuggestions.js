import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import GPTMovieResponse from "./GPTMovieResponse";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-6 m-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <GPTMovieResponse/>
      {/* <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            // title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div> */}
    </div>
  );
};

export default GPTMovieSuggestions;
