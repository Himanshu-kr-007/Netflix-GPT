import { GoogleGenerativeAI } from "@google/generative-ai"; // Ensure this is the correct library
import { GeminiAI_KEY } from "./constants"; // Use the appropriate API key

const genAI = new GoogleGenerativeAI({
  apiKey: GeminiAI_KEY, // Pass the API key
});

export default genAI;
