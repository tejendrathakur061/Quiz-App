const CategoryCard = ({ icon, title, questions, difficulty }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-600 mt-2">{questions} Questions</p>

      <p className="text-sm text-blue-600 mt-1">{difficulty}</p>

      <button className="mt-5 text-blue-600 font-medium hover:underline">
        Start Quiz →
      </button>
    </div>
  );
};

export default CategoryCard;
