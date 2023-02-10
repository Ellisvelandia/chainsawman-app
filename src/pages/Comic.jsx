import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

const Comic = () => {
  const [comics, setComics] = useState([]);

  const [screenSize, setScreenSize] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.screen.width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  useEffect(() => {
    const getComics = async () => {
      const res = await axios.get(
        "https://colorful-fish-handbag.cyclic.app/chainsawman/v1/getComic"
      );
      setComics(res.data.comic);
    };
    getComics();
  }, []);

  return (
    <>
      <div className="h-[calc(100%+50rem)] w-full md:my-16 my-24 px-1">
        <div className="w-full flex justify-center my-20">
          <img
            src="https://chainsawman.dog/assets/img/common/nav/nav_comics.svg"
            alt="comic"
            className="md:w-[350px] w-60 opacity-100 rounded"
          />
        </div>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Keyboard,
          ]}
          slidesPerView={
            screenSize < 768
              ? 1
              : screenSize >= 768 && screenSize < 1024
              ? 2
              : 3
          }
          spaceBetween={12}
          navigation
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {comics.map((comic) => (
            <SwiperSlide key={comic._id}>
              <div className="hover:scale-105 w-full gap-6 h-full object-fill mt-10 justify-center flex items-center">
                <div className="relative flex h-full w-full lg:px-4 px-1">
                  <a href={comic.link} target="_blank">
                    <img
                      src={comic.comic}
                      alt="comics"
                      className="object-fill lg:opacity-70 lg:hover:opacity-100 h-[650px]"
                      loading="lazy"
                    />
                  </a>
                  <img
                    src={comic.num}
                    alt="number/comic"
                    className="absolute top-2 md:h-56 h-56 tracking-widest"
                    loading="lazy"
                    />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Comic;
