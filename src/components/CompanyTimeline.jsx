import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Luminous Properties Rajshahi. officially started its journey in Rajshahi.",
  },
  {
    year: "2021",
    title: "First Residential Project",
    description:
      "Successfully launched our first modern residential land development project.",
  },
  {
    year: "2022",
    title: "Growing Customer Trust",
    description:
      "More than 150 satisfied customers invested with confidence.",
  },
  {
    year: "2023",
    title: "Multiple Successful Projects",
    description:
      "Completed several residential projects with modern infrastructure.",
  },
  {
    year: "2024",
    title: "350+ Happy Clients",
    description:
      "Expanded our customer base while maintaining transparency and trust.",
  },
  {
    year: "2025",
    title: "120 Acres Development",
    description:
      "Successfully developed more than 120 acres of residential land.",
  },
];

export default function CompanyTimeline() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-green-700">
            Company Timeline
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Our journey of growth and success.
          </p>
        </motion.div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .7,
              }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >

              {/* Card */}
              <div className="md:w-1/2">

                <div className="bg-green-50 rounded-3xl shadow-xl p-8">

                  <div className="flex items-center gap-4 mb-5">

                    <div className="w-14 h-14 rounded-full bg-green-700 text-white flex items-center justify-center">
                      <CalendarDays />
                    </div>

                    <h3 className="text-3xl font-bold text-green-700">
                      {item.year}
                    </h3>

                  </div>

                  <h4 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex w-14 justify-center">
                <div className="w-6 h-6 bg-green-700 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              <div className="md:w-1/2"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
