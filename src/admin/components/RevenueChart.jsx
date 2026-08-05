import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function RevenueChart({ bookings = [] }) {
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

  const revenueMap = {};

  months.forEach((month) => {
    revenueMap[month] = 0;
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

    revenueMap[month] += Number(booking.amount || 0);
  });

  const data = months.map((month) => ({
    month,
    revenue: revenueMap[month],
  }));

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Revenue Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}