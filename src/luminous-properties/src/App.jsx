import { Phone, Mail, MapPin } from "lucide-react";

export default function App() {
  return (
    <div className="bg-slate-50 text-gray-800">

      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-green-700">
            Luminous Properties
          </h1>

          <ul className="hidden md:flex gap-8 font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center">

          <div className="text-center text-white px-5">

            <h2 className="text-5xl font-bold mb-6">
              Build Your Dream With
              <br />
              Luminous Properties Ltd.
            </h2>

            <p className="text-xl mb-8">
              Trusted Land Development Company in Rajshahi
            </p>

            <div className="flex justify-center gap-5">

              <button className="bg-green-700 hover:bg-green-800 px-8 py-3 rounded-lg">
                View Projects
              </button>

              <button className="border px-8 py-3 rounded-lg hover:bg-white hover:text-black">
                Contact Us
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* About */}

      <section className="py-20 max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-10">
          About Us
        </h2>

        <p className="text-lg leading-8 text-center max-w-3xl mx-auto">
          Luminous Properties Ltd. is a trusted land development company in
          Rajshahi committed to providing legal, secure and modern residential
          projects for families and investors.
        </p>

      </section>

      {/* Why Choose */}

      <section className="bg-green-700 text-white py-20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold mb-10">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8 px-5">

            <div className="bg-white text-black rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Legal Documentation
              </h3>
              <p>100% verified land documents.</p>
            </div>

            <div className="bg-white text-black rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Prime Location
              </h3>
              <p>Excellent investment opportunities.</p>
            </div>

            <div className="bg-white text-black rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Easy Installment
              </h3>
              <p>Flexible payment facilities.</p>
            </div>

            <div className="bg-white text-black rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Trusted Company
              </h3>
              <p>Professional customer support.</p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="py-20">

        <h2 className="text-4xl text-center font-bold mb-10">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto space-y-5">

          <div className="flex items-center gap-3">
            <Phone className="text-green-700"/>
            +880 1773-035945
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-green-700"/>
            luminousproperties001@gmail.com
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-green-700"/>
            Holding No:178/01, Choto Bon Gram Uttar Para,
            Chandrima, Rajshahi
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-black text-white py-8 text-center">
        © 2026 Luminous Properties Ltd. All Rights Reserved.
      </footer>

    </div>
  );
}
