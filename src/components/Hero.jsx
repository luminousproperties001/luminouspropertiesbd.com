import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../assets/logo.jpg";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";

export default function Hero() {
  const slides = [slide1, slide2, slide3];

  return (
    <section className="relative min-h full bg-gray-100 pt-10">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

              {/* Hero Content */}
              <div className="absolute inset-0 flex items-start justify-center px-6 pt-20 md:pt-28">

                <div className="text-center text-white max-w-4xl">

                  {/* Logo */}
                  <motion.img
  src={logo}
  alt="Logo"
  className="w-35 h-22 rounded-full mx-auto mb-0 border-6 border-green shadow-2xl"
  initial={{ opacity: 0, scale: 7.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
/>

                  {/* Heading */}
                  <motion.h1
  initial={{ y: 80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-3xl font-bold mb-6"
>
  Build Your Dream Property with Luminous
</motion.h1>

                  {/* Subtitle */}
                  <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="text-xl md:text-1xl mb-10"
>
  Trusted Land Development Company in Rajshahi
</motion.p>

                  {/* Buttons */}
                  <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="flex flex-col md:flex-row justify-center gap-4"
>

  <button className="bg-green-700 hover:bg-green-800 px-8 py-3 rounded-lg">
    View Projects
  </button>

  <button className="bg-white text-green-700 hover:bg-gray-200 px-8 py-3 rounded-lg">
    Contact Us
  </button>

</motion.div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">

  <ChevronDown size={40} />

</div>

<div className="grid grid-cols-3 gap-8 mt-16 text-center">

  <div>
    <h2 className="text-4xl font-bold">10+</h2>
    <p>Projects</p>
  </div>

  <div>
    <h2 className="text-4xl font-bold">500+</h2>
    <p>Happy Clients</p>
  </div>

  <div>
    <h2 className="text-4xl font-bold">15+</h2>
    <p>Years Experience</p>
  </div>

</div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}