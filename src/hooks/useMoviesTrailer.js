import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

// Custom Hook to fetch and manage movie trailers
const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // Fetch the trailer video and update the Redux store
  const getMovieVideos = async () => {
    try {
      // Fetch movie videos from TMDB API
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_Options
      );

      // Convert response data to JSON
      const data = await response.json();

      // Filter to find trailer videos
      const filterData = data.results.filter(
        (video) => video.type === "Trailer"
      );

      // Select the first trailer or fallback to the first available video
      const trailer = filterData.length ? filterData[0] : data.results[0];

      // Dispatch the trailer video to the Redux store
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  // useEffect to fetch the trailer video when movieId changes
  useEffect(() => {
    if (movieId) {
     !trailerVideo && getMovieVideos();
    }
  }, [movieId, dispatch]); // Adding dispatch to the dependency array

  return trailerVideo;
};

export default useMoviesTrailer;
