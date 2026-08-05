import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import {
  Search,
  LogOut,
  CalendarDays,
  UserCircle,
} from "lucide-react";

import { auth } from "../../firebase/firebase";
import NotificationBell from "../components/NotificationBell";

export default function Topbar() {
  const navigate = useNavigate();

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();

    setCurrentDate(
      today.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Logout Failed");
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">

      <div className="flex items-center justify-between px-8 py-4">

        {/* Left */}

        <div className="flex items-center gap-6">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search projects..."
              className="w-80 rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-green-600"
            />

          </div>

          <div className="hidden lg:flex items-center gap-2 text-gray-600">

            <CalendarDays size={18} />

            <span>{currentDate}</span>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Live Notification Bell */}

          <NotificationBell />

          {/* Admin Profile */}

          <div className="flex items-center gap-3">

            {auth.currentUser?.photoURL ? (
              <img
                src={auth.currentUser.photoURL}
                alt="Admin"
                className="w-11 h-11 rounded-full object-cover border-2 border-green-600"
              />
            ) : (
              <UserCircle
                size={42}
                className="text-green-700"
              />
            )}

            <div>

              <h4 className="font-semibold">
                {auth.currentUser?.displayName || "Administrator"}
              </h4>

              <p className="text-sm text-gray-500">
                {auth.currentUser?.email || "admin@example.com"}
              </p>

            </div>

          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700 transition"
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </header>
  );
}