import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-6">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Join QuizForge and start practicing today.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="font-medium">Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">Password</label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="font-medium">Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full mt-2 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </section>
  );
};

export default Signup;