// src\components\experienceSection\AllExperiences.jsx

import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Fullstack Web Developer",
    company: "CodeBoxx Program",
    date: "2024",
    responsibilities: [
      "Completed 16 modules in fullstack development.",
      "Built apps with React, Node.js, MySQL and MongoDB.",
      "Applied Git, teamwork, and agile best practices.",
      "Focused on clean design, structure, and reuse."
    ],
  },
  {
    job: "Self-Taught Developer",
    company: "Personal Projects",
    date: "2024",
    responsibilities: [
      "Building apps with JavaScript and modern stacks.",
      "Learning through platforms, courses, and tutorials.",
      "Practicing with challenges and side projects.",
      "Collaborating in dev communities and groups."
    ],
  },
  {
    job: "AI Developer in Training",
    company: "CodeBoxx AI Program",
    date: "2025 - Ongoing",
    responsibilities: [
      "Learning AI, NLP, vision, and deep learning models.",
      "Developing with Python, Pandas, and TensorFlow.",
      "Creating AI tools for integration into web apps.",
      "Exploring AI ethics and responsible innovation."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden mt-4" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
