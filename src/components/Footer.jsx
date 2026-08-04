import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 rounded-full mb-4 border-2 border-green-500"
          />

          <h2 className="text-2xl font-bold text-white mb-4">
            Luminous Properties Ltd.
          </h2>

          <p className="text-gray-400 leading-7">
            Trusted Land Development Company in Rajshahi.
            We provide secure investment opportunities,
            premium residential projects and excellent customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link to="/" className="hover:text-green-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-green-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-green-400">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-green-400">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-green-400">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Contact
          </h3>

          <div className="space-y-3">

            <p>📍 Rajshahi, Bangladesh</p>

            <p>📞 +880 1712-345678</p>

            <p>✉️ info@luminousproperties.com</p>

            <p>🕒 Sat - Thu : 9:00 AM - 6:00 PM</p>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition"
            >
              <FaYoutube size={20} />
            </a>

            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition"
            >
              <FaLinkedinIn size={20} />
            </a>

          </div>

          <div className="mt-6">
            <p className="text-gray-400">
              Stay connected with us on social media for the latest project updates.
            </p>
          </div>

        </div>

      </div>

      <hr className="border-gray-700 my-8" />

      <div className="text-center text-gray-500 text-sm px-6">
        © {new Date().getFullYear()} Luminous Properties Ltd.
        All Rights Reserved.
      </div>

    </footer>
  );
}