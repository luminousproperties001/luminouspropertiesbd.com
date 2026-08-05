import { Link } from "react-router-dom";
import NotificationItem from "./NotificationItem";

export default function NotificationDropdown({
  messages,
  onClose,
}) {
  const latest = messages.slice(0, 5);

  return (
    <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border z-50">

      <div className="p-4 border-b flex justify-between">

        <h2 className="font-bold text-lg">
          Notifications
        </h2>

        <span className="text-gray-500">
          {messages.length}
        </span>

      </div>

      {latest.length === 0 ? (
        <div className="p-8 text-center text-gray-500">
          No Notifications
        </div>
      ) : (
        latest.map((item) => (
          <NotificationItem
            key={item.id}
            message={item}
            onClick={onClose}
          />
        ))
      )}

      <div className="p-4 border-t">

        <Link
          to="/dashboard/messages"
          className="block text-center bg-green-700 text-white py-2 rounded-lg hover:bg-green-800"
          onClick={onClose}
        >
          View All Messages
        </Link>

      </div>

    </div>
  );
}