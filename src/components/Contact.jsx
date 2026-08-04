export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-gray-100 p-8 rounded-xl shadow">

            <h3 className="text-2xl font-bold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5">

              <div>
                <h4 className="font-bold">📍 Office Address</h4>
                <p>
                  Holding No: 178/01,<br />
                  Choto Bon Gram Uttar Para,<br />
                  Chandrima, Rajshahi
                </p>
              </div>

              <div>
                <h4 className="font-bold">📞 Phone</h4>
                <p>+880 1773-035945</p>
              </div>

              <div>
                <h4 className="font-bold">📧 Email</h4>
                <p>luminousproperties001@gmail.com</p>
              </div>

              <div>
                <h4 className="font-bold">💬 WhatsApp</h4>
                <a
                  href="https://wa.me/8801773035945"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-700 font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-xl shadow">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows="5"
                placeholder="Write Your Message"
                className="w-full border rounded-lg p-3"
              ></textarea>

              <button
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
      <section className="pb-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-8">
      Our Location
    </h2>

    <iframe
      title="Luminous Properties Location"
      src="https://www.google.com/maps?q=Holding+No+178%2F01+Choto+Bon+Gram+Uttar+Para+Chandrima+Rajshahi&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    ></iframe>

  </div>
</section>
    </section>
    
  );
}