import React from 'react';
import useMoviesTrailer from '../hooks/useMoviesTrailer';

const VideoBackground = ({ movieId }) => {
  // Use custom hook to get the trailer video
  const trailerVideo = useMoviesTrailer(movieId);

  return (
    // Render the YouTube trailer using iframe if the trailer video is available
    <div className='w-screen'>
      {trailerVideo ? (
        <iframe
          className='w-screen aspect-video'
          src={"https://www.youtube.com/embed/"+trailerVideo.key+"?&autoplay=1&mute=1&controls=0" } // Embedding YouTube video using the video key
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          
        ></iframe>
      ) : (
        <p>Loading trailer...</p> // Display loading message while trailer is being fetched
      )}
    </div>
  );
};

export default VideoBackground;
