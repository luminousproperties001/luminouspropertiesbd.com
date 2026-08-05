import { motion } from "framer-motion";
import { MapPinned, Phone, Mail, Globe } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-green-700 mb-16"
        >
          Contact Information
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Cards */}
          <div className="space-y-6">

            <Card
              icon={<MapPinned size={30} />}
              title="Office Address"
              text={
                <>
                  Holding No: 178/01 <br />
                  Choto Bon Gram Uttar Para <br />
                  Chandrima, Rajshahi
                </>
              }
            />

            <Card
              icon={<Phone size={30} />}
              title="Phone"
              text={
                <a
                  href="tel:+8801773035945"
                  className="text-green-700 hover:underline"
                >
                  +880 1773-035945
                </a>
              }
            />

            <Card
              icon={<Mail size={30} />}
              title="Email"
              text={
                <a
                  href="mailto:luminousproperties001@gmail.com"
                  className="text-green-700 hover:underline"
                >
                  luminousproperties001@gmail.com
                </a>
              }
            />

            <Card
              icon={<Globe size={30} />}
              title="Website"
              text={
                <a
                  href="https://www.luminousproperties.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 hover:underline"
                >
                  www.luminousproperties.com
                </a>
              }
            />

            <Card
              icon={<FaFacebook size={30} className="text-blue-600" />}
              title="Facebook"
              text={
                <a
                  href="https://www.facebook.com/LuminousPropertiesRajshahi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Luminous Properties Rajshahi
                </a>
              }
            />

          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Google Map"
              className="rounded-3xl w-full h-[500px] shadow-lg"
              src="https://www.google.com/maps?q=Holding+No+178/01+Choto+Bon+Gram+Uttar+Para+Chandrima+Rajshahi&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="flex gap-5 bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition duration-300">
      <div className="text-green-700 mt-1">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-xl text-gray-800">
          {title}
        </h3>

        <div className="text-gray-600 mt-2 leading-7">
          {text}
        </div>
      </div>
    </div>
  );
}