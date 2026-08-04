import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "yet-another-react-lightbox/styles.css";

export default function ImageSlider({ images, title }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={image}
              alt={`${title} ${i + 1}`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="w-full h-[550px] object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-3 gap-3 mt-5">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt=""
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="h-28 w-full object-cover rounded-xl cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
      />
    </>
  );
}