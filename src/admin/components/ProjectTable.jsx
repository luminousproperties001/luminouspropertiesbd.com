import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function ProjectTable({ projects, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project) => (
            <tr
              key={project.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">
                <img
                  src={project.images?.[0]}
                  alt={project.title}
                  className="w-20 h-14 object-cover rounded-lg"
                />
              </td>

              <td className="p-4 font-semibold">
                {project.title}
              </td>

              <td className="p-4">
                {project.location}
              </td>

              <td className="p-4">
                ৳ {project.price}
              </td>

              <td className="p-4">
                <StatusBadge status={project.status} />
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-4">
                  <Link
                    to={`/dashboard/projects/edit/${project.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={20} />
                  </Link>

                  <button
                    onClick={() => onDelete(project.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {projects.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="text-center py-10 text-gray-500"
              >
                No Projects Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}