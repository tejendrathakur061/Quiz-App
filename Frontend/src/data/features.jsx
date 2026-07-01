import { FaQuestionCircle, FaChartLine, FaTrophy, FaUserShield } from "react-icons/fa";

export const features = [
  {
    id: 1,
    icon: <FaQuestionCircle className="text-4xl text-blue-600" />,
    title: "100 Questions Per Quiz",
    description: "Every quiz contains 50 carefully selected objective questions.",
  },
  {
    id: 2,
    icon: <FaChartLine className="text-4xl text-green-600" />,
    title: "Progressive Difficulty",
    description: "Questions become harder from Beginner to Advanced.",
  },
  {
    id: 3,
    icon: <FaTrophy className="text-4xl text-yellow-500" />,
    title: "Track Your Progress",
    description: "Check your previous quiz history and improve your score.",
  },
  {
    id: 4,
    icon: <FaUserShield className="text-4xl text-red-500" />,
    title: "Secure Login",
    description: "Authentication using JWT for secure access.",
  },
];