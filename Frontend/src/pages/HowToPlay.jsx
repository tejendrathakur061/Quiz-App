import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaSignInAlt,
  FaPlayCircle,
  FaCheckCircle,
  FaChartBar,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus className="text-5xl text-blue-600" />,
    title: "Create Account",
    description: "Register with your name, email and password.",
  },
  {
    id: 2,
    icon: <FaSignInAlt className="text-5xl text-green-600" />,
    title: "Login",
    description: "Login securely using your account.",
  },
  {
    id: 3,
    icon: <FaPlayCircle className="text-5xl text-purple-600" />,
    title: "Choose a Quiz",
    description: "Select your favorite technology and start solving questions.",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-5xl text-orange-500" />,
    title: "Submit Answers",
    description: "Complete the quiz and submit your answers before time ends.",
  },
  {
    id: 5,
    icon: <FaChartBar className="text-5xl text-red-500" />,
    title: "View Result",
    description: "Analyze your score and improve your weak topics.",
  },
];

const rules = [
  "Each quiz contains multiple objective questions.",
  "Only one option is correct for each question.",
  "Every quiz has a countdown timer.",
  "Answered questions are marked green in the palette.",
  "You can jump to any question anytime.",
  "Your score is shown immediately after submission.",
];

const HowToPlay = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            How To Play
          </h1>

          <p className="mt-6 text-base sm:text-lg max-w-3xl mx-auto text-blue-100">
            Learn how QuizForge works and start improving your Full Stack
            Development skills in just a few simple steps.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Getting Started
          </h2>

          <p className="text-gray-600 mt-3">
            Complete these steps before taking your first quiz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 p-8 text-center"
            >
              <div className="flex justify-center">{step.icon}</div>

              <div className="mt-5 w-10 h-10 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {step.id}
              </div>

              <h3 className="text-2xl font-semibold mt-5">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Rules */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Quiz Rules
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-slate-50 rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-700">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center">
            Tips for Better Scores 🚀
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl">Read Carefully</h3>
              <p className="text-gray-600 mt-3">
                Read every question completely before selecting an answer.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl">Manage Time</h3>
              <p className="text-gray-600 mt-3">
                Keep an eye on the timer and don't spend too long on one
                question.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-xl">Practice Daily</h3>
              <p className="text-gray-600 mt-3">
                The more quizzes you solve, the better your understanding
                becomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready To Start?
          </h2>

          <p className="mt-5 text-blue-100 text-base md:text-lg">
            Create your account and begin your Full Stack Development journey
            with QuizForge.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default HowToPlay;