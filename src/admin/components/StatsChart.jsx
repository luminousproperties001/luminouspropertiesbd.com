import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function StatsChart({ projects }) {
  const data = [
    {
      name: "Available",
      value: projects.filter(
        (p) => p.status === "Available"
      ).length,
    },
    {
      name: "Sold",
      value: projects.filter(
        (p) => p.status === "Sold"
      ).length,
    },
    {
      name: "Upcoming",
      value: projects.filter(
        (p) => p.status === "Upcoming"
      ).length,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-6">
        Project Status
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" fill="#15803d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}