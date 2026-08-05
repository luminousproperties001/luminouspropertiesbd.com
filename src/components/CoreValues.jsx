import { motion } from "framer-motion";

import {
  ShieldCheck,
  Handshake,
  Sparkles,
  Users,
  Award,
  Leaf,
} from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={45} />,
    title: "Integrity",
    description:
      "We conduct our business with honesty, ethics and transparency.",
  },
  {
    icon: <Handshake size={45} />,
    title: "Trust",
    description:
      "Building long-term relationships through reliability and commitment.",
  },
  {
    icon: <Sparkles size={45} />,
    title: "Innovation",
    description:
      "Modern planning and creative development for better living.",
  },
  {
    icon: <Users size={45} />,
    title: "Customer Satisfaction",
    description:
      "Our customers are at the center of everything we do.",
  },
  {
    icon: <Award size={45} />,
    title: "Quality",
    description:
      "Delivering premium projects with the highest standards.",
  },
  {
    icon: <Leaf size={45} />,
    title: "Sustainability",
    description:
      "Developing environmentally friendly communities.",
  },
];

const strengths = [
  "100% Verified Land Documents",
  "Prime Locations in Rajshahi",
  "Transparent Transactions",
  "Flexible Installment Facilities",
  "Modern Infrastructure",
  "Trusted by 350+ Families",
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-green-700">
            Our Core Values
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            The principles that guide our company and inspire our success.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="text-green-700 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Why Trust Us */}
        <div className="mt-24">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-green-700 mb-12"
          >
            Why People Trust Luminous Properties
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-700"
              >
                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center">
                    ✓
                  </div>

                  <p className="font-medium text-gray-700">
                    {item}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}