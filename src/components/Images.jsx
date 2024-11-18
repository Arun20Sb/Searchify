import { useEffect } from "react";
import Loading from "./Loading";
import { useUnifiedContext } from "../context/useUnifiedContext";

function Images() {
  const { results, getImages, searchTerm, isLoading, error } =
    useUnifiedContext();

  const query = searchTerm;

  useEffect(() => {
    if (query) {
      getImages(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (isLoading.images) {
    return <Loading />;
  }

  if (error.images) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 mt-8">
        <p>⚠️ Failed to load images. Please try again later.</p>
      </div>
    );
  }

  // Handle empty results state
  const images = results.images || []; // Default to empty array if results.images is undefined

  if (images.length === 0) {
    return (
      <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
        <p className="text-center text-gray-500 mt-10">
          No images found for &quot;{searchTerm}&quot;. Actually Api limit is
          over for today 😭🥲
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 px-4 py-8">
      {images.map(({ id, src, photographer, alt }) => (
        <div
          key={id}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg md:w-2/12 w-full overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={src.large || src.original} // Fallback for image size
            alt={alt || "Image"}
            className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            loading="lazy" // Lazy load images for performance
          />

          <div className="p-4">
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
                rel="noopener noreferrer"
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
