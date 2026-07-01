import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold">
            QuizForge
          </h2>

          <p className="text-gray-400 mt-4">
            Improve your Full Stack Development skills through interactive quizzes.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/how-to-play">
              How To Play
            </Link>

            <Link to="/login">
              Login
            </Link>

          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Follow
          </h3>

          <div className="flex gap-5 text-3xl">

            <FaGithub className="hover:text-blue-400 cursor-pointer transition"/>

            <FaLinkedin className="hover:text-blue-400 cursor-pointer transition"/>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 py-5 text-center text-gray-400">

        © 2026 QuizForge. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;