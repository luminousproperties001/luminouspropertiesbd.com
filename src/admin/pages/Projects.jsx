import { useState } from "react";
import toast from "react-hot-toast";

import useProjects from "../hooks/useProjects";
import { deleteProject } from "../services/projectService";

import ProjectTable from "../components/ProjectTable";
import DashboardCard from "../components/DashboardCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import EmptyState from "../components/EmptyState";
import { confirmDelete } from "../components/DeleteConfirm";

export default function Projects() {
  const { projects, loading } = useProjects();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const PER_PAGE = 5;

  async function handleDelete(id) {
    const ok = await confirmDelete();

    if (!ok) return;

    try {
      await deleteProject(id);
      toast.success("Project Deleted Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  }

  // Search + Status Filter

  const filtered = projects.filter((item) => {
    const matchSearch =
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.location?.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "All" || item.status === status;

    return matchSearch && matchStatus;
  });

  // Sort

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case "oldest":
        return (
          (a.createdAt?.seconds || 0) -
          (b.createdAt?.seconds || 0)
        );

      case "priceLow":
        return Number(a.price || 0) - Number(b.price || 0);

      case "priceHigh":
        return Number(b.price || 0) - Number(a.price || 0);

      default:
        return (
          (b.createdAt?.seconds || 0) -
          (a.createdAt?.seconds || 0)
        );
    }
  });

  // Pagination

  const totalPages = Math.max(
    1,
    Math.ceil(sorted.length / PER_PAGE)
  );

  const currentPage = Math.min(page, totalPages);

  const paginated = sorted.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="space-y-8">

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Projects"
          value={projects.length}
          color="bg-green-700"
        />

        <DashboardCard
          title="Available"
          value={
            projects.filter(
              (p) => p.status === "Available"
            ).length
          }
          color="bg-blue-700"
        />

        <DashboardCard
          title="Sold"
          value={
            projects.filter(
              (p) => p.status === "Sold"
            ).length
          }
          color="bg-red-700"
        />

        <DashboardCard
          title="Upcoming"
          value={
            projects.filter(
              (p) => p.status === "Upcoming"
            ).length
          }
          color="bg-yellow-600"
        />

      </div>

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-4">

        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <div className="flex flex-wrap gap-3">

          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-4 py-2"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />

          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
            className="border rounded-lg px-4 py-2"
          >
            <option value="All">All</option>
            <option value="Available">
              Available
            </option>
            <option value="Sold">
              Sold
            </option>
            <option value="Upcoming">
              Upcoming
            </option>
          </select>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            className="border rounded-lg px-4 py-2"
          >
            <option value="latest">
              Latest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="priceLow">
              Price Low → High
            </option>

            <option value="priceHigh">
              Price High → Low
            </option>

          </select>

        </div>

      </div>

      {/* Table */}

      {paginated.length === 0 ? (
        <EmptyState />
      ) : (
        <ProjectTable
          projects={paginated}
          onDelete={handleDelete}
        />
      )}

      {/* Pagination */}

      <div className="flex justify-center items-center gap-4">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setPage(currentPage - 1)
          }
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-semibold">
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setPage(currentPage + 1)
          }
          className="px-4 py-2 rounded bg-green-700 text-white disabled:opacity-50"
        >
          Next
        </button>

      </div>

    </div>
  );
}