import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import heroImage from "../assets/Images/hero.svg";

import CategoryCard from "../components/CategoryCard";

import { features } from "../data/features";
import { categories } from "../data/categories";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <p className="text-blue-600 font-semibold">Welcome to QuizForge</p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
              Master{" "}
              <span className="text-blue-600">Full Stack Development</span>{" "}
              Through Interactive Quizzes
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Practice HTML, CSS, JavaScript, React, Node.js, Express, MongoDB,
              Git and GitHub with 500+ carefully crafted objective questions
              from beginner to advanced level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
              className="w-full max-w-lg mx-auto"
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

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Why Choose QuizForge?</h2>

          <p className="text-gray-600 mt-3">
            Learn smarter with interactive quizzes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Difficulty Levels</h2>

            <p className="text-gray-600 mt-3">
              Progress from beginner to advanced by completing quizzes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl mb-4">🟢</div>

              <h3 className="text-2xl font-semibold">Beginner</h3>

              <p className="text-gray-600 mt-3">
                HTML, CSS and Git fundamentals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl mb-4">🟡</div>

              <h3 className="text-2xl font-semibold">Intermediate</h3>

              <p className="text-gray-600 mt-3">
                JavaScript, GitHub and DOM concepts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl mb-4">🔴</div>

              <h3 className="text-2xl font-semibold">Advanced</h3>

              <p className="text-gray-600 mt-3">
                React, Node.js, Express and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold">Ready to Test Your Skills?</h2>

            <p className="mt-5 text-lg">
              Challenge yourself with quizzes and become a better Full Stack
              Developer.
            </p>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Quiz <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
