import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Businessman",
    review:
      "Luminous Properties provided excellent service. I am very satisfied with my investment.",
  },
  {
    name: "Nusrat Jahan",
    role: "Teacher",
    review:
      "The booking process was smooth, and the staff were very professional.",
  },
  {
    name: "Imran Hossain",
    role: "Engineer",
    review:
      "One of the best land development companies in Rajshahi. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700 mb-16">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-3xl mx-auto">

                <div className="text-yellow-500 text-2xl mb-4">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-lg text-gray-600 italic mb-8">
                  "{item.review}"
                </p>

                <h3 className="text-2xl font-bold text-green-700">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.role}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}