import { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast, { Toaster } from "react-hot-toast";

import { db, storage } from "../../firebase/firebase";

export default function AddProject() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      // Upload Cover Image
      let coverUrl = "";

      if (coverImage) {
        coverUrl = await uploadImage(coverImage);
      }

      // Upload Gallery Images
      const gallery = [];

      for (const file of galleryImages) {
        const url = await uploadImage(file);
        gallery.push(url);
      }

      // Save Firestore
      await addDoc(collection(db, "projects"), {
        title: data.title,
        location: data.location,
        area: data.area,
        price: Number(data.price),
        description: data.description,
        amenities: data.amenities
          ? data.amenities.split(",").map((a) => a.trim())
          : [],
        map: data.map,
        coverImage: coverUrl,
        gallery,
        status: data.status,
        featured: data.featured || false,
        createdAt: serverTimestamp(),
      });

      toast.success("Project Added Successfully");

      reset();
      setCoverImage(null);
      setGalleryImages([]);

    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8">

      <Toaster />

      <h1 className="text-4xl font-bold mb-8">
        Add New Project
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
      >

        <input
          {...register("title", { required: true })}
          placeholder="Project Title"
          className="w-full border rounded-xl p-4"
        />

        <input
          {...register("location", { required: true })}
          placeholder="Location"
          className="w-full border rounded-xl p-4"
        />

        <input
          {...register("area")}
          placeholder="Area"
          className="w-full border rounded-xl p-4"
        />

        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          className="w-full border rounded-xl p-4"
        />

        <textarea
          rows={5}
          {...register("description")}
          placeholder="Description"
          className="w-full border rounded-xl p-4"
        />

        <input
          {...register("amenities")}
          placeholder="Amenities (comma separated)"
          className="w-full border rounded-xl p-4"
        />

        <input
          {...register("map")}
          placeholder="Google Map Embed Link"
          className="w-full border rounded-xl p-4"
        />

        <div>
          <label className="block font-semibold mb-2">
            Cover Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setCoverImage(e.target.files[0])
            }
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Gallery Images
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) =>
              setGalleryImages(Array.from(e.target.files))
            }
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Status
          </label>

          <select
            {...register("status")}
            className="w-full border rounded-xl p-4"
          >
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
            <option value="Upcoming">Upcoming</option>
          </select>
        </div>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("featured")}
          />

          Featured Project
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl"
        >
          {loading ? "Uploading..." : "Save Project"}
        </button>

      </form>

    </div>
  );
}