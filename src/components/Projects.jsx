import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <h3 className="text-2xl font-bold mb-3">
                {project.name}
              </h3>

              <p className="text-gray-600 mb-2">
                📍 {project.location}
              </p>

              <p className="text-gray-600 mb-2">
                📐 {project.size}
              </p>

              <p className="text-green-700 font-bold mb-4">
                {project.price}
              </p>

              <p className="text-gray-600 mb-6">
                {project.description}
              </p>

              <Link
                to={`/projects/${project.id}`}
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg"
              >
                View Details
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}