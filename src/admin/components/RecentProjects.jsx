export default function RecentProjects({ projects }) {
  const recent = [...projects]
    .sort((a, b) => {
      const aTime = a.createdAt?.seconds || 0;
      const bTime = b.createdAt?.seconds || 0;
      return bTime - aTime;
    })
    .slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Recent Projects
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3">Title</th>
            <th className="text-left py-3">Location</th>
            <th className="text-left py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {recent.map((item) => (
            <tr
              key={item.id}
              className="border-b"
            >
              <td className="py-3">
                {item.title}
              </td>

              <td>{item.location}</td>

              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}