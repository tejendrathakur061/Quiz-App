import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBolt, FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const desktopLink = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-blue-400"
        : "hover:text-blue-400"
    }`;

  const mobileLink = ({ isActive }) =>
    `px-6 py-4 transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-800"
    }`;

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <FaBolt className="text-yellow-400 text-3xl" />
          <span>QuizForge</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" className={desktopLink}>
            Home
          </NavLink>

          <NavLink to="/about" className={desktopLink}>
            About
          </NavLink>

          <NavLink to="/how-to-play" className={desktopLink}>
            How To Play
          </NavLink>

          <NavLink to="/dashboard" className={desktopLink}>
            Dashboard
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
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 flex flex-col">
          <NavLink
            to="/"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/how-to-play"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            How To Play
          </NavLink>

          <NavLink
            to="/dashboard"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/login"
            className={mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="mx-4 my-4 text-center bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Signup
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;