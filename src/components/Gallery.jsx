import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Project Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((image, i) => (
            <img
              key={i}
              src={image.src}
              alt=""
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="rounded-xl shadow-lg cursor-pointer h-64 w-full object-cover hover:scale-105 transition"
            />
          ))}

        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={index}
        />

      </div>
    </section>
  );
}