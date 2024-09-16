import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 flex-shrink-0 pr-3">
      {/* Container for each movie card with fixed width and padding */}
      <img
        alt="Movie Poster"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default MovieCard;
