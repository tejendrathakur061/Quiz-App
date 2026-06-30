import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import heroImage from "../assets/Images/hero.png.svg";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";

import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const categories = [
    {
      title: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
      questions: 50,
      difficulty: "Beginner",
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
      questions: 50,
      difficulty: "Beginner",
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      questions: 50,
      difficulty: "Easy → Medium",
    },
    {
      title: "React",
      icon: <FaReact className="text-cyan-500" />,
      questions: 50,
      difficulty: "Medium",
    },
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      questions: 50,
      difficulty: "Medium",
    },
    {
      title: "Express",
      icon: <SiExpress />,
      questions: 50,
      difficulty: "Medium",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      questions: 50,
      difficulty: "Medium",
    },
    {
      title: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
      questions: 50,
      difficulty: "Easy",
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      questions: 50,
      difficulty: "Easy",
    },
  ];

  return (
    <>
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
              Git and GitHub with 500+ carefully crafted objective questions
              from beginner to advanced level.
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

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Explore Quiz Categories</h2>

          <p className="text-gray-600 mt-3">
            Start practicing your favorite technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              questions={category.questions}
              difficulty={category.difficulty}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
