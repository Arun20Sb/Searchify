import { useResults } from "../context/useResults";

function Search() {
  const { query, setQuery } = useResults();

  return (
    <div className="flex justify-center items-center p-4">
      🔍
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Discover something new... Search anything here!"
        className="w-full md:w-1/2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mx-3"
      />
    </div>
  );
}

export default Search;
