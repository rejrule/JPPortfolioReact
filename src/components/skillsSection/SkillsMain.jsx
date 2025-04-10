// src/components/skillsSection/SkillsMain.jsx

import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import AllSkillsBackend from "./AllSkillsBackend";
import SkillsText from "./SkillsText";
import SubSkills from "./SubSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      {/* Bloc principal */}
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        {/* Texte d’introduction */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>

        {/* Section Front-End */}
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>

      {/* ✅ Image sous la section Front-End */}
      <SubSkills />

      {/* Section Back-End */}
      <div className="max-w-[1200px] px-4 mx-auto mt-20">
        <AllSkillsBackend />
      </div>

      {/* ✅ ❌ Suppression de l’image en double ici (garde juste si tu veux une 2e visuellement) */}
    </div>
  );
};

export default SkillsMain;
