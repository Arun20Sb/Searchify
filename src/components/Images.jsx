import { useEffect } from "react";
import useImageResults from "./ImageResults";
import Loading from "./Loading";
import { useResults } from "../context/useResults";

function Images() {
  const { query } = useResults();

  const { imageResults, isLoading, getImages } = useImageResults();

  useEffect(() => {
    getImages(`${query}`); // Fix the query to be a string, not a URL
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 px-4 py-8">
      {imageResults?.map(({ id, src, photographer, alt }) => (
        <div
          key={id}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg md:w-2/12 w-full overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={src.original} // Ensure the image source is accessed correctly
            alt={alt || "A beautiful scenery"}
            className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition-all duration-300">
              <a href={src.original} target="_blank" rel="noopener noreferrer">
                {alt || "View Image"}
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Photo by{" "}
              <span className="text-blue-500 hover:underline">
                {photographer}
              </span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              <a
                href={src.original}
                className="hover:text-blue-600"
                target="_blank"
              >
                View full photo
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Images;
