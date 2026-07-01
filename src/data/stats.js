import {
  FaChartLine,
  FaUsers,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

export const stats = [
  {
    id: 1,
    number: 250,
    prefix: "+",
    suffix: "%",
    text: "Croissance moyenne",
    icon: FaChartLine,
  },
  {
    id: 2,
    number: 12,
    suffix: "M+",
    text: "Personnes touchées",
    icon: FaUsers,
  },
  {
    id: 3,
    number: 800,
    suffix: "+",
    text: "Projets réalisés",
    icon: FaBriefcase,
  },
  {
    id: 4,
    number: 98,
    suffix: "%",
    text: "Clients satisfaits",
    icon: FaCheckCircle,
  },
];
