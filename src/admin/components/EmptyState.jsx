import { FolderOpen } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="bg-white rounded-xl shadow p-16 text-center">

      <FolderOpen
        size={70}
        className="mx-auto text-gray-400"
      />

      <h2 className="text-2xl font-bold mt-5">

        No Projects Found

      </h2>

      <p className="text-gray-500 mt-2">

        Click Add Project to create one.

      </p>

    </div>
  );
}