import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue your learning journey.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">

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
                placeholder="Enter your password"
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

          {/* Remember */}
          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link
              to="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Login;