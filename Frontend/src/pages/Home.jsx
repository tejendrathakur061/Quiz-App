import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import heroImage from "../assets/Images/hero.png.svg";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <p className="text-blue-600 font-semibold">Welcome to QuizForge</p>

          <h1 className="text-5xl md:text-5xl font-bold leading-tight mt-4">
            Master
            <span className="text-blue-600"> Full Stack Development </span>
            Through Interactive Quizzes
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Practice HTML, CSS, JavaScript, React, Node.js, Express, MongoDB,
            Git and GitHub with 500+ carefully crafted objective questions from
            beginner to advanced level.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              Start Quiz
              <FaArrowRight />
            </Link>

            <Link
              to="/how-to-play"
              className="border border-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white transition"
            >
              How To Play
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={heroImage}
            alt="Developer Illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
