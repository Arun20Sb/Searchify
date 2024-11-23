import Loading from "./Loading";
import { useUnifiedContext } from "../context/useUnifiedContext";

function Images() {
  const { results, searchTerm, isLoading } = useUnifiedContext();

  if (isLoading?.images) {
    return <Loading />;
  }

  const images = results?.images?.items || [];

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8">
      {images.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No results found for &quot;{searchTerm}&quot;. Actually, the API limit is
          over for today 😭🥲
        </p>
      ) : (
        images.map(({ title, originalImageUrl, contextLink }, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 md:w-1/5 w-full"
          >
            <img
              src={originalImageUrl}
              alt={title || "Image"}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300">
                <a href={contextLink} target="_blank" rel="noreferrer">
                  {title?.length > 40 ? `${title.substring(0, 40)}...` : title}
                </a>
              </h2>

              <div className="flex items-center mt-1 space-x-2">
                <a
                  href={originalImageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  View full photo
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Images;
