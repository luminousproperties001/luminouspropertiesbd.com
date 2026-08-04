import { Building2, MapPinned, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Building2 size={40} />,
    title: "Land Development",
    text: "Modern residential land development."
  },
  {
    icon: <MapPinned size={40} />,
    title: "Prime Locations",
    text: "Projects in excellent locations."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Secure Investment",
    text: "Safe and reliable property investment."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700 mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >
              <div className="text-green-700 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}