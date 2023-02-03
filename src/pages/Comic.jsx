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
      <div className="h-[calc(100%+50rem)] w-auto md:mt-8 mt-20 px-4">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Keyboard,
          ]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          keyboard={{ enabled: true }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {comics.map((comic) => (
            <SwiperSlide key={comic._id}>
              <div
                className="hover:scale-105 xl:w-[400px] lg:w-[310px] md:w-[250px] sm:w-[200px] w-[calc(100%+2.5rem)]
                      h-full object-cover mr-6  justify-center flex"
              >
                <div className="relative flex h-full w-full">
                  <a href={comic.link} target="_blank">
                    <img
                      src={comic.comic}
                      alt="comics"
                      className="object-fill lg:opacity-70 lg:hover:opacity-100"
                    />
                  </a>
                  <img
                    src={comic.num}
                    alt="number/comic"
                    className="absolute top-2 md:h-56 h-24 tracking-widest"
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
