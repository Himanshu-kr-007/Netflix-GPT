import React from "react";
import { useSelector } from "react-redux"; 
// Import 'useSelector' from Redux to access the Redux store's state

import VideoTitle from "./VideoTitle"; 
// Import the 'VideoTitle' component that will display the movie title and overview

import VideoBackground from "./VideoBackground"; 
// Import the 'VideoBackground' component that will handle the video background

const MainContainer = () => {
  // Use 'useSelector' to access the 'nowPlayingMovies' from the Redux store
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  // If there are no movies in the store (e.g., initial load), return early
  // This prevents any errors by ensuring we only proceed when movies are available
  if (!movies) return;

  // Select the first movie from the 'nowPlayingMovies' list to be displayed as the main movie
  const mainMovies = movies[0];

  // Destructure 'original_title' and 'overview' from the main movie object
  const { original_title, overview, id } = mainMovies;

  return (
    // Return JSX for the main container
    <div>
      {/* Pass the movie title and overview as props to the VideoTitle component */}
      <VideoTitle title={original_title} overview={overview} />
      
      {/* Render the VideoBackground component, which will handle the background video */}
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
