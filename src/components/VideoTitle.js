import React from "react";
import { FiPlay } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-24 md:px-24 text-white space-y-6 bg-gradient-to-r from-black">
      {/* Title styling: bold, large size for a cinematic look */}
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>

      {/* Overview styling: smaller text for description */}
      <p className="text-lg md:text-xl max-w-4xl font-medium text-gray-300">
        {overview}
      </p>

      {/* Buttons: Netflix-style buttons with hover effects */}
      <div className="flex space-x-4">
        {/* Play Button */}
        <button className="flex items-center bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out">
          <FiPlay className="mr-2 text-xl" />
          Play
        </button>
        <button className="flex items-center bg-gray-600 bg-opacity-70 text-white font-bold py-2 px-6 rounded-md hover:bg-opacity-100 hover:bg-gray-600 transition duration-300 ease-in-out">
          <IoIosInformationCircleOutline className="mr-2 text-xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
