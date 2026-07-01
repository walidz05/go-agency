import member1 from "../assets/images/team/member1.webp";
import member2 from "../assets/images/team/member2.webp";
import member3 from "../assets/images/team/member3.webp";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const teamContent = {
  badge: "NOTRE ÉQUIPE",
  title: "Des experts passionnés à votre service",
  highlight: "passionnés",
  description:
    "Une équipe pluridisciplinaire unie par la même mission : faire grandir votre marque.",
  button: "Rejoindre l'équipe",
};

export const teamMembers = [
  {
    id: 1,
    image: member1,
    name: "Yassine L.",
    position: "CEO & Stratégie",
    social: [
      { icon: FaLinkedinIn, link: "#" },
      { icon: FaInstagram, link: "#" },
      { icon: HiOutlineMail, link: "#" },
    ],
  },
  {
    id: 2,
    image: member2,
    name: "Imane K.",
    position: "Directrice Marketing",
    social: [
      { icon: FaLinkedinIn, link: "#" },
      { icon: FaInstagram, link: "#" },
      { icon: HiOutlineMail, link: "#" },
    ],
  },
  {
    id: 3,
    image: member3,
    name: "Mehdi B.",
    position: "Lead Designer",
    social: [
      { icon: FaLinkedinIn, link: "#" },
      { icon: FaInstagram, link: "#" },
      { icon: HiOutlineMail, link: "#" },
    ],
  },
];
