import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import useBookings from "../hooks/useBookings";
import BookingTable from "../components/BookingTable";
import DashboardCard from "../components/DashboardCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import EmptyState from "../components/EmptyState";

import {
  deleteBooking,
  updateBooking,
} from "../services/bookingService";

export default function Bookings() {
  const { bookings, loading } = useBookings();

  const [search, setSearch] = useState("");

  async function handleDelete(id) {
    const ok = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!ok) return;

    try {
      await deleteBooking(id);

      toast.success("Booking Deleted");
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function handleStatus(id, status) {
    try {
      await updateBooking(id, {
        status,
      });

      toast.success("Status Updated");
    } catch (err) {
      toast.error(err.message);
    }
  }

  const filtered = bookings.filter((booking) => {
    const text = search.toLowerCase();

    return (
      booking.name?.toLowerCase().includes(text) ||
      booking.phone?.toLowerCase().includes(text) ||
      booking.project?.toLowerCase().includes(text)
    );
  });

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="p-8">

      <Toaster />

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Booking Management
        </h1>

        <input
          type="text"
          placeholder="Search Booking..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-xl px-4 py-3 w-72"
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <DashboardCard
          title="Total Bookings"
          value={bookings.length}
          color="bg-green-700"
        />

        <DashboardCard
          title="Pending"
          value={
            bookings.filter(
              (b) => b.status === "Pending"
            ).length
          }
          color="bg-yellow-500"
        />

        <DashboardCard
          title="Confirmed"
          value={
            bookings.filter(
              (b) => b.status === "Confirmed"
            ).length
          }
          color="bg-blue-600"
        />

        <DashboardCard
          title="Completed"
          value={
            bookings.filter(
              (b) => b.status === "Completed"
            ).length
          }
          color="bg-purple-700"
        />

      </div>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <BookingTable
          bookings={filtered}
          onDelete={handleDelete}
          onStatusChange={handleStatus}
        />
      )}

    </div>
  );
}