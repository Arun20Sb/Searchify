import { useState } from "react";
import SearchAnything_Context from "./Search_CreateContext"; // Import the context
import { pixelsClient, API_CONFIG } from "./apiConfig";

function UnifiedContextP({ children }) {
  const [results, setResults] = useState({
    articles: [],
    images: [],
    videos: [],
    news: [],
  });

  const [isLoading, setIsLoading] = useState({
    articles: false,
    images: false,
    videos: false,
    news: false,
  });

  const [error, setError] = useState({
    articles: null,
    images: null,
    videos: null,
    news: null,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const getApiResults = async (type, query) => {
    if (!API_CONFIG[type]) {
      throw new Error(`Invalid search type: ${type}`);
    }

    try {
      if (!query || typeof query !== "string") {
        throw new Error("Invalid query specified.");
      }

      setIsLoading((prev) => ({ ...prev, [type]: true }));
      setError((prev) => ({ ...prev, [type]: null }));

      const { baseURL, host, apiKey } = API_CONFIG[type];
      const response = await fetch(`${baseURL}${query}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": host,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch ${type} data from API.`);
      }

      const data = await response.json();
      console.log(data);
      setResults((prev) => ({ ...prev, [type]: data }));
    } catch (error) {
      console.error(`Error fetching ${type}: `, error);
      setError((prev) => ({ ...prev, [type]: error.message }));
    } finally {
      setIsLoading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const handleImageSearch = async (query) => {
    try {
      if (!query || typeof query !== "string") {
        throw new Error("Invalid query specified.");
      }

      setIsLoading((prev) => ({ ...prev, images: true }));
      setError((prev) => ({ ...prev, images: null }));

      const photos = await pixelsClient.photos.search({ query, per_page: 20 });

      setResults((prev) => ({
        ...prev,
        images: photos.photos,
      }));
    } catch (error) {
      console.error("Error fetching images: ", error);
      setError((prev) => ({
        ...prev,
        images: "Failed to fetch images",
      }));
    } finally {
      setIsLoading((prev) => ({ ...prev, images: false }));
    }
  };

  const getArticles = (query) => getApiResults("articles", query);
  const getVideos = (query) => getApiResults("videos", query);
  const getNews = (query) => getApiResults("news", query);
  const getImages = handleImageSearch;

  return (
    <SearchAnything_Context.Provider
      value={{
        results,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        getArticles,
        getVideos,
        getNews,
        getImages,
      }}
    >
      {children}
    </SearchAnything_Context.Provider>
  );
}

export default UnifiedContextP;
