export default function NotificationBadge({
  count,
}) {
  if (!count) return null;

  return (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
      {count}
    </span>
  );
}