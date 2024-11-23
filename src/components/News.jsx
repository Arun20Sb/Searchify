import Loading from "./Loading";
import { useUnifiedContext } from "../context/useUnifiedContext";

function News() {
  const { searchTerm, results, isLoading } = useUnifiedContext();

  if (isLoading?.news) {
    return <Loading />;
  }

  const newsData = results?.news?.data || [];

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8">
      {newsData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No news found for &quot;{searchTerm}&quot;. Actually, the API limit is
          over for today 😭🥲
        </p>
      ) : (
        newsData.map(
          (
            { title, link, snippet, photo_url, source_url, source_favicon_url },
            index
          ) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 md:w-1/4 w-full"
            >
              {photo_url && (
                <img
                  src={photo_url}
                  alt={title.substring(0, 15)}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              )}

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300">
                  <a href={link} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {snippet && snippet.length > 160
                    ? `${snippet.substring(0, 150)}...`
                    : snippet}
                </p>

                <div className="flex items-center mt-4 space-x-2">
                  {source_favicon_url && (
                    <img
                      src={source_favicon_url}
                      alt="Source"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  )}
                  {source_url && (
                    <a
                      href={source_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      {source_url}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default News;
