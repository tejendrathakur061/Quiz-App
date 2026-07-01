import { useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const question = questions[currentQuestion];

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

  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Top */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-blue-600">
              {question.category} Quiz
            </h1>

            <p className="text-gray-600 mt-2">
              Question {currentQuestion + 1} of {questions.length}{" "}
            </p>
          </div>

          <div className="bg-red-100 text-red-600 px-5 py-2 rounded-lg font-semibold">
            ⏰ 20:00
          </div>
        </div>

        {/* Progress */}
        <div className="w-full bg-gray-200 h-3 rounded-full mt-6">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white shadow-md rounded-xl p-8 mt-8">
        <h2 className="text-2xl font-semibold mb-8">{question.question}</h2>

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition ${
                userAnswers[currentQuestion] === option
                  ? "border-blue-600 bg-blue-50"
                  : "hover:bg-gray-50"
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

              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => {
            if (currentQuestion > 0) {
              setCurrentQuestion(currentQuestion - 1);
            }
          }}
          className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button
          onClick={() => {
            if (currentQuestion === questions.length - 1) {
              handleSubmit();
            } else {
              setCurrentQuestion(currentQuestion + 1);
            }
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          disabled={currentQuestion === questions.length - 1}
        >
          {currentQuestion === questions.length - 1 ? "Submit Quiz" : "Next"}
        </button>
      </div>

      {/* Question Palette */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6">Question Palette</h2>

        <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuestion(index);
              }}
              className={`w-12 h-12 rounded-lg font-semibold ${
                currentQuestion === index
                  ? "bg-blue-600 text-white"
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
