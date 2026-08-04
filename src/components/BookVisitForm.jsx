import { useState } from "react";

export default function BookVisitForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setSuccess(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 mt-8">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Book a Site Visit
      </h2>

      {success && (
        <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-5">
          ✅ Your booking request has been submitted successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3"
        />

        <textarea
          rows="4"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
        >
          Book Now
        </button>

      </form>

    </div>
  );
}