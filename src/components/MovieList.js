import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl py-2 text-white font-bold">{title}</h1>
      <div className="relative overflow-hidden"> {/* Container for animation */}
        <div className="flex animate-scroll whitespace-nowrap hover:animate-paused"> {/* Flex container for scrolling animation */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
