import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  // Fetch Data From TMDB API & update Store

  // Use Redux dispatch to send actions to the Redux store
  const dispatch = useDispatch();

  // Define an asynchronous function to fetch "Now Playing" movies from TMDB
  const getTopRatedMovies = async () => {
    // Fetch the movie data from the TMDB API using the "now_playing" endpoint
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_Options // This object should contain the necessary API key and other options
    );
    // Convert the response data to JSON format
    const json = await data.json();
    // Log the JSON response to the console to inspect the movie data
    // console.log(json.results);

    // Dispatch the 'addNowPlayingMovies' action from moviesSlice with the movie data
    // 'dispatch' sends the action to the Redux store, updating the 'nowPlayingMovies' state
    dispatch(addTopRatedMovies(json.results));
  };

  // useEffect hook to trigger the API call when the component is mounted
  useEffect(
    () => {
      // Call the getTopRatedMovies function to fetch the data
      getTopRatedMovies();
    },
    [] // Empty dependency array ensures the API call is made only once
    // when the component is mounted (similar to componentDidMount)
  );
};
export default useTopRatedMovies;
