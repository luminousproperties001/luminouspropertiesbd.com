import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

const bookingCollection = collection(db, "bookings");

// ==============================
// Live Subscribe
// ==============================
export function subscribeBookings(callback) {
  return onSnapshot(bookingCollection, (snapshot) => {
    const bookings = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    callback(bookings);
  });
}

// ==============================
// Get All Bookings
// ==============================
export async function getBookings() {
  const snapshot = await getDocs(bookingCollection);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  }));
}

// ==============================
// Get Single Booking
// ==============================
export async function getBooking(id) {
  const bookingRef = doc(db, "bookings", id);

  const snapshot = await getDoc(bookingRef);

  if (!snapshot.exists()) {
    throw new Error("Booking not found");
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

// ==============================
// Create Booking
// ==============================
export async function createBooking(data) {
  return await addDoc(bookingCollection, {
    ...data,
    status: "Pending",
    createdAt: serverTimestamp(),
  });
}

// ==============================
// Update Booking
// ==============================
export async function updateBooking(id, data) {
  const bookingRef = doc(db, "bookings", id);

  return await updateDoc(bookingRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

// ==============================
// Delete Booking
// ==============================
export async function deleteBooking(id) {
  const bookingRef = doc(db, "bookings", id);

  return await deleteDoc(bookingRef);
}