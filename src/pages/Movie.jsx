import axios from "axios";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const [episodes, setEpisodes] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        "https://colorful-fish-handbag.cyclic.app//chainsawman/v1/getMovie"
      );
      setEpisodes(res.data.movie);
    };

    getMovies();
  }, []);

  return (
    <>
      <div className="mt-28 container">
        <div className="w-full flex justify-center my-20">
          <img
            src="https://chainsawman.dog/assets/img/common/nav/nav_movie.svg"
            alt="comic"
            className="md:w-[350px] w-60 opacity-100 rounded"
          />
        </div>
        <div className="media-container">
          {episodes.map((episode) => (
            <div
              className="media relative flex justify-center"
              key={episode._id}
              onClick={() => setMovie(episode.movies)}
            >
              <h2 className="absolute text-center text-xl font-bold shadow-black textShadows">{episode.title}</h2>
              {episode.posters ? (
                <img src={episode.posters} alt={episode._id} loading="lazy" />
              ) : (
                <iframe
                  title=""
                  src={episode.movies}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="100%"
                  className="aspect-video xl:h-[550px] md:mt-0 -mt-8"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        <div
          className="popup-media"
          style={{ display: movie ? "block" : "none" }}
        >
          {movie && (
            <>
              <iframe
                title=""
                src={movie}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                width="100%"
                height="100%"
                className="aspect-video"
                loading="lazy"
              />
              <button onClick={() => setMovie(null)}>&times;</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
