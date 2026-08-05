import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import {
  LayoutDashboard,
  FolderKanban,
  FolderPlus,
  Image,
  CalendarCheck,
  Mail,
  Settings,
  LogOut,
  Building2,
} from "lucide-react";

import { auth } from "../../firebase/firebase";

import useMessages from "../hooks/useMessages";
import NotificationBadge from "../components/NotificationBadge";

export default function Sidebar() {
  const navigate = useNavigate();

  const { messages } = useMessages();

  const unread = messages.filter(
    (m) => m.status === "Unread"
  ).length;

  const menus = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: "Projects",
      path: "/dashboard/projects",
      icon: <FolderKanban size={20} />,
    },
    {
      title: "Add Project",
      path: "/dashboard/projects/add",
      icon: <FolderPlus size={20} />,
    },
    {
      title: "Gallery",
      path: "/dashboard/gallery",
      icon: <Image size={20} />,
    },
    {
      title: "Bookings",
      path: "/dashboard/bookings",
      icon: <CalendarCheck size={20} />,
    },
    {
      title: "Messages",
      path: "/dashboard/messages",
      icon: <Mail size={20} />,
      badge: unread,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ];

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  }

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-green-800 text-white shadow-xl flex flex-col">

      {/* Logo */}

      <div className="h-24 border-b border-green-700 flex items-center justify-center gap-3">

        <Building2 size={34} />

        <div>

          <h1 className="text-2xl font-bold">
            Luminous
          </h1>

          <p className="text-green-200 text-sm">
            Admin Panel
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto py-6">

        {menus.map((menu) => (

          <NavLink
            key={menu.path}
            to={menu.path}
            end={menu.path === "/dashboard"}
            className={({ isActive }) =>
              `mx-3 mb-2 flex items-center justify-between rounded-xl px-5 py-4 transition ${
                isActive
                  ? "bg-white text-green-800 font-bold shadow"
                  : "hover:bg-green-700 text-green-100"
              }`
            }
          >

            <div className="flex items-center gap-3">

              {menu.icon}

              <span>{menu.title}</span>

            </div>

            {menu.badge > 0 && (
              <NotificationBadge
                count={menu.badge}
              />
            )}

          </NavLink>

        ))}

      </nav>

      {/* Footer */}

      <div className="border-t border-green-700 p-5">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 rounded-xl py-3 font-semibold"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}