import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  const navigate = useNavigate();
  const question = questions[currentQuestion];

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });

    navigate("/result", {
      state: {
        score,
        total: questions.length,
      },
    });
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

      {/* Header */}

      <div className="bg-white shadow-md rounded-xl p-5 sm:p-6 sticky top-20 z-20">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

          <div>

            <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
              {question.category} Quiz
            </h1>

            <p className="text-gray-600 mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>

          </div>

          <div
            className={`px-5 py-2 rounded-lg font-semibold ${
              timeLeft <= 120
                ? "bg-red-600 text-white animate-pulse"
                : "bg-red-100 text-red-600"
            }`}
          >
            ⏰ {formatTime(timeLeft)}
          </div>

        </div>

        {/* Progress */}

        <div className="w-full bg-gray-200 h-3 rounded-full mt-6">

          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />

        </div>

      </div>

      {/* Question */}

      <div className="bg-white shadow-md rounded-xl p-5 sm:p-8 mt-8">

        <h2 className="text-xl sm:text-2xl font-semibold mb-8">
          {question.question}
        </h2>

        <div className="space-y-4">

          {question.options.map((option, index) => (

            <label
              key={index}
              className={`flex items-center gap-4 border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                userAnswers[currentQuestion] === option
                  ? "border-blue-600 bg-blue-50"
                  : "hover:border-blue-300 hover:bg-gray-50"
              }`}
            >

              <input
                type="radio"
                name="answer"
                value={option}
                checked={userAnswers[currentQuestion] === option}
                onChange={(e) =>
                  setUserAnswers({
                    ...userAnswers,
                    [currentQuestion]: e.target.value,
                  })
                }
              />

              <span>{option}</span>

            </label>

          ))}

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">

        <button
          onClick={() => {
            if (currentQuestion > 0) {
              setCurrentQuestion(currentQuestion - 1);
            }
          }}
          disabled={currentQuestion === 0}
          className="w-full sm:w-auto bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={() => {
            if (currentQuestion === questions.length - 1) {
              const confirmSubmit = window.confirm(
                "Are you sure you want to submit the quiz?"
              );

              if (confirmSubmit) {
                handleSubmit();
              }
            } else {
              setCurrentQuestion(currentQuestion + 1);
            }
          }}
          className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white transition ${
            currentQuestion === questions.length - 1
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {currentQuestion === questions.length - 1
            ? "Submit Quiz"
            : "Next"}
        </button>

      </div>

      {/* Answer Counter */}

      <div className="mt-6 text-center text-gray-600 font-medium">
        Answered {Object.keys(userAnswers).length} / {questions.length}
      </div>

      {/* Question Palette */}

      <div className="bg-white shadow-md rounded-xl p-6 mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Question Palette
        </h2>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">

          {questions.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg font-semibold transition ${
                currentQuestion === index
                  ? "bg-blue-600 text-white"
                  : userAnswers[index]
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Quiz;