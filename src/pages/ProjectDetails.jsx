import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import BookVisitForm from "../components/BookVisitForm";
import ImageSlider from "../components/ImageSlider";
import {
  MapPin,
  Maximize,
  CircleDollarSign,
  CheckCircle,
  Phone,
} from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto py-2 text-center">
        <h1 className="text-5xl font-bold text-red-600">
          Project Not Found
        </h1>

        <Link
          to="/projects"
          className="inline-block mt-8 bg-green-700 text-white px-8 py-3 rounded-lg"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Image */}
        <ImageSlider
  images={project.gallery}
  title={project.title}
        />

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-12 mt-14">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <h1 className="text-5xl font-bold text-green-700 mb-6">
              {project.title}
            </h1>

            <div className="space-y-4 text-lg">

              <p className="flex items-center gap-3">
                <MapPin className="text-green-700" />
                {project.location}
              </p>

              <p className="flex items-center gap-3">
                <Maximize className="text-green-700" />
                {project.area}
              </p>

              <p className="flex items-center gap-3 text-2xl font-bold text-green-700">
                <CircleDollarSign />
                {project.price}
              </p>

            </div>

            <h2 className="text-3xl font-bold mt-12 mb-5">
              Project Overview
            </h2>

            <p className="text-gray-600 leading-8">
              {project.description}
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">
              Project Facilities
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {project.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow"
                >
                  <CheckCircle className="text-green-700" />
                  {item}
                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}
          <div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">

              <h2 className="text-3xl font-bold mb-6">
                Contact Us
              </h2>

              <a
                href="tel:+8801712345678"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl flex items-center justify-center gap-3 mb-4"
              >
                <Phone size={22} />
                Call Now
              </a>

              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl flex items-center justify-center mb-6"
              >
                WhatsApp
              </a>

              <h3 className="text-xl font-bold mb-4">
                Google Map
              </h3>

              <iframe
                src={project.map}
                title="Google Map"
                className="w-full h-64 rounded-xl border"
                loading="lazy"
                allowFullScreen
              ></iframe>

            </div>

            {/* Book Site Visit Form */}
            <BookVisitForm />

          </div>

        </div>

      </div>
    </section>
  );
}