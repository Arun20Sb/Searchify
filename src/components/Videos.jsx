import { useEffect } from "react";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { useUnifiedContext } from "../context/useUnifiedContext";

function Videos() {
  const { searchTerm, results, isLoading, getVideos } = useUnifiedContext();

  useEffect(() => {
    if (searchTerm) {
      getVideos(`/search?query=${searchTerm}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]); // Re-fetch when search term changes

  if (isLoading.videos) return <Loading />;
  if (results.videos?.error) return <p>Error: {results.videos.error}</p>;

  const videoData = results.videos?.data || []; // Default to empty array if results.videos or results.videos.data is undefined

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8">
      {videoData.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No videos found for &quot;{searchTerm}&quot;. Actually Api limit is
          over for today 😭🥲
        </p>
      ) : (
        videoData.map(
          (
            { title, description, channelTitle, channelThumbnail, videoId }
          ) => {
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            return (
              <div
                key={videoId}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg md:w-1/4 w-full"
              >
                {/* Video Player */}
                <div className="w-full h-48">
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-t-lg"
                    loading="lazy"
                  />
                </div>

                {/* Video Details */}
                <div className="p-4">
                  {/* Video Title */}
                  <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2 hover:underline transition-all duration-200 ease-out">
                    <a href={videoUrl} target="_blank" rel="noreferrer">
                      {title || "Untitled Video"}
                    </a>
                  </h2>

                  {/* Channel Title */}
                  <div className="flex items-center gap-2 mb-3">
                    {channelThumbnail?.url && (
                      <img
                        src={channelThumbnail.url}
                        alt={channelTitle}
                        className="w-8 h-8 rounded-full"
                        loading="lazy"
                      />
                    )}

                    <span className="text-gray-600 dark:text-gray-400">
                      {channelTitle || "Unknown Channel"}
                    </span>
                  </div>

                  {/* Video Description */}
                  <p className="text-gray-700 dark:text-gray-300">
                    {description
                      ? description.length > 90
                        ? `${description.substring(0, 90)}...`
                        : description
                      : "No description available"}
                  </p>
                </div>
              </div>
            );
          }
        )
      )}
    </div>
  );
}

export default Videos;
