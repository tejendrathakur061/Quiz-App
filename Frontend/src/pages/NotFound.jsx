import { Link } from "react-router-dom";
import { FaArrowLeft, FaTriangleExclamation } from "react-icons/fa6";

const NotFound = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-16 bg-slate-100">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-14 text-center">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
            <FaTriangleExclamation className="text-5xl text-red-500" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-blue-600 mt-8">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-5 text-lg leading-relaxed">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <Link
            to="/quiz"
            className="inline-flex items-center justify-center border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;