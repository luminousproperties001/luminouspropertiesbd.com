import {
  FolderKanban,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  CalendarCheck,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

import useProjects from "../hooks/useProjects";
import useMessages from "../hooks/useMessages";
import useAnalytics from "../hooks/useAnalytics";

import StatsCard from "../components/StatsCard";
import StatsChart from "../components/StatsChart";
import PieChartCard from "../components/PieChartCard";
import RevenueChart from "../components/RevenueChart";
import BookingChart from "../components/BookingChart";
import AnalyticsCard from "../components/AnalyticsCard";
import RecentProjects from "../components/RecentProjects";
import RecentMessages from "../components/RecentMessages";
import RecentBookings from "../components/RecentBookings";

export default function Dashboard() {
  const { projects, loading } = useProjects();
  const { messages } = useMessages();

  const {
    data: analytics,
    loading: analyticsLoading,
  } = useAnalytics();

  if (loading || analyticsLoading) {
    return (
      <div className="p-8 text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  const totalProjects = projects.length;

  const available = projects.filter(
    (p) => p.status === "Available"
  ).length;

  const sold = projects.filter(
    (p) => p.status === "Sold"
  ).length;

  const upcoming = projects.filter(
    (p) => p.status === "Upcoming"
  ).length;

  const totalValue = projects.reduce(
    (sum, p) => sum + (Number(p.price) || 0),
    0
  );

  const unread = messages.filter(
    (m) => m.status === "Unread"
  ).length;

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Enterprise Dashboard
      </h1>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatsCard
          title="Total Projects"
          value={totalProjects}
          color="bg-green-700"
          icon={<FolderKanban />}
        />

        <StatsCard
          title="Available"
          value={available}
          color="bg-blue-600"
          icon={<CheckCircle />}
        />

        <StatsCard
          title="Sold"
          value={sold}
          color="bg-red-600"
          icon={<XCircle />}
        />

        <StatsCard
          title="Upcoming"
          value={upcoming}
          color="bg-yellow-500"
          icon={<Clock />}
        />

        <StatsCard
          title="Property Value"
          value={`৳ ${totalValue.toLocaleString()}`}
          color="bg-gray-800"
          icon={<DollarSign />}
        />

        <StatsCard
          title="Messages"
          value={messages.length}
          color="bg-purple-600"
          icon={<Mail />}
        />

        <StatsCard
          title="Unread"
          value={unread}
          color="bg-pink-600"
          icon={<Mail />}
        />

        <StatsCard
          title="Bookings"
          value={analytics?.bookingCount || 0}
          color="bg-indigo-600"
          icon={<CalendarCheck />}
        />

      </div>

      {/* Analytics Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <AnalyticsCard
          title="Growth"
          value="+25%"
          icon={<TrendingUp />}
        />

        <AnalyticsCard
          title="Customers"
          value={analytics?.customerCount || 0}
          icon={<Users />}
        />

        <AnalyticsCard
          title="Revenue"
          value={`৳ ${(analytics?.revenue || 0).toLocaleString()}`}
          icon={<DollarSign />}
        />

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-6 mt-10">

        <StatsChart
          projects={projects}
        />

        <PieChartCard
          projects={projects}
        />

      </div>

      {/* Revenue & Booking */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <RevenueChart
          bookings={analytics?.bookings || []}
        />

        <BookingChart
          bookings={analytics?.bookings || []}
        />

      </div>

      {/* Recent Projects */}

      <div className="mt-10">
        <RecentProjects
          projects={projects}
        />
      </div>
<RevenueChart
  bookings={analytics?.bookings || []}
/>

<BookingChart
  bookings={analytics?.bookings || []}
/>
      {/* Recent Activity */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <RecentMessages
          messages={messages}
        />

        <RecentBookings
          bookings={analytics?.bookings || []}
        />

      </div>

    </div>
  );
}