import React from "react"; // Importing React to use JSX
import MovieList from "./MovieList"; // Importing the MovieList component to display movies
import { useSelector } from "react-redux"; // Importing the useSelector hook from Redux to access the store

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          {/*  Now Playing Movies */}
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          {/*  Popular Movies */}
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          {/*  Top Rated Movies */}
          <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
          {/*  UpComing Movies */}
          <MovieList title={"Up Coming"} movies={movies.UpcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
