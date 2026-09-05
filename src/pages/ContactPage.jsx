import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createMessage } from "../admin/services/messageService";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    try {
      await createMessage({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        subject: data.subject || "",
        message: data.message,
      });

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    }
  }

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-3">
            We'd love to hear from you. Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg">
                  Office Address
                </h3>

                <p className="text-gray-600 mt-1">
                  Rajshahi, Bangladesh
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Phone
                </h3>

                <p className="text-gray-600 mt-1">
                  +880 1XXXXXXXXX
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>

                <p className="text-gray-600 mt-1">
                  luminousproperties001@gmail.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Office Hours
                </h3>

                <p className="text-gray-600 mt-1">
                  Saturday - Thursday
                </p>

                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-8">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Name */}

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}

              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone")}
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Subject */}

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Message */}

              <div>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
