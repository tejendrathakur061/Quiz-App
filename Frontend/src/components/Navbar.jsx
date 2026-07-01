import { NavLink } from "react-router-dom";
import { FaBolt } from "react-icons/fa6";

function Navbar() {
  const isLoggedIn = false;

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaBolt className="text-yellow-400" />
          <span>QuizForge</span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/how-to-play"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400 transition"
            }
          >
            How To Play
          </NavLink>

          <NavLink
            to="/login"
            className="px-4 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Signup
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "hover:text-blue-400 transition"
            }
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
