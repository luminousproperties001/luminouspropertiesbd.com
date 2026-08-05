import { X, MailOpen } from "lucide-react";

export default function MessageModal({
  message,
  onClose,
  onMarkRead,
}) {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-2xl font-bold">
            Customer Message
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600"
          >
            <X size={24} />
          </button>

        </div>

        {/* Body */}

        <div className="p-6 space-y-5">

          <div>
            <p className="text-sm text-gray-500">
              Name
            </p>

            <h3 className="font-semibold text-lg">
              {message.name}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p>{message.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Phone
            </p>

            <p>{message.phone || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Subject
            </p>

            <p>{message.subject || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">
              Message
            </p>

            <div className="bg-gray-100 rounded-xl p-4 whitespace-pre-wrap">
              {message.message}
            </div>
          </div>

        </div>

        {/* Footer */}

        <div className="border-t p-5 flex justify-end gap-3">

          {message.status === "Unread" && (
            <button
              onClick={() => onMarkRead(message.id)}
              className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-xl"
            >
              <MailOpen size={18} />
              Mark as Read
            </button>
          )}

          <button
            onClick={onClose}
            className="border px-5 py-3 rounded-xl"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}