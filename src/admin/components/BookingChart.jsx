import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function BookingChart({ bookings = [] }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const bookingMap = {};

  months.forEach((month) => {
    bookingMap[month] = 0;
  });

  bookings.forEach((booking) => {
    if (!booking.date) return;

    let date;

    if (booking.date?.toDate) {
      date = booking.date.toDate();
    } else {
      date = new Date(booking.date);
    }

    const month = months[date.getMonth()];

    bookingMap[month]++;
  });

  const data = months.map((month) => ({
    month,
    booking: bookingMap[month],
  }));

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Booking Growth
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="booking"
            fill="#2563eb"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}