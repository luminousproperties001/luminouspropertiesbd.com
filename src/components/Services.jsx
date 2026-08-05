import { Link } from "react-router-dom";
import { Building2, MapPinned, ShieldCheck } from "lucide-react";
import logo2 from "../assets/logo2.jpg";

const services = [
  {
    icon: <Building2 size={42} />,
    title: "Land Development",
    text: "Modern residential land development with planned roads and utilities.",
  },
  {
    icon: <MapPinned size={42} />,
    title: "Prime Locations",
    text: "Projects located in excellent and fast-growing areas for maximum value.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Secure Investment",
    text: "Safe, reliable and transparent property investment for your future.",
  },
];

export default function Services() {
  return (
    <section className="py-6 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Banner */}
        <div className="flex justify-center mb-10">
          <Link to="/">
            <img
              src={logo2}
              alt="Project Gallery"
              className="w-full max-w-4xl h-16 rounded-full border-4 border-green-700 object-cover shadow-lg"
            />
          </Link>
        </div>

        
        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}