// useNewsResult.js
import { useState } from "react";

const newsUrl = "https://real-time-news-data.p.rapidapi.com";

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
          "x-rapidapi-key": "0ee4666cbamsh1387ec3008a8e29p14b838jsn23f5dea659b7",
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