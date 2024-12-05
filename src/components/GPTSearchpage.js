import React from "react";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import { NetflixBackgrounImage } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={NetflixBackgrounImage}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
