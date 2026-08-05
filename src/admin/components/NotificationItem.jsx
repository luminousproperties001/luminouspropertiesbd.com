import { Mail } from "lucide-react";

export default function NotificationItem({ message, onClick }) {
  return (
    <button
      onClick={() => onClick(message)}
      className="w-full text-left px-4 py-3 hover:bg-gray-100 transition border-b"
    >
      <div className="flex items-start gap-3">

        <div className="bg-green-100 p-2 rounded-full">
          <Mail
            size={18}
            className="text-green-700"
          />
        </div>

        <div className="flex-1">

          <div className="flex justify-between">

            <h3 className="font-semibold">
              {message.name}
            </h3>

            {message.status === "Unread" && (
              <span className="w-2 h-2 rounded-full bg-red-500 mt-2" />
            )}

          </div>

          <p className="text-sm text-gray-600 truncate">
            {message.subject || "No Subject"}
          </p>

        </div>

      </div>
    </button>
  );
}