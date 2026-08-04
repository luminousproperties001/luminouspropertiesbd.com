import { motion } from "framer-motion";
import {
  ShieldCheck,
  MapPinned,
  FileCheck,
  Wallet,
  Building2,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={45} />,
    title: "Trusted Company",
    description:
      "Years of experience in land development with complete customer satisfaction.",
  },
  {
    icon: <MapPinned size={45} />,
    title: "Prime Location",
    description:
      "Projects located in highly valuable and fast-growing areas.",
  },
  {
    icon: <FileCheck size={45} />,
    title: "Legal Documents",
    description:
      "100% verified land documents for secure investment.",
  },
  {
    icon: <Wallet size={45} />,
    title: "Easy Installment",
    description:
      "Flexible payment plans to make property ownership easier.",
  },
  {
    icon: <Building2 size={45} />,
    title: "Modern Development",
    description:
      "Roads, drainage, electricity and planned infrastructure.",
  },
  {
    icon: <Headset size={45} />,
    title: "24/7 Support",
    description:
      "Our team is always ready to assist you before and after purchase.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-green-700 mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We are committed to providing secure investment opportunities,
            premium locations and outstanding customer support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}