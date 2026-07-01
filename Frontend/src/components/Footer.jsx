import { Link } from "react-router-dom";
import { FaBolt, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 text-3xl font-bold">
            <FaBolt className="text-yellow-400" />
            <span>QuizForge</span>
          </div>

          <p className="text-gray-400 mt-4 leading-7">
            Improve your Full Stack Development skills through interactive
            quizzes. Practice, learn and become interview ready.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link
              to="/"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              About
            </Link>

            <Link
              to="/how-to-play"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              How To Play
            </Link>

            <Link
              to="/login"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Signup
            </Link>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Connect With Me
          </h3>

          <div className="flex gap-5 text-3xl">

            <a
              href="https://github.com/tejendrathakur061"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/tejendra-jadon"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition hover:scale-110"
            >
              <FaLinkedin />
            </a>

          </div>

          <p className="text-gray-400 mt-5 text-sm">
            Built with React, Tailwind CSS & ❤️
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 py-5 px-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} QuizForge. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;