// Netflix Logo
export const NetflixLOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

// Netflix Backgroun Image
export const NetflixBackgrounImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg";

// User Icon
export const AvatarIcon =
  "https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

// TMDB API Call Authorization
export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY ,
  },
};

// Gemini AI KEY
export const GeminiAI_KEY = process.env.REACT_APP_GeminiAI_KEY;

// Image CDN
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

// Supported Language
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];