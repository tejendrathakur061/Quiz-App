import heroImage from "../assets/Images/hero.svg";
import { Link } from "react-router-dom";

import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">
          About <span className="text-blue-600">QuizForge</span>
        </h1>

        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
          QuizForge is a Full Stack Development quiz platform designed to help
          students improve their programming skills through objective quizzes.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold">Our Mission</h2>

            <p className="text-gray-600 mt-6 text-lg">
              Our mission is to provide an easy and interactive way to learn
              Full Stack Development. Every technology includes carefully
              designed quizzes that help students practice concepts from
              beginner to advanced level.
            </p>
          </div>

          <div>
            <img
              src={heroImage}
              alt="Mission"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Technologies We Cover
          </h2>

          <p className="text-gray-600 mt-4">
            Practice the most popular technologies used in Full Stack
            Development.
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

      {/* Learning Path */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Learning Path
            </h2>

            <p className="text-gray-600 mt-4">
              Follow this simple journey to become a Full Stack Developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl">📘</div>

              <h3 className="text-2xl font-semibold mt-5">
                Learn Basics
              </h3>

              <p className="text-gray-600 mt-3">
                Start with HTML, CSS and JavaScript fundamentals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl">💻</div>

              <h3 className="text-2xl font-semibold mt-5">
                Practice
              </h3>

              <p className="text-gray-600 mt-3">
                Solve 100 questions for every technology and improve your
                knowledge.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-5xl">🏆</div>

              <h3 className="text-2xl font-semibold mt-5">
                Become Job Ready
              </h3>

              <p className="text-gray-600 mt-3">
                Build confidence for interviews through continuous practice.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Ready To Start Learning?
            </h2>

            <p className="mt-5 text-lg">
              Practice, learn and become a better Full Stack Developer.
            </p>

            <Link
              to="/login"
              className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start Quiz
            </Link>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;