import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Firebase Auth state check হওয়া পর্যন্ত অপেক্ষা
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-green-700 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <h2 className="mt-5 text-xl font-semibold text-gray-700">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  // Login না থাকলে Login Page-এ পাঠাবে
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  // Login থাকলে Dashboard Access
  return <Outlet />;
}