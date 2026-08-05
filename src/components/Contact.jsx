import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-3">
            We'd love to hear from you. Feel free to contact us anytime.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold text-green-700 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="text-green-700 mt-1" size={24} />

                <div>
                  <h4 className="font-bold">Office Address</h4>

                  <p className="text-gray-600">
                    Holding No: 178/01
                    <br />
                    Choto Bon Gram Uttar Para
                    <br />
                    Chandrima, Rajshahi
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="text-green-700 mt-1" size={24} />

                <div>
                  <h4 className="font-bold">Phone</h4>

                  <a
                    href="tel:+8801773035945"
                    className="text-gray-600 hover:text-green-700"
                  >
                    +880 1773-035945
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="text-green-700 mt-1" size={24} />

                <div>
                  <h4 className="font-bold">Email</h4>

                  <a
                    href="mailto:luminousproperties001@gmail.com"
                    className="text-gray-600 hover:text-green-700"
                  >
                    luminousproperties001@gmail.com
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex gap-4">
                <FaFacebook className="text-blue-600 mt-1 text-2xl" />

                <div>
                  <h4 className="font-bold">Facebook</h4>

                  <a
                    href="https://www.facebook.com/LuminousPropertiesRajshahi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Luminous Properties Rajshahi
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <FaWhatsapp className="text-green-600 mt-1 text-2xl" />

                <div>
                  <h4 className="font-bold">WhatsApp</h4>

                  <a
                    href="https://wa.me/8801773035945"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-700 hover:underline"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold text-green-700 mb-8">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <textarea
                rows="5"
                placeholder="Write Your Message"
                required
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Our Location
          </h2>

          <div className="overflow-hidden rounded-2xl shadow-lg">

            <iframe
              title="Luminous Properties Location"
              src="https://www.google.com/maps?q=Holding+No:+178/01,+Choto+Bon+Gram+Uttar+Para,+Chandrima,+Rajshahi&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}