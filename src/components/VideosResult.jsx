import { useState } from "react";

const videoUrl = "https://yt-api.p.rapidapi.com";

const apiKey = import.meta.env.VITE_VIDEOS_API_KEY;

function VideosResult() {
  const [videoResults, setVideoResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getVideos = async (type) => {
    try {
      if (!type || typeof type !== "string") {
        throw new Error("Invalid endpoint type specified.");
      }
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${videoUrl}${type}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${apiKey}`,
          "x-rapidapi-host": "yt-api.p.rapidapi.com",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch data from API.");

      const data = await response.json();
      setVideoResults(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { videoResults, isLoading, error, getVideos };
}

export default VideosResult;
