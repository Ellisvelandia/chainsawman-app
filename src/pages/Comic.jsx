import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Comic = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      const res = await axios.get(
        "https://chainsawman-api.onrender.com/chainsawman/v1/getComic"
      );
      setComics(res.data.comic);
    };
    getComics();
  }, []);

  return (
    <>
      <div className="h-auto w-auto md:mt-8 mt-20 px-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {comics.map((comic) => (
            <SwiperSlide key={comic._id}>
              <div className="hover:scale-105 xl:w-[390px] lg:w-[290px] md:w-[220px] sm:w-[140px] w-[125px] mr-6  justify-center flex">
                <div className="relative flex h-full w-full">
                  <a href={comic.link} target="_blank">
                    <img
                      src={comic.comic}
                      alt="comics"
                      className="object-fill opacity-70 hover:opacity-100"
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
