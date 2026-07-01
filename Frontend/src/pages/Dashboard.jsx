import ProfilePhoto from "../assets/Images/profile.svg";

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
    <section className="bg-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex items-center gap-6">

            <img
              src={ProfilePhoto}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-blue-500"
            />

            <div>

              <h1 className="text-3xl font-bold text-slate-800">
                Welcome, {user.name} 👋
              </h1>

              <p className="text-gray-600 mt-2">
                {user.email}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Member Since : {user.joined}
              </p>

            </div>

          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-semibold">
            Edit Profile
          </button>

        </div>

        {/* Quiz History */}

        <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">

            <h2 className="text-2xl font-bold">
              Recent Quiz History
            </h2>

            <button className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition">
              View All
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-slate-900 text-white">

                  <th className="p-4 text-left">Technology</th>

                  <th className="p-4 text-left">Score</th>

                  <th className="p-4 text-left">Date</th>

                  <th className="p-4 text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                {history.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b hover:bg-slate-50 transition"
                  >

                    <td className="p-4 font-medium">
                      {item.technology}
                    </td>

                    <td className="p-4 font-semibold text-blue-600">
                      {item.score}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.date}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.status === "Passed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;