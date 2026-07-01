import { Link, useLocation } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">No Result Found</h1>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const percentage = Math.round((state.score / state.total) * 100);

  const message =
    percentage >= 90
      ? "Excellent! 🏆"
      : percentage >= 75
      ? "Great Job! 🎉"
      : percentage >= 50
      ? "Good Effort 👍"
      : "Keep Practicing 💪";

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Quiz Completed 🎉
        </h1>

        <h2 className="text-3xl font-semibold mt-6">
          {message}
        </h2>

        <p className="mt-6 text-2xl">
          Score:{" "}
          <span className="font-bold text-blue-600">
            {state.score}
          </span>{" "}
          / {state.total}
        </p>

        <p className="mt-3 text-xl">
          Percentage:{" "}
          <span className="font-bold">
            {percentage}%
          </span>
        </p>

        <p
          className={`mt-6 text-2xl font-bold ${
            percentage >= 50 ? "text-green-600" : "text-red-600"
          }`}
        >
          {percentage >= 50 ? "Passed ✅" : "Failed ❌"}
        </p>
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-4xl font-bold text-green-600">
            {state.score}
          </h3>
          <p className="mt-2 text-gray-600">Correct Answers</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-4xl font-bold text-red-500">
            {state.total - state.score}
          </h3>
          <p className="mt-2 text-gray-600">Wrong Answers</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600">
            {percentage}%
          </h3>
          <p className="mt-2 text-gray-600">Accuracy</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
        <Link
          to="/quiz"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-center"
        >
          🔄 Try Again
        </Link>

        <Link
          to="/"
          className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition text-center"
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Result;