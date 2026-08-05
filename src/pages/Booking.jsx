import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import { createBooking } from "../admin/services/bookingService";
import useProjects from "../admin/hooks/useProjects";

export default function Booking() {
  const navigate = useNavigate();

  const { projects } = useProjects();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    try {
      await createBooking(data);

      toast.success("Booking Request Submitted Successfully");

      reset();

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <Toaster />

      <div className="bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold mb-2">
          Book a Property Visit
        </h1>

        <p className="text-gray-500 mb-8">
          Fill out the form below and our team will contact you shortly.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          <input
            placeholder="Full Name"
            className="w-full border rounded-xl p-4"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <p className="text-red-600">
              {errors.name.message}
            </p>
          )}

          <input
            placeholder="Phone Number"
            className="w-full border rounded-xl p-4"
            {...register("phone", {
              required: "Phone is required",
            })}
          />

          {errors.phone && (
            <p className="text-red-600">
              {errors.phone.message}
            </p>
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4"
            {...register("email")}
          />

          <select
            className="w-full border rounded-xl p-4"
            {...register("project", {
              required: "Please select a project",
            })}
          >
            <option value="">
              Select Project
            </option>

            {projects.map((project) => (
              <option
                key={project.id}
                value={project.title}
              >
                {project.title}
              </option>
            ))}
          </select>

          {errors.project && (
            <p className="text-red-600">
              {errors.project.message}
            </p>
          )}

          <input
            type="date"
            className="w-full border rounded-xl p-4"
            {...register("visitDate")}
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full border rounded-xl p-4"
            {...register("message")}
          />

          <button
            disabled={isSubmitting}
            className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-4 font-semibold"
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit Booking"}
          </button>

        </form>

      </div>

    </div>
  );
}