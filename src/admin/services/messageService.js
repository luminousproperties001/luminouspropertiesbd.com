import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

// Collection Reference
const messageCollection = collection(db, "messages");

/* ============================
   Real-time Subscribe
============================ */

export function subscribeMessages(callback) {
  const q = query(
    messageCollection,
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const messages = snapshot.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));

    callback(messages);
  });
}

/* ============================
   Create Message
============================ */

export async function createMessage(data) {
  return await addDoc(messageCollection, {
    name: data.name || "",
    email: data.email || "",
    phone: data.phone || "",
    subject: data.subject || "",
    message: data.message || "",

    status: "Unread",

    createdAt: serverTimestamp(),
  });
}

/* ============================
   Update Message
============================ */

export async function updateMessage(id, data) {
  const ref = doc(db, "messages", id);

  return await updateDoc(ref, data);
}

/* ============================
   Delete Message
============================ */

export async function deleteMessage(id) {
  const ref = doc(db, "messages", id);

  return await deleteDoc(ref);
}

/* ============================
   Mark as Read
============================ */

export async function markAsRead(id) {
  const ref = doc(db, "messages", id);

  return await updateDoc(ref, {
    status: "Read",
  });
}

/* ============================
   Mark as Unread
============================ */

export async function markAsUnread(id) {
  const ref = doc(db, "messages", id);

  return await updateDoc(ref, {
    status: "Unread",
  });
}

/* ============================
   Toggle Status
============================ */

export async function toggleMessageStatus(id, currentStatus) {
  const ref = doc(db, "messages", id);

  return await updateDoc(ref, {
    status: currentStatus === "Read" ? "Unread" : "Read",
  });
}