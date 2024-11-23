export const API_CONFIG = {
  articles: {
    baseURL: "https://google-search74.p.rapidapi.com",
    host: "google-search74.p.rapidapi.com",
    apiKey: import.meta.env.VITE_SEARCH_API_KEY,
  },
  images: {
    baseURL: "https://google-search72.p.rapidapi.com",
    host: "google-search72.p.rapidapi.com",
    apiKey: import.meta.env.VITE_IMAGE_API_KEY,
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
