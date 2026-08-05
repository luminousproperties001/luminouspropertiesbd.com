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

// Collection Reference
const projectCollection = collection(db, "projects");

// ==============================
// Live Subscribe
// ==============================
export function subscribeProjects(callback) {
  return onSnapshot(projectCollection, (snapshot) => {
    const projects = snapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data(),
    }));

    callback(projects);
  });
}

// ==============================
// Get All Projects
// ==============================
export async function getProjects() {
  const snapshot = await getDocs(projectCollection);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  }));
}

// ==============================
// Get Single Project
// ==============================
export async function getProject(id) {
  const projectRef = doc(db, "projects", id);

  const snapshot = await getDoc(projectRef);

  if (!snapshot.exists()) {
    throw new Error("Project not found");
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

// ==============================
// Create Project
// ==============================
export async function createProject(project) {
  return await addDoc(projectCollection, {
    ...project,
    createdAt: serverTimestamp(),
  });
}

// ==============================
// Update Project
// ==============================
export async function updateProject(id, data) {
  const projectRef = doc(db, "projects", id);

  return await updateDoc(projectRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

// ==============================
// Delete Project
// ==============================
export async function deleteProject(id) {
  const projectRef = doc(db, "projects", id);

  return await deleteDoc(projectRef);
}