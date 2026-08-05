import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-lg shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-2">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-5">
          <img
            src={logo}
            alt="Logo"
           className="mt-0 w-30 h-19 rounded-full border-2 border-green-900 object-cover"
          />

          <div>
  <h1 className="text-6xl font-bold">
    Luminous Properties
  </h1>

  <p className="text-2xl font-medium text-gray-600">
    Trusted Land Development
  </p>
</div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-bold">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-black hover:text-green-700 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-black hover:text-green-700 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-black hover:text-green-700 transition duration-300"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-black hover:text-green-700 transition duration-300"
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-black hover:text-green-700 transition duration-300"
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col text-center text-lg font-bold py-4">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-black hover:text-green-700"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-black hover:text-green-700"
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-black hover:text-green-700"
            >
              Projects
            </NavLink>

            <NavLink
              to="/gallery"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-black hover:text-green-700"
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-black hover:text-green-700"
            >
              Contact
            </NavLink>

          </ul>
        </div>
      )}
    </nav>
  );
}