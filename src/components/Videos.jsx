import { useEffect } from "react";
import useVideosResult from "./VideosResult";
import Loading from "./Loading";

function Videos() {
  const { videoResults, isLoading, error, getVideos } = useVideosResult();

  useEffect(() => {
    getVideos("/search?query=elon");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8">
      {videoResults?.data?.map(
        (
          {
            title,
            description,
            channelTitle,
            channelThumbnail,
            thumbnail,
            videoId,
          },
          index
        ) => {
          const thumbnailUrl = thumbnail?.url
            ? thumbnail.url
            : `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;

          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg md:w-1/3 w-full"
            >
              {/* Video Thumbnail */}
              <img
                src={thumbnailUrl}
                alt={title || "Video Thumbnail"}
                className="w-full h-48 object-cover"
              />

              {/* Video Details */}
              <div className="p-4">
                {/* Video Title */}
                <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2 hover:underline transition-all duration-200 ease-out">
                  <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
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
      )}
    </div>
  );
}

export default Videos;
