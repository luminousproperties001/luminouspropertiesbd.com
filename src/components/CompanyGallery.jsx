import { motion } from "framer-motion";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

export default function CompanyGallery() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-green-700">
            Project Gallery
          </h2>

          <p className="text-gray-600 mt-4">
            Explore our completed and ongoing projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((img,index)=>(

            <motion.div
              key={index}
              whileHover={{ scale:1.05 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={img}
                className="w-full h-80 object-cover"
                alt=""
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}