import { useEffect, useState } from "react";
import { subscribeBookings } from "../services/bookingService";

export default function useBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeBookings((data) => {
      setBookings(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    bookings,
    loading,
  };
}