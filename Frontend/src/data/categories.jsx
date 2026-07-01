import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";

export const categories = [
    {
      title: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "React",
      icon: <FaReact className="text-cyan-500" />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "Node.js",
      icon: <FaNodeJs className="text-green-600" />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "Express",
      icon: <SiExpress />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      questions: 100,
      difficulty: "Easy → Medium",
    },
  ];