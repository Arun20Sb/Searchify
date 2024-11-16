import { useState } from "react";
import { createClient } from "pexels";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

const client = createClient(apiKey);

function useImageResults() {
  const [imageResults, setImageResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImages = async (type) => {
    try {
      if (!type || typeof type !== "string") {
        setError("Invalid search query.");
        return;
      }

      setIsLoading(true);
      setError(null);

      const photos = await client.photos.search({ query: type, per_page: 10 });
      setImageResults(photos.photos); // Make sure this is an array of photo objects
    } catch (error) {
      setError("Failed to fetch images.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { imageResults, isLoading, error, getImages };
}

export default useImageResults;
