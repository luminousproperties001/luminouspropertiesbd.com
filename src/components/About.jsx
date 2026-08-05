import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section className="py-10 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.img
          src={aboutImg}
          alt="About"
          className="rounded-2xl shadow-2xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-5xl font-bold text-green-700 mb-6">
            About Luminous Properties
          </h2>

          <p className="text-lg text-gray-600 leading-9 mb-8">
            Luminous Properties Ltd. is one of the trusted land development
            companies in Rajshahi. We provide secure investment opportunities,
            modern residential projects, and excellent customer service.
          </p>

          <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}