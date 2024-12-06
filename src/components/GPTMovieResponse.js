import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GPTMovieResponse = () => {
  const { movieResults } = useSelector((store) => store.gpt);

  // Combine all movie results into a single array
  const allMovies = movieResults.flat();

  return (
    <div className="p-6 m-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Recommended Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allMovies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieResponse;
