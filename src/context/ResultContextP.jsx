import { createContext, useState } from "react";

const ResultContext = createContext();

const apiKey = import.meta.env.VITE_SEARCH_API_KEY;

const baseURL = "https://real-time-web-search.p.rapidapi.com";

function ResultContextP({ children }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("web3");

  const getResults = async (query) => {
    try {
      if (!query || typeof query !== "string") {
        throw new Error("Invalid endpoint query specified.");
      }

      setIsLoading(true);
      setError(null);

      const response = await fetch(`${baseURL}${query}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${apiKey}`,
          "x-rapidapi-host": "real-time-web-search.p.rapidapi.com",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from API.");
      }

      const data = await response.json();
      // console.log(data);

      setResults(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        isLoading,
        searchTerm,
        getResults,
        setSearchTerm,
        error,
        setQuery,
        query,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export { ResultContextP, ResultContext };
