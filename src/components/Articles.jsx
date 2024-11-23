import { useUnifiedContext } from "../context/useUnifiedContext";
import Loading from "./Loading";

// Function to generate a random emoji
const getRandomEmoji = () => {
  const emojis = ["🖥️", "🕸️", "😂", "😎", "🤔", "🚀", "✨", "🌍", "🍁"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

function Articles() {
  const { results, isLoading, searchTerm } = useUnifiedContext();

  if (isLoading.articles) return <Loading />;
  if (results.articles?.error) return <p>Error: {results.articles.error}</p>;

  // Handle empty results state safely
  const articles = results.articles?.results || []; // Default to empty array if results.articles.data is undefined

  // If no articles found, show a message
  if (articles.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No articles found for &quot;{searchTerm}&quot;. Actually Api limit is
        over for today 😭🥲
      </p>
    );
  }

  return (
    <div className="flex flex-wrap justify-between gap-8 px-8 py-8 md:px-56">
      {articles.map(({ url, title, description }, index) => (
        <div
          key={index}
          className="md:w-2/5 w-full border-b-2 border-gray-600 pb-4"
        >
          <div>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Read article: ${title}`}
            >
              <p className="text-sm mb-1 flex items-center">
                <span className="mr-2">{getRandomEmoji()}</span>
                <span className="text-gray-500 hover:underline hover:uppercase transition-all ease-out duration-200">
                  {url.length > 30 ? `${url.substring(0, 30)}...` : url}
                </span>
              </p>
              <p className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all ease-out duration-200">
                {title || "Untitled Article"}
              </p>
            </a>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {description
              ? description.length > 120
                ? `${description.substring(0, 120)}...`
                : description
              : "No description available"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Articles;
