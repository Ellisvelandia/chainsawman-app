import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    const getPoster = async () => {
      const res = await axios.get(
        "https://chainsawman-api.onrender.com/chainsawman/v1/getPoster"
      );
      setPosters(res.data.poster);
      console.log(res.data.poster);
    };
    getPoster();
  }, []);

  return (
    <div className="h-auto flex flex-col space-y-8 items-center justify-center bg-hero">
      {posters.map((poster) => (
        <div
          key={poster._id}
          className="relative grid items-center justify-items-center h-auto textShadows"
        >
          <img src={poster.logo} alt="logo" className="md:h-80 h-48 aspect-auto mt-28" />
          <span className="md:text-center text-justify leading-tight md:w-4/5 mx-auto md:text-3xl text-lg px-4 font-bold text-stone-100">
            {poster.sypnosis}
          </span>
          <div className="w-full">
            <img src={poster.poster} alt="poster" className="w-full opacity-40 -z-10 logo" />
            <iframe
              title=""
              src={poster.trailer}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="100%"
              className="aspect-video xl:h-[550px] md:mt-0 -mt-4"
            />
          </div>
          <div className="flex text-center gap-8 my-4 md:text-2xl text-base text-stone-100">
            <div>
              <p>Author</p>
              <span>{poster.Author}</span>
            </div>
            <div>
              <p>Genre</p>
              <span>{poster.Genre}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
