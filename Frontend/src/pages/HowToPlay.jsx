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
    description: "Select your favorite technology and difficulty level.",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-5xl text-orange-500" />,
    title: "Submit Answers",
    description: "Answer all questions and submit your quiz.",
  },
  {
    id: 5,
    icon: <FaChartBar className="text-5xl text-red-500" />,
    title: "View Result",
    description: "Check your score and previous quiz history.",
  },
];

const HowToPlay = () => {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">
          How To <span className="text-blue-600">Play</span>
        </h1>

        <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
          Follow these simple steps to start your Full Stack Development
          learning journey.
        </p>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition p-8 text-center"
            >
              {step.icon}

              <h2 className="text-2xl font-semibold mt-5">
                {step.title}
              </h2>

              <p className="text-gray-600 mt-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Rules */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Quiz Rules
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8 mt-10">

            <ul className="space-y-4 text-lg text-gray-700 list-disc ml-6">
              <li>Each technology contains 100 objective questions.</li>
              <li>Each quiz attempt displays 20 random questions.</li>
              <li>Each question has only one correct answer.</li>
              <li>You can attempt quizzes multiple times.</li>
              <li>Your previous scores are saved in your dashboard.</li>
            </ul>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">

            <h2 className="text-4xl font-bold">
              Ready To Play?
            </h2>

            <p className="mt-5 text-lg">
              Create your account and start solving quizzes today.
            </p>

            <Link
              to="/signup"
              className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default HowToPlay;