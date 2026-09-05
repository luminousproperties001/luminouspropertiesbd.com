import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Maximize,
  Phone,
  MessageCircle,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  const [activeImage, setActiveImage] = useState(
    project?.image || ""
  );

  // Project না পাওয়া গেলে
  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px]">

        <img
          src={activeImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-end pb-12">
          <div className="text-white">

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 mb-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg hover:bg-white/30"
            >
              <ArrowLeft size={18} />
              All Projects
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-5 text-lg">
              <span className="flex items-center gap-2">
                <MapPin size={20} />
                {project.location}
              </span>

              <span className="flex items-center gap-2">
                <Maximize size={20} />
                {project.area}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left */}
            <div className="lg:col-span-2">

              {/* Gallery */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">

                <img
                  src={activeImage}
                  alt={project.title}
                  className="w-full h-[450px] object-cover"
                />

                <div className="p-4 grid grid-cols-3 md:grid-cols-4 gap-4">

                  {project.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(image)}
                      className={`rounded-xl overflow-hidden border-4 ${
                        activeImage === image
                          ? "border-green-600"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-24 object-cover hover:scale-105 transition"
                      />
                    </button>
                  ))}

                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

                <h2 className="text-3xl font-bold text-green-700 mb-5">
                  About {project.title}
                </h2>

                <p className="text-gray-600 text-lg leading-8">
                  {project.description}
                </p>

              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl shadow-lg p-8">

                <h2 className="text-3xl font-bold text-green-700 mb-6">
                  Project Facilities
                </h2>

                <div className="grid md:grid-cols-2 gap-5">

                  {project.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        className="text-green-600"
                        size={22}
                      />

                      <span className="text-gray-700">
                        {detail}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* Right Sidebar */}
            <div>

              <div className="bg-white rounded-2xl shadow-xl p-7 sticky top-24">

                <p className="text-gray-500 mb-2">
                  Starting Price
                </p>

                <h2 className="text-3xl font-bold text-green-700 mb-8">
                  {project.price}
                </h2>

                <div className="space-y-5 border-t border-gray-200 pt-6">

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Location
                    </span>

                    <span className="font-semibold">
                      {project.location}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">
                      Plot Area
                    </span>

                    <span className="font-semibold">
                      {project.area}
                    </span>
                  </div>

                </div>

                <div className="mt-8 space-y-3">

                  <a
                    href="tel:+8801773035945"
                    className="w-full flex justify-center items-center gap-2 bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/8801773035945"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}