import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecentMessages({ messages = [] }) {
  const latest = [...messages].slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold">
          Recent Messages
        </h2>

        <Link
          to="/dashboard/messages"
          className="text-green-700 font-semibold hover:underline"
        >
          View All
        </Link>

      </div>

      {latest.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No messages found
        </div>
      ) : (
        <div className="space-y-4">
          {latest.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-3"
            >
              <div className="flex items-center gap-3">

                <div className="bg-green-100 p-2 rounded-full">
                  <Mail
                    size={18}
                    className="text-green-700"
                  />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.subject || "No Subject"}
                  </p>
                </div>

              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full ${
                  item.status === "Unread"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}