import { useEffect, useRef } from "react";
import { useUnifiedContext } from "../context/useUnifiedContext";

function Search() {
  const { searchTerm, setSearchTerm, darkTheme } = useUnifiedContext();
  const isFirstRender = useRef(true);

  // Set a default value for searchTerm only on the first mount
  useEffect(() => {
    if (isFirstRender.current && !searchTerm) {
      setSearchTerm("web3");
      isFirstRender.current = false; // Mark that the initial render has passed
    }
  }, [searchTerm, setSearchTerm]);

  return (
    <div className="flex justify-center items-center p-3 mt-2 max-sm:mt-4">
      🔍
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Discover something new... Search anything here!"
        className={`w-full md:w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mx-3 specialPlaceholder ${darkTheme ? "text-white bg-gray-800" : "text-black bg-white"}`}
      />
    </div>
  );
}

export default Search;
