import { useLocation, Link } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">No Result Found</h1>

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const percentage = ((state.score / state.total) * 100).toFixed(0);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <div className="bg-white rounded-xl shadow-lg p-10 text-center">

        <h1 className="text-5xl font-bold text-blue-600">
          Quiz Completed 🎉
        </h1>

        <p className="mt-8 text-2xl">
          Score: <span className="font-bold">{state.score}</span> / {state.total}
        </p>

        <p className="mt-4 text-xl">
          Percentage: <span className="font-bold">{percentage}%</span>
        </p>

        <p
          className={`mt-6 text-2xl font-bold ${
            percentage >= 50 ? "text-green-600" : "text-red-600"
          }`}
        >
          {percentage >= 50 ? "Passed ✅" : "Failed ❌"}
        </p>

        <Link
          to="/quiz"
          className="inline-block mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Try Again
        </Link>

      </div>

    </div>
  );
};

export default Result;