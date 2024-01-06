import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   "iso_639_1": "en",
//   "iso_3166_1": "US",
//   "name": "Official Trailer",
//   "key": "fhr3MzT6exg",
//   "site": "YouTube",
//   "size": 1080,
//   "type": "Trailer",
//   "official": true,
//   "published_at": "2023-11-12T21:25:00.000Z",
//   "id": "655146100816c700abba6517"
// },
