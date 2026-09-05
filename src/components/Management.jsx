import { motion } from "framer-motion";

import chairman from "../assets/chairman.jpg";
import md from "../assets/md.jpg";
import director1 from "../assets/director1.jpg";
import director2 from "../assets/director2.jpg";
import director3 from "../assets/director3.jpg";
import director4 from "../assets/director4.jpg";
import director5 from "../assets/director5.jpg";
import director6 from "../assets/director6.jpg";

const directors = [
  {
    name: "MR. DIRECTOR",
    position: "Director",
    image: director1,
  },
  {
    name: "MR. DIRECTOR",
    position: "Director",
    image: director2,
  },
  {
    name: "MR MD DIRECTOR",
    position: "Director",
    image: director3,
  },
  {
    name: "MR. DIRECTOR",
    position: "Director",
    image: director4,
  },
  {
    name: "MR. DIRECTOR",
    position: "Director",
    image: director5,
  },
  {
    name: "MR. DIRECTOR",
    position: "Director",
    image: director6,
  },
];

export default function Management() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-700">
            Board of Directors
          </h2>

          <p className="text-gray-600 mt-3">
            Organizational Structure of Luminous Properties Ltd.
          </p>
        </motion.div>

        {/* Chairman */}

        <div className="flex justify-center">

          <PersonCard
            image={chairman}
            name="MR CHAIRMAN"
            position="Chairman"
          />

        </div>

        {/* Line */}

        <div className="flex justify-center">
          <div className="w-1 h-10 bg-green-400"></div>
        </div>

        {/* MD */}

        <div className="flex justify-center mb-10">

          <PersonCard
            image={md}
            name="MR MANAGING DIRECTOR"
            position="Managing Director"
          />

        </div>

        {/* Line */}

        <div className="flex justify-center">
          <div className="w-[80%] h-1 bg-green-300 rounded-full mb-10"></div>
        </div>

        {/* Directors */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {directors.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <PersonCard
                image={item.image}
                name={item.name}
                position={item.position}
              />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

function PersonCard({ image, name, position }) {
  return (
    <div className="flex flex-col items-center">

      <img
        src={image}
        alt={name}
        className="
        w-20
        h-20
        rounded-2xl
        border-4
        border-green-500
        object-cover
        shadow-lg
        hover:scale-105
        transition
        "
      />

      <h3 className="mt-3 text-[14px] font-bold text-center leading-5">
        {name}
      </h3>

      <p className="text-green-700 text-sm font-medium">
        {position}
      </p>

    </div>
  );
}