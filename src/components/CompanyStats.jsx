import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Construction,
  Trees,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={45} />,
    number: "350+",
    title: "Happy Clients",
  },
  {
    icon: <Building2 size={45} />,
    number: "5",
    title: "Completed Projects",
  },
  {
    icon: <Construction size={45} />,
    number: "3",
    title: "Ongoing Projects",
  },
  {
    icon: <Trees size={45} />,
    number: "120",
    title: "Acres Developed",
  },
  {
    icon: <Star size={45} />,
    number: "98%",
    title: "Customer Satisfaction",
  },
];

export default function CompanyStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-900">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            Our Achievements
          </h2>

          <p className="text-green-100 mt-5 text-lg">
            We are proud of our journey and the trust of our valued customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .12,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                y: -10,
              }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center"
            >
              <div className="flex justify-center text-green-700 mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-green-700">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-3 font-medium">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}