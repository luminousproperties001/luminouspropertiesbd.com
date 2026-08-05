import { useState } from "react";
import toast from "react-hot-toast";

import useMessages from "../hooks/useMessages";

import MessageTable from "../components/MessageTable";
import MessageModal from "../components/MessageModal";

import {
  deleteMessage,
  markAsRead,
  markAsUnread,
} from "../services/messageService";

export default function Messages() {
  const { messages, loading } = useMessages();

  const [selectedMessage, setSelectedMessage] = useState(null);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this message?")) return;

    try {
      await deleteMessage(id);

      toast.success("Message Deleted");
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function handleMarkRead(id) {
    try {
      await markAsRead(id);

      toast.success("Marked as Read");

      setSelectedMessage(null);
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function handleToggle(message) {
    try {
      if (message.status === "Read") {
        await markAsUnread(message.id);
      } else {
        await markAsRead(message.id);
      }

      toast.success("Status Updated");
    } catch (err) {
      toast.error(err.message);
    }
  }

  const filtered = messages.filter((msg) => {
    const matchSearch =
      msg.name?.toLowerCase().includes(search.toLowerCase()) ||
      msg.email?.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject?.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All" || msg.status === status;

    return matchSearch && matchStatus;
  });

  const unread = messages.filter(
    (m) => m.status === "Unread"
  ).length;

  const read = messages.filter(
    (m) => m.status === "Read"
  ).length;

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            CRM Messages
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer messages
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-3 gap-5 mb-8">

        <div className="bg-blue-600 rounded-xl text-white p-6">
          <p>Total Messages</p>

          <h2 className="text-4xl font-bold">
            {messages.length}
          </h2>
        </div>

        <div className="bg-red-600 rounded-xl text-white p-6">
          <p>Unread</p>

          <h2 className="text-4xl font-bold">
            {unread}
          </h2>
        </div>

        <div className="bg-green-700 rounded-xl text-white p-6">
          <p>Read</p>

          <h2 className="text-4xl font-bold">
            {read}
          </h2>
        </div>

      </div>

      {/* Search */}

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg px-4 py-3 flex-1"
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="border rounded-lg px-4"
        >
          <option>All</option>
          <option>Unread</option>
          <option>Read</option>
        </select>

      </div>

      {/* Table */}

      <MessageTable
        messages={filtered}
        onDelete={handleDelete}
        onView={setSelectedMessage}
        onToggle={handleToggle}
      />

      {/* Modal */}

      <MessageModal
        message={selectedMessage}
        onClose={() =>
          setSelectedMessage(null)
        }
        onMarkRead={handleMarkRead}
      />

    </div>
  );
}