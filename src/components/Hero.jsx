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
    <section className="relative h-screen">

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
              <div className="absolute inset-0 flex items-center justify-center px-6">

                <div className="text-center text-white max-w-4xl">

                  {/* Logo */}
                  <motion.img
  src={logo}
  alt="Logo"
  className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
/>

                  {/* Heading */}
                  <motion.h1
  initial={{ y: 80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  className="text-5xl md:text-7xl font-bold mb-6"
>
  Build Your Dream Property
</motion.h1>

                  {/* Subtitle */}
                  <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="text-xl md:text-2xl mb-10"
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