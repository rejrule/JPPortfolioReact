// src/components/skillsSection/AllSkillsBackend.jsx

import SingleSkill from "./SingleSkill";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const backendSkills = [
  {
    skill: "Node.js",
    icon: SiNodedotjs,
  },
  {
    skill: "Express",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
];

const AllSkillsBackend = () => {
  return (
    <>
      {/* Titre + texte */}
      <div className="flex flex-col items-center mt-[100px]">
        <h2 className="text-5xl text-cyan mb-6">Back-End Development</h2>
        <p className="text-center text-white max-w-[700px] mb-16">
          I have also acquired and practiced several powerful back-end technologies to build scalable and secure applications, including API development and database management.
        </p>
      </div>

      {/* Bloc identique à AllSkills */}
      <div className="bottom-[50px] relative left-[50%] -translate-x-[50%] sm:hidden lg:block mt-12">
        <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
          {backendSkills.map((item, index) => {
            return (
              <motion.div
                variants={fadeIn("up", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                key={index}
              >
                <SingleSkill text={item.skill} imgSvg={<item.icon />} />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Responsive (comme AllSkillsSM) */}
      <div className="sm:block lg:hidden mt-12">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
          {backendSkills.map((item, index) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                key={index}
                className="flex flex-col items-center"
              >
                <item.icon className="text-7xl text-orange" />
                <p className="text-center mt-4 text-white font-bold">{item.skill}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllSkillsBackend;
