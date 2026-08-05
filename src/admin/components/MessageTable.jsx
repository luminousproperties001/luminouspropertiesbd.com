import { Eye, Trash2 } from "lucide-react";
import MessageStatusBadge from "./MessageStatusBadge";

export default function MessageTable({
  messages,
  onView,
  onDelete,
}) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((msg) => (
            <tr
              key={msg.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{msg.name}</td>

              <td className="p-4">{msg.email}</td>

              <td className="p-4">{msg.phone}</td>

              <td className="p-4">
                <MessageStatusBadge
                  status={msg.status}
                />
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => onView(msg)}
                    className="text-blue-600"
                  >
                    <Eye size={20} />
                  </button>

                  <button
                    onClick={() => onDelete(msg.id)}
                    className="text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}