import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

export async function getAnalyticsData() {
  try {
    const projectsSnap = await getDocs(collection(db, "projects"));
    const bookingsSnap = await getDocs(collection(db, "bookings"));
    const usersSnap = await getDocs(collection(db, "users"));

    const projects = projectsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const bookings = bookingsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const users = usersSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const revenue = bookings.reduce(
      (total, item) => total + Number(item.amount || 0),
      0
    );

    return {
      revenue,
      bookingCount: bookings.length,
      customerCount: users.length,
      projects,
      bookings,
      users,
    };
  } catch (error) {
    console.error("Analytics Error:", error);

    return {
      revenue: 0,
      bookingCount: 0,
      customerCount: 0,
      projects: [],
      bookings: [],
      users: [],
    };
  }
}