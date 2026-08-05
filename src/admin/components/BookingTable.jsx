import { Trash2 } from "lucide-react";
import BookingStatusBadge from "./BookingStatusBadge";

export default function BookingTable({
  bookings,
  onDelete,
  onStatusChange,
}) {
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Phone</th>

            <th className="p-4 text-left">Project</th>

            <th className="p-4 text-left">Visit Date</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-center">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr
              key={booking.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-4">
                {booking.name}
              </td>

              <td className="p-4">
                {booking.phone}
              </td>

              <td className="p-4">
                {booking.project}
              </td>

              <td className="p-4">
                {booking.visitDate || "-"}
              </td>

              <td className="p-4">

                <div className="space-y-2">

                  <BookingStatusBadge
                    status={booking.status}
                  />

                  <select
                    value={booking.status}
                    onChange={(e) =>
                      onStatusChange(
                        booking.id,
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-2 py-1 w-full"
                  >
                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Confirmed">
                      Confirmed
                    </option>

                    <option value="Completed">
                      Completed
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>

                  </select>

                </div>

              </td>

              <td className="p-4 text-center">

                <button
                  onClick={() =>
                    onDelete(booking.id)
                  }
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={20} />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}