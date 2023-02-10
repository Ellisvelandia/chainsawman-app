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
      <div className="h-auto flex flex-col  w-full justify-center mx-auto items-center xl:mt-36 lg:mt-80 md:mt-96 mt-64 px-4">
        <div className="w-full flex justify-center my-8">
          <img
            src="https://chainsawman.dog/assets/img/common/nav/nav_chara.svg"
            alt="comic"
            className="md:w-[500px] w-72 opacity-100 rounded"
          />
        </div>
        <div className="relative w-full flex">
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
                  className="h-full w-full flex lg:flex-row flex-col space-y-2 items-center justify-center md:p-20 md:mt-4 mb-14"
                  key={character._id}
                >
                  <h2 className="text-3xl outline-none font-extrabold md:my-4 my-6 lg:rotate-90 tracking-widest">
                    {character.name}
                  </h2>
                  <div className="flex w-auto flex-col">
                    <img
                      src={character.image}
                      alt="image"
                      className="sm:h-[550px] h-[400px]"
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
