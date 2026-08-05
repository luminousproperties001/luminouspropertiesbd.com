import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import logo1 from "../assets/logo1.jpg";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-12">

          <Link to="/">
            <img
              src={logo1}
              alt="Logo1"
              className="w-100 h-12 rounded-full border-4 border-green-700 object-cover mb-5"
            />
          </Link>

          <h2 className="text-2xl font-bold text-green-700">
            Explore our latest land development projects and completed works.
          </h2>


        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, i) => (

            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-72 object-cover hover:scale-110 transition duration-500"
              />
            </div>

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