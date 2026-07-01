import ProfilePhoto from "../assets/Images/profile.svg"

const user = {
  name: "Tejendra Thakur",
  email: "tejendrathakur@gmail.com",
  joined: "1 July 2026",
};

const history = [
  {
    id: 1,
    technology: "HTML",
    score: "90%",
    date: "10 Jun 2026",
    status: "Passed",
  },
  {
    id: 2,
    technology: "CSS",
    score: "85%",
    date: "12 Jun 2026",
    status: "Passed",
  },
  {
    id: 3,
    technology: "React",
    score: "60%",
    date: "15 Jun 2026",
    status: "Needs Practice",
  },
];

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="bg-blue-600 text-white rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Welcome, {user.name} 👋</h1>

          <p className="mt-3">{user.email}</p>

          <p className="text-sm mt-2">Member Since: {user.joined}</p>
        </div>

        <div className="mt-6 md:mt-0">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
        </div>
      </div>

      {/* Statistics */}
      <section className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">25</h2>
          <p className="mt-2 text-gray-600">Total Quizzes</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-green-600">82%</h2>
          <p className="mt-2 text-gray-600">Average Score</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500">98%</h2>
          <p className="mt-2 text-gray-600">Best Score</p>
        </div>
      </section>

      {/* Quiz History */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Recent Quiz History</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">Technology</th>
                <th className="p-4 text-left">Score</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4">{item.technology}</td>

                  <td className="p-4">{item.score}</td>

                  <td className="p-4">{item.date}</td>

                  <td
                    className={`p-4 font-semibold ${
                      item.status === "Passed"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
