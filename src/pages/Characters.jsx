import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [mains, setMains] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(
        "https://chainsawman-api.onrender.com/chainsawman/v1/getCharacter"
      );
      setMains(res.data.characters);
      console.log(res.data.characters);
    };
    getCharacters();
  }, []);

  return (
    <>
      <div className="h-full flex flex-col  w-full justify-center mx-auto items-center xl:mt-20 lg:mt-48 md:mt-64 mt-72">
        <div className="relative w-full flex  bg-[#000]">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={8}
            infiniteLoop={true}
            showStatus={false}
            className="w-full"
          >
            {mains.map((character) => {
              return (
                <div
                  className="h-auto w-full flex md:flex-row flex-col space-y-2 items-center justify-center md:p-20 md:mt-4"
                  key={character._id}
                >
                  <div className="flex w-auto flex-col">
                    <h2 className="text-3xl font-extrabold md:my-4 my-6">
                      {character.name}
                    </h2>
                    <img
                      src={character.image}
                      alt="image"
                      className="h-[450px] w-[150px]"
                      loading="lazy"
                    />
                    <p>{character.kanji}</p>
                  </div>
                  <div className="flex flex-col md:w-1/2 px-4">
                    <div className="flex my-4 w-full text-center justify-center">
                      Profession-<span>{character.Profession}</span>
                    </div>
                    <span className="text-justify w-full md:text-3xl text-lg">
                      {character.description}
                    </span>
                    <div className="flex my-4 w-full text-center justify-center">
                      specie-<span>{character.specie}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Characters;
