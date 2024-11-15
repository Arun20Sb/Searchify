import { useEffect } from "react";
import { useResults } from "../context/useResults";
import Loading from "./Loading";

// Function to generate a random emoji
const getRandomEmoji = () => {
  const emojis = ["🙂", "😊", "😂", "😎", "🤔", "🚀", "✨", "🌍", "🌟"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

function Articles() {
  const { results, getResults, isLoading } = useResults();

  // useEffect(() => {
  //   getResults("/search?q=JavaScript&num=20");
  //   // Adding a comment to suppress unnecessary dependency warnings
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []); // Only run once on mount

  if (isLoading) {
    console.log("Loading..."); // Debugging
    return <Loading />;
  }

  console.log(results);

  return (
    <div className="flex flex-wrap justify-between gap-8 px-8 py-8 md:px-56">
      {/* // results? -> results is not null */}
      {results?.data?.map(({ url, title, snippet }, index) => (
        <div key={index} className="md:w-2/5 w-full border-b-2 border-gray-600">
          <div>
            <a href={url} target="_blank" rel="noreferrer">
              <p className="text-sm mb-1">
                <span className="mr-2">{getRandomEmoji()}</span>
                {/* Random Emoji */}
                <span className="text-gray-500 hover:underline hover:uppercase transition-all ease-out duration-200">
                  {url.length > 30 ? url.substring(0, 20) : url}
                </span>
              </p>

              <p className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-all ease-out duration-200">
                {title}
              </p>
            </a>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {snippet.length > 140 ? `${snippet.substring(0, 120)}...` : snippet}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Articles;
