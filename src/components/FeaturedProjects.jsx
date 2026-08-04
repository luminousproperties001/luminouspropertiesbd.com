import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Maximize, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-700">
            Featured Projects
          </h2>

          <p className="text-gray-600 mt-4">
            Discover our premium land development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={18} />
                  {project.location}
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-5">
                  <Maximize size={18} />
                  {project.area}
                </div>

                <div className="flex justify-between items-center">

                  <span className="text-green-700 font-bold text-xl">
                    {project.price}
                  </span>

                  <Link
                    to={`/projects/${project.id}`}
                    className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg flex items-center gap-2"
                  >
                    Details
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}