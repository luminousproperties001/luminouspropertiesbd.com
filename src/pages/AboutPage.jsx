import { motion } from "framer-motion";
import Management from "../components/Management";
import CompanyStats from "../components/CompanyStats";
import CompanyTimeline from "../components/CompanyTimeline";
import CoreValues from "../components/CoreValues";
import CompanyGallery from "../components/CompanyGallery";
import ContactInfo from "../components/ContactInfo";
import Certificates from "../components/Certificates";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import {
  Building2,
  CalendarDays,
  Target,
  Eye,
  MapPinned,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

import companyBanner from "../assets/company-banner.jpg";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">

      {/* ================= Hero Section ================= */}

      <section className="relative h-[420px]">
        <img
          src={companyBanner}
          alt="Luminous Properties"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              About Us
            </h1>

            <p className="mt-4 text-lg">
              Luminous Properties Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= Company Profile ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity:0,y:50 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >

            <h2 className="text-4xl font-bold text-green-700 mb-8">
              Company Profile
            </h2>

            <p className="text-gray-700 leading-9 text-lg">
              Luminous Properties Ltd. is one of the trusted land development
              companies in Rajshahi, Bangladesh. Since our establishment in
              2020, we have been committed to providing secure investment
              opportunities, premium residential projects, and modern land
              development solutions.
            </p>

            <p className="text-gray-700 leading-9 text-lg mt-6">
              Our company focuses on transparency, customer satisfaction,
              innovation, and sustainable development. We believe that every
              family deserves a safe and valuable property investment for their
              future.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= Company Information ================= */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <InfoCard
              icon={<CalendarDays size={40} />}
              title="Established"
              text="2020"
            />

            <InfoCard
              icon={<Building2 size={40} />}
              title="Company"
              text="Luminous Properties Ltd."
            />

            <InfoCard
              icon={<MapPinned size={40} />}
              title="Office Address"
              text="Holding No: 178/01, Choto Bon Gram Uttar Para, Chandrima, Rajshahi"
            />

            <InfoCard
              icon={<Phone size={40} />}
              title="Phone"
              text="+880 1773-035945"
            />

            <InfoCard
              icon={<Mail size={40} />}
              title="Email"
              text="luminousproperties001@gmail.com"
            />

            <InfoCard
              icon={<Globe size={40} />}
              title="Website"
              text="www.luminousproperties.com"
            />

          </div>

        </div>

      </section>

      {/* ================= Mission & Vision ================= */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div
              initial={{ opacity:0,x:-50 }}
              whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.8 }}
              className="bg-green-50 rounded-3xl shadow-lg p-10"
            >

              <Target className="text-green-700 mb-5" size={55}/>

              <h2 className="text-3xl font-bold mb-5 text-green-700">
                Our Mission
              </h2>

              <p className="text-gray-700 leading-8">
                To develop quality residential land projects while maintaining
                honesty, transparency, affordability, and customer
                satisfaction.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity:0,x:50 }}
              whileInView={{ opacity:1,x:0 }}
              viewport={{ once:true }}
              transition={{ duration:.8 }}
              className="bg-green-50 rounded-3xl shadow-lg p-10"
            >

              <Eye className="text-green-700 mb-5" size={55}/>

              <h2 className="text-3xl font-bold mb-5 text-green-700">
                Our Vision
              </h2>

              <p className="text-gray-700 leading-8">
                To become one of Bangladesh's most trusted real estate and land
                development companies by delivering premium projects and
                building long-term relationships with our clients.
              </p>

            </motion.div>

          </div>
<Management />
<CompanyStats />
<CompanyTimeline />
<CoreValues />
<CompanyGallery />
<ContactInfo />
<Certificates />

<FAQ />

<FinalCTA />
        </div>

      </section>

    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y:-8 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <div className="text-green-700 mb-5">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {text}
      </p>
    </motion.div>
  );
}