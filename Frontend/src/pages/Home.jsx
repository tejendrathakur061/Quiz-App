import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import heroImage from "../assets/Images/hero.svg";

import CategoryCard from "../components/CategoryCard";
import FeatureCard from "../components/FeatureCard";

import { categories } from "../data/categories";
import { features } from "../data/features";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider">
              Welcome to QuizForge
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-4">
              Master{" "}
              <span className="text-blue-600">
                Full Stack Development
              </span>{" "}
              Through Interactive Quizzes
            </h1>

            <p className="text-gray-600 mt-6 text-base sm:text-lg leading-8">
              Practice HTML, CSS, JavaScript, React, Node.js, Express,
              MongoDB, Git and GitHub with 500+ carefully crafted objective
              questions from beginner to advanced level.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/quiz"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg"
              >
                Start Quiz
                <FaArrowRight />
              </Link>

              <Link
                to="/how-to-play"
                className="border-2 border-slate-900 px-8 py-4 rounded-xl hover:bg-slate-900 hover:text-white transition text-center"
              >
                How To Play
              </Link>
            </div>
          </div>

          <div>
            <img
              src={heroImage}
              alt="Developer Illustration"
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Quiz Categories
          </h2>

          <p className="text-gray-600 mt-4">
            Start practicing your favorite technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.title} to="/quiz">
              <CategoryCard
                icon={category.icon}
                title={category.title}
                questions={category.questions}
                difficulty={category.difficulty}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose QuizForge?
          </h2>

          <p className="text-gray-600 mt-4">
            Learn smarter with interactive quizzes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">
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

      {/* Difficulty */}
      <section className="bg-slate-100 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Difficulty Levels
            </h2>

            <p className="text-gray-600 mt-4">
              Progress from beginner to advanced by completing quizzes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-5">🟢</div>

              <h3 className="text-2xl font-semibold">
                Beginner
              </h3>

              <p className="text-gray-600 mt-4">
                HTML, CSS and Git fundamentals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-5">🟡</div>

              <h3 className="text-2xl font-semibold">
                Intermediate
              </h3>

              <p className="text-gray-600 mt-4">
                JavaScript, GitHub and DOM concepts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-5">🔴</div>

              <h3 className="text-2xl font-semibold">
                Advanced
              </h3>

              <p className="text-gray-600 mt-4">
                React, Node.js, Express and MongoDB.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 md:p-14 text-center shadow-xl">

            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Test Your Skills?
            </h2>

            <p className="mt-5 text-lg text-blue-100">
              Challenge yourself with quizzes and become a better Full Stack
              Developer.
            </p>

            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Start Quiz
              <FaArrowRight />
            </Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;