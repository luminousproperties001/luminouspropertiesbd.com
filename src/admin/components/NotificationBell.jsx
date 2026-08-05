import { Bell } from "lucide-react";
import { useState } from "react";

import useMessages from "../hooks/useMessages";
import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const { messages } = useMessages();

  const unread = messages.filter(
    (m) => m.status === "Unread"
  ).length;

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-lg hover:bg-gray-100"
      >
        <Bell size={24} />

        {unread > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <NotificationDropdown
          messages={messages}
          onClose={() => setOpen(false)}
        />
      )}

    </div>
  );
}