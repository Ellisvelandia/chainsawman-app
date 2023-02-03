import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [mains, setMains] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(
        "https://colorful-fish-handbag.cyclic.app/chainsawman/v1/getCharacter"
      );
      setMains(res.data.characters);
    };
    getCharacters();
  }, []);

  return (
    <>
      <div className="h-auto flex flex-col  w-full justify-center mx-auto items-center xl:mt-20 lg:mt-48 md:mt-64 mt-72 px-4">
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
                  className="h-full w-full flex lg:flex-row flex-col space-y-2 items-center justify-center md:p-20 md:mt-4"
                  key={character._id}
                >
                  <h2 className="text-3xl font-extrabold md:my-4 my-6 lg:rotate-90 tracking-widest">
                    {character.name}
                  </h2>
                  <div className="flex w-auto flex-col">
                    <img
                      src={character.image}
                      alt="image"
                      className="h-[450px]"
                      loading="lazy"
                    />
                    <p>{character.kanji}</p>
                  </div>
                  <div className="flex flex-col lg:w-1/2 px-4">
                    <div className="flex my-4 w-full text-center justify-center">
                      Profession-<span>{character.Profession}</span>
                    </div>
                    <span className="text-justify w-full md:text-3xl text-lg">
                      {character.description}
                    </span>
                    <p className="mt-2">Age-{character.age}</p>
                    <div className="flex  w-full text-center justify-center">
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
