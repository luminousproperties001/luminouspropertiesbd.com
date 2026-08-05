export default function MessageStatusBadge({ status }) {
  const colors = {
    Unread: "bg-red-100 text-red-700",
    Read: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        colors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}