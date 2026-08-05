import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { storage } from "../../firebase/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase/firebase";

import toast, { Toaster } from "react-hot-toast";

export default function EditProject() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const {

    register,

    handleSubmit,

    reset,

  } = useForm();

  useEffect(() => {

    loadProject();

  }, []);

  async function loadProject() {

    const ref = doc(db, "projects", id);

    const snap = await getDoc(ref);
    const [coverImage, setCoverImage] = useState(null);

const [galleryImages, setGalleryImages] = useState([]);

const [preview, setPreview] = useState("");

    if (snap.exists()) {

      reset(snap.data());

    }

    setLoading(false);

  }
  async function uploadImage(file) {

  const imageRef = ref(
    storage,
    `projects/${Date.now()}-${file.name}`
  );

  await uploadBytes(imageRef, file);

  return await getDownloadURL(imageRef);

}

  async function onSubmit(data) {

    try {

      await updateDoc(doc(db, "projects", id), data);

      toast.success("Project Updated");

      setTimeout(() => {

        navigate("/dashboard/projects");

      }, 1200);

    } catch (err) {

      toast.error(err.message);

    }
    

  }

  if (loading)

    return <h2 className="text-center py-20">Loading...</h2>;

  return (

    <div className="max-w-4xl mx-auto p-6">

      <Toaster />

      <h1 className="text-4xl font-bold mb-8">

        Edit Project

      </h1>

      <form

        onSubmit={handleSubmit(onSubmit)}

        className="space-y-5 bg-white p-8 rounded-2xl shadow"

      >

        <input

          {...register("title")}

          className="w-full border p-4 rounded-xl"

          placeholder="Title"

        />

        <input

          {...register("location")}

          className="w-full border p-4 rounded-xl"

          placeholder="Location"

        />

        <input

          {...register("area")}

          className="w-full border p-4 rounded-xl"

          placeholder="Area"

        />

        <input

          {...register("price")}

          className="w-full border p-4 rounded-xl"

          placeholder="Price"

        />

        <textarea

          rows="5"

          {...register("description")}

          className="w-full border p-4 rounded-xl"

          placeholder="Description"

        />

        <input

          {...register("amenities")}

          className="w-full border p-4 rounded-xl"

          placeholder="Amenities"

        />

        <input

          {...register("map")}

          className="w-full border p-4 rounded-xl"

          placeholder="Google Map"

        />

        <select

          {...register("status")}

          className="w-full border p-4 rounded-xl"

        >

          <option value="Available">

            Available

          </option>

          <option value="Sold">

            Sold

          </option>

        </select>

        <label className="flex gap-3">

          <input

            type="checkbox"

            {...register("featured")}

          />

          Featured Project

        </label>

        <button

          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl w-full"

        >

          Update Project

        </button>

      </form>

    </div>

  );

}