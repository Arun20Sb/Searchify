// useNewsResult.js
import { useState } from "react";

const newsUrl = "https://real-time-news-data.p.rapidapi.com";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

function useNewsResult() {
  const [newsResults, setNewsResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNews = async (type) => {
    try {
      if (!type || typeof type !== "string") {
        throw new Error("Invalid endpoint type specified.");
      }
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${newsUrl}${type}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${apiKey}`,
          "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch data from API.");

      const data = await response.json();
      setNewsResults(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Return the state variables and function
  return { newsResults, isLoading, error, getNews };
}

export default useNewsResult;
