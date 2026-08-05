import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-green-50 flex justify-center items-center px-6">

      <Toaster />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border rounded-xl p-4 mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full border rounded-xl p-4 mb-6"
        />

        <button
          className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl"
        >
          Login
        </button>

      </form>

    </section>
  );
}