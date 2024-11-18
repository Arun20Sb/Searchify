// apiConfig.js
import { createClient } from "pexels";

export const pixelsClient = createClient(import.meta.env.VITE_PEXELS_API_KEY);

export const API_CONFIG = {
  articles: {
    baseURL: "https://real-time-web-search.p.rapidapi.com",
    host: "real-time-web-search.p.rapidapi.com",
    apiKey: import.meta.env.VITE_SEARCH_API_KEY,
  },
  videos: {
    baseURL: "https://yt-api.p.rapidapi.com",
    host: "yt-api.p.rapidapi.com",
    apiKey: import.meta.env.VITE_VIDEOS_API_KEY,
  },
  news: {
    baseURL: "https://real-time-news-data.p.rapidapi.com",
    host: "real-time-news-data.p.rapidapi.com",
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
  },
};
