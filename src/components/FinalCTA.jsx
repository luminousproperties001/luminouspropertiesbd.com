import { motion } from "framer-motion";
import { Download, PhoneCall, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <>
      {/* Company Profile Download */}

      <section className="py-20 bg-green-700">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:50 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            className="text-center"
          >

            <h2 className="text-5xl font-bold text-white mb-6">
              Download Company Profile
            </h2>

            <p className="text-green-100 text-lg mb-10">
              Download our latest company profile brochure.
            </p>

            <a
              href="/company-profile.pdf"
              download
              className="inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-green-100 transition"
            >
              <Download size={24}/>
              Download PDF
            </a>

          </motion.div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-green-800 to-green-600">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,scale:.9 }}
            whileInView={{ opacity:1,scale:1 }}
            viewport={{ once:true }}
            className="bg-white rounded-[40px] shadow-2xl p-14 text-center"
          >

            <h2 className="text-5xl font-bold text-green-700 mb-6">
              Let's Build Your Dream Property
            </h2>

            <p className="text-lg text-gray-600 leading-8 max-w-3xl mx-auto mb-10">
              Invest with confidence in one of Rajshahi's trusted land
              development companies. Our experienced team is always ready
              to help you find the perfect investment opportunity.
            </p>

            <div className="flex flex-wrap justify-center gap-6">

              <a
                href="tel:+8801773035945"
                className="flex items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full hover:bg-green-800 transition"
              >
                <PhoneCall size={22}/>
                Call Now
              </a>

              <a
                href="/contact"
                className="flex items-center gap-3 border-2 border-green-700 text-green-700 px-8 py-4 rounded-full hover:bg-green-700 hover:text-white transition"
              >
                Contact Us
                <ArrowRight size={22}/>
              </a>

            </div>

          </motion.div>

        </div>

      </section>
    </>
  );
}