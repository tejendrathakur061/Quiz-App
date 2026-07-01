import heroImage from "../assets/Images/hero.svg";
import { Link } from "react-router-dom";

import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            About <span className="text-blue-600">QuizForge</span>
          </h1>

          <p className="text-gray-600 mt-6 text-base sm:text-lg md:text-xl">
            QuizForge is a modern Full Stack Development quiz platform created
            to help students and developers strengthen their programming skills
            through interactive objective quizzes.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Mission
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              Our mission is to make learning Full Stack Development simple,
              practical and enjoyable. Every quiz is carefully designed to help
              learners understand concepts from beginner to advanced level while
              preparing for interviews and real-world projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-50 text-blue-700 px-5 py-3 rounded-lg font-semibold">
                500+ Questions
              </div>

              <div className="bg-green-50 text-green-700 px-5 py-3 rounded-lg font-semibold">
                Beginner to Advanced
              </div>

              <div className="bg-yellow-50 text-yellow-700 px-5 py-3 rounded-lg font-semibold">
                Interview Ready
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={heroImage}
              alt="QuizForge"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Technologies We Cover
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Practice the most popular technologies used in modern Full Stack
            Development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Learning Path */}
      <section className="bg-slate-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Learning Path
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Follow these simple steps to become a confident Full Stack
              Developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center hover:-translate-y-1">
              <div className="text-6xl">📘</div>

              <h3 className="text-2xl font-bold mt-5">
                Learn Basics
              </h3>

              <p className="text-gray-600 mt-4">
                Build a strong foundation with HTML, CSS and JavaScript.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center hover:-translate-y-1">
              <div className="text-6xl">💻</div>

              <h3 className="text-2xl font-bold mt-5">
                Practice Daily
              </h3>

              <p className="text-gray-600 mt-4">
                Solve quizzes regularly to improve your concepts and confidence.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center hover:-translate-y-1">
              <div className="text-6xl">🏆</div>

              <h3 className="text-2xl font-bold mt-5">
                Crack Interviews
              </h3>

              <p className="text-gray-600 mt-4">
                Prepare for technical interviews with real-world objective
                questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why QuizForge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-600">500+</h3>
            <p className="mt-2 text-gray-600">Quiz Questions</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-600">8+</h3>
            <p className="mt-2 text-gray-600">Technologies</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-orange-500">3</h3>
            <p className="mt-2 text-gray-600">Difficulty Levels</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-4xl font-bold text-purple-600">100%</h3>
            <p className="mt-2 text-gray-600">Free Practice</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-blue-600 rounded-2xl text-white p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready To Start Learning?
            </h2>

            <p className="mt-5 text-lg text-blue-100">
              Practice daily, improve your skills and become a better Full Stack
              Developer.
            </p>

            <Link
              to="/quiz"
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