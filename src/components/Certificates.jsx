import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certificates = [
  "Company Registration",
  "Trade License",
  "TIN Certificate",
  "Land Development License",
];

export default function Certificates() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          className="text-5xl font-bold text-center text-green-700 mb-16"
        >
          Company Certificates
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certificates.map((item,index)=>(

            <motion.div
              key={index}
              whileHover={{y:-8}}
              className="bg-white shadow-xl rounded-3xl p-8 text-center"
            >

              <BadgeCheck
                className="mx-auto text-green-700 mb-5"
                size={55}
              />

              <h3 className="font-bold text-xl">
                {item}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}