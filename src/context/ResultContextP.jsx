import { createContext, useState } from "react";

const ResultContext = createContext();

const baseURL = "https://real-time-web-search.p.rapidapi.com";

function ResultContextP({ children }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const getResults = async (type) => {
    try {
      if (!type || typeof type !== "string") {
        throw new Error("Invalid endpoint type specified.");
      }

      setIsLoading(true);
      setError(null);

      const response = await fetch(`${baseURL}${type}`, {
        method: "GET",
        headers: {
          'x-rapidapi-key': '0ee4666cbamsh1387ec3008a8e29p14b838jsn23f5dea659b7',
          'x-rapidapi-host': 'real-time-web-search.p.rapidapi.com'
        }
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
      }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export { ResultContextP, ResultContext };
