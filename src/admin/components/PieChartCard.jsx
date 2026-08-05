import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#15803d",
  "#2563eb",
  "#dc2626",
];

export default function PieChartCard({
  projects,
}) {
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
        Status Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            outerRadius={110}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}