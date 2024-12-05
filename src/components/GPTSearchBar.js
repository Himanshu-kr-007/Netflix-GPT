import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)
  
  return (
    <div className="flex justify-center pt-[10%] ">
    <form className="grid grid-cols-12 gap-0 w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          className="col-span-9 p-3 border border-gray-300 rounded-l-lg outline-none text-gray-700 placeholder-gray-400"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="submit"
          className="col-span-3 bg-red-700 text-white rounded-r-lg hover:bg-red-800 transition-colors py-3 font-medium"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
