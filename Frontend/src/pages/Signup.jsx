import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Create Account 🚀
          </h1>

          <p className="text-gray-500 mt-2">
            Join QuizForge and start your learning journey today.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">

          {/* Full Name */}
          <div>
            <label className="block font-medium mb-2">
              Full Name
            </label>

            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">
              Email Address
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-2">
              Password
            </label>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full border rounded-lg py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-medium mb-2">
              Confirm Password
            </label>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full border rounded-lg py-3 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm cursor-pointer">
            <input type="checkbox" className="mt-1" />

            <span className="text-gray-600">
              I agree to the{" "}
              <span className="text-blue-600 font-medium">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 font-medium">
                Privacy Policy
              </span>.
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Signup;